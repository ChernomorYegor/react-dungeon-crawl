import React from 'react';
import PropTypes from 'prop-types';
import StartMenu from "./containers/StartMenu";
import Game from "./containers/Game";
import Settings from "./containers/Settings";

function App({isSettingsShow, gameOn, mapWidth, mapHeight}) {
    const windowHeight = document.documentElement.clientHeight;
    console.log('windowHeight', windowHeight);
    const EMPTY = 'empty';
    const WALL = 'wall';
    const BOSS_WALL = 'boss-wall';

    function generateItems(map, items, itemClass) {
        let itemsInterval = Math.floor(mapHeight / items);
        let itemVar = 0;
        let itemsBalance = 0;
        if (mapHeight % items !== 0) {
            itemVar = 1;
            itemsBalance = Math.ceil((mapHeight % items)) - 1;
        }
        console.log(`itemBalance`, itemsBalance);
        console.log(`itemsInterval`, itemsInterval);
        while (itemVar < mapHeight) {
            let itemY = getRandomNumber(itemVar, itemVar + itemsInterval - 1);
            let itemX = getRandomNumber(0, mapWidth - 1);
            console.log(`itemVar`, itemVar);
            if ( (map[itemY][itemX] === EMPTY) &&
                !(
                    !(itemX === 0) && !(itemX === mapWidth - 1) && !(itemY === 0) && !(itemY === mapHeight - 1) &&
                    (map[itemY][itemX - 1] === WALL || map[itemY][itemX - 1] === BOSS_WALL) &&
                    (map[itemY + 1][itemX] === WALL || map[itemY + 1][itemX] === BOSS_WALL) &&
                    (map[itemY][itemX + 1] === WALL || map[itemY][itemX + 1] === BOSS_WALL) &&
                    (map[itemY - 1][itemX] === WALL || map[itemY - 1][itemX] === BOSS_WALL)
                )
            ) {
                map[itemY][itemX] = itemClass;
                if (itemsBalance > 0) {
                    itemVar += itemsInterval + 1;
                    itemsBalance--;
                } else if (itemsBalance === 0) {
                    itemVar += itemsInterval;
                }
            }
        }
    }

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div style={{height: windowHeight + 'px'}}>
            { (!isSettingsShow && !gameOn) && <StartMenu generateItems={generateItems} getRandomNumber={getRandomNumber}/> }
            { gameOn && <Game windowHeight={windowHeight} generateItems={generateItems}/> }
            { isSettingsShow && <Settings /> }
        </div>
    );
}

App.propTypes = {
    isSettingsShow: PropTypes.bool,
    gameOn: PropTypes.bool,
    mapWidth: PropTypes.number.isRequired,
    mapHeight: PropTypes.number.isRequired,
};

export default App;