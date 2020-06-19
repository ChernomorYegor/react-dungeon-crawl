import React from 'react';
import PropTypes from 'prop-types';

function StartMenu(
    {
        CERTIFICATES,
        BOSSES,

        difficulty,
        mapWidth,
        mapHeight,
        viewportWidth,

        generateItems,
        getRandomNumber,

        startGame,
        showSettings,
        showTopResults,
    }
) {
    const PLAYER = 'player';
    const WALL = 'wall';
    const EMPTY = 'empty';
    const BOSS_WALL = 'boss-wall';
    const BOSS = 'boss';
    const BOSS_SIZE = 4;
    const CERTIFICATE = 'certificate';

    function _startGame() {
        let playerX = getRandomNumber(0, viewportWidth - 1);
        let map = generateMap(playerX);
        startGame({map, playerX});
    }

    function generateMap(playerX) {
        let generatedMap = [];
        let numberOfWalls = Math.ceil(mapWidth * difficulty / 100);

        for (let i = 0; i < mapHeight; i++) {
            let generatedRowMap = [];

            if (i === 0) {
                generatedRowMap[playerX] = PLAYER;
            }

            let wallVar = 0;
            while (wallVar < numberOfWalls) {
                let randomSquare = getRandomNumber(0, mapWidth - 1);
                if (generatedRowMap[randomSquare] !== WALL && generatedRowMap[randomSquare] !== PLAYER &&
                    !(i === 1 && randomSquare === playerX)) {
                    generatedRowMap[randomSquare] = WALL;
                    wallVar++;
                }
            }

            for (let j = 0; j < mapWidth; j++) {
                if (!generatedRowMap[j]) {
                    generatedRowMap[j] = EMPTY;
                }
            }
            generatedMap.push(generatedRowMap);
        }

        generateBosses(generatedMap, BOSSES);
        generateItems(generatedMap, CERTIFICATES, CERTIFICATE);

        return generatedMap;
    }

    function generateBosses(map, bosses) {
        let bossesInterval = Math.floor(mapHeight / bosses);
        let bossVar = 0;

        while (bossVar < mapHeight - 1) {
            let bossY = getRandomNumber(bossVar + 1, bossVar + (bossesInterval - 1) - BOSS_SIZE);
            let bossX = getRandomNumber(0, (mapWidth - 1) - BOSS_SIZE);

            for (let bw = 1; bw < 4; bw++) {
                map[bossY][bossX] = BOSS_WALL;
                map[bossY + bw][bossX] = BOSS_WALL;
                map[bossY][bossX + bw] = BOSS_WALL;
                map[bossY + bw][bossX + 3] = BOSS_WALL;
                map[bossY + 3][bossX + bw] = BOSS_WALL;
            }
            for (let b = 1; b < 3; b++) {
                map[bossY + 1][bossX + b] = BOSS;
                map[bossY + 2][bossX + b] = BOSS;
            }
            bossVar += bossesInterval;
        }
    }

    return (
        <div className="start-container">
            <h1>Dungeon Crawl</h1>
            <div className="start-menu">
                <button type="button" onClick={_startGame}>Start Game</button>
                <button type="button" onClick={showSettings}>Settings</button>
                <button type="button" onClick={showTopResults}>Top Results</button>
            </div>
        </div>
    );
}

StartMenu.propTypes = {
    CERTIFICATES: PropTypes.number.isRequired,
    BOSSES: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    mapWidth: PropTypes.number.isRequired,
    mapHeight: PropTypes.number.isRequired,
    viewportWidth: PropTypes.number.isRequired,
    generateItems: PropTypes.func.isRequired,
    getRandomNumber: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    showSettings: PropTypes.func.isRequired,
    showTopResults: PropTypes.func.isRequired,
};

export default StartMenu;