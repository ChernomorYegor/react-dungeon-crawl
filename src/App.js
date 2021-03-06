import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import StartMenu from "./containers/StartMenu";
import Game from "./containers/Game";
import Settings from "./containers/Settings";
import TopResults from "./containers/TopResults";

function App({gameOn, isSettingsShow, mapWidth, mapHeight, isTopResultsShow, getSettings}) {

    const EMPTY = 'empty';
    const WALL = 'wall';
    const BOSS_WALL = 'boss-wall';

    const MIN_SQUARE_SIZE = 25;

    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    const viewportWidthMax = 10 * Math.floor((windowWidth * 9.1) / (100 * MIN_SQUARE_SIZE));
    const viewportHeightMax = 10 * Math.floor((windowHeight * 5.1) / (100 * MIN_SQUARE_SIZE));

    useEffect(() => {
        getSettings();
    }, []);

    function generateItems(map, items, itemClass) {
        let itemsInterval = Math.floor(mapHeight / items);
        let itemIncrement = 0;
        let itemVar = 0;
        let itemsBalance = 0;

        if (mapHeight % items !== 0) {
            itemVar = 1;
            itemsBalance = Math.ceil((mapHeight % items)) - 1;
        }

        while (itemVar < mapHeight) {
            let itemY = getRandomNumber(itemVar, itemVar + itemsInterval - 1);
            let itemX = getRandomNumber(0, mapWidth - 1);

            if ( (map[itemY][itemX] === EMPTY) &&
                !(
                    !(itemX === 0) && !(itemX === mapWidth - 1) && !(itemY === 0) && !(itemY === mapHeight - 1) &&
                    isWall(itemY, itemX - 1) && isWall(itemY, itemX + 1) && isWall(itemY - 1, itemX) && isWall(itemY + 1, itemX)
                ) &&
                !(
                    (itemY === 0) && (itemX === 0) &&
                    isWall(itemY, itemX + 1) && isWall(itemY + 1, itemX) && isWall(itemY, mapWidth - 1)
                ) &&
                !(
                    (itemY === 0) && (itemX === mapWidth - 1) &&
                    isWall(itemY, itemX - 1) && isWall(itemY + 1, itemX) && isWall(itemY, 0)
                ) &&
                !(
                    (itemY === mapHeight - 1) && (itemX === mapWidth - 1) &&
                    isWall(itemY, itemX - 1) && isWall(itemY - 1, itemX) && isWall(itemY, 0)
                ) &&
                !(
                    (itemY === mapHeight - 1) && (itemX === 0) &&
                    isWall(itemY, itemX + 1) && isWall(itemY - 1, itemX) && isWall(itemY, mapWidth - 1)
                ) &&
                !(
                    (itemY === 0) && !(itemX === 0) && !(itemX === mapWidth - 1) &&
                    isWall(itemY, itemX - 1) && isWall(itemY, itemX + 1) && isWall(itemY + 1, itemX)
                ) &&
                !(
                    (itemY === mapHeight - 1) && !(itemX === 0) && !(itemX === mapWidth - 1) &&
                    isWall(itemY, itemX - 1) && isWall(itemY, itemX + 1) && isWall(itemY - 1, itemX)
                ) &&
                !(
                    (itemX === 0) && !(itemY === 0) && !(itemY === mapHeight - 1) &&
                    isWall(itemY, itemX + 1) && isWall(itemY + 1, itemX) && isWall(itemY - 1, itemX)
                ) &&
                !(
                    (itemX === mapWidth - 1) && !(itemY === 0) && !(itemY === mapHeight - 1) &&
                    isWall(itemY, itemX - 1) && isWall(itemY + 1, itemX) && isWall(itemY - 1, itemX)
                )
            ) {
                map[itemY][itemX] = `${itemClass}${itemIncrement}`;
                itemIncrement++;

                if (itemsBalance > 0) {
                    itemVar += itemsInterval + 1;
                    itemsBalance--;
                } else if (itemsBalance === 0) {
                    itemVar += itemsInterval;
                }
            }
        }

        function isWall(y, x) {
            return (map[y][x] === WALL || map[y][x] === BOSS_WALL);
        }
    }

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div style={{height: windowHeight + 'px'}}>
            { (!gameOn && !isSettingsShow && !isTopResultsShow) && <StartMenu generateItems={generateItems} getRandomNumber={getRandomNumber}/> }
            { gameOn && <Game windowWidth={windowWidth} windowHeight={windowHeight} generateItems={generateItems}/> }
            { isSettingsShow && <Settings viewportWidthMax={viewportWidthMax} viewportHeightMax={viewportHeightMax} /> }
            { isTopResultsShow && <TopResults /> }
        </div>
    );
}

App.propTypes = {
    gameOn: PropTypes.bool,
    isSettingsShow: PropTypes.bool,
    mapWidth: PropTypes.number.isRequired,
    mapHeight: PropTypes.number.isRequired,
    isTopResultsShow: PropTypes.bool.isRequired,
    getSettings: PropTypes.func.isRequired,
};

export default App;