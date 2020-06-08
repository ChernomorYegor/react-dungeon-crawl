import React from 'react';
import PropTypes from 'prop-types';

function StartMenu({showSettings, startGame, certificates, bosses, difficulty, mapWidth, mapHeight, generateItems, getRandomNumber}) {
    function _startGame() {
        let playerX = getRandomNumber(0, mapWidth - 1);
        let map = generateMap(playerX);
        console.log(map, playerX);
        startGame({map, playerX});
    }

    function generateMap(playerX) {
        let generatedMap = [];
        let numberOfWalls = Math.ceil((mapWidth * difficulty) / 100);
        console.log(numberOfWalls);
        for (let i = 0; i < mapHeight; i++) {
            let generatedRowMap = [];

            if (i === 0) {
                generatedRowMap[playerX] = 'player';
            }

            let wallVar = 0;
            while (wallVar < numberOfWalls) {
                let randomSquare = getRandomNumber(0, mapWidth - 1);
                if (generatedRowMap[randomSquare] !== 'wall' && generatedRowMap[randomSquare] !== 'player') {
                    generatedRowMap[randomSquare] = 'wall';
                    wallVar++;
                }
            }

            for (let j = 0; j < mapWidth; j++) {
                if (!generatedRowMap[j]) {
                    generatedRowMap[j] = 'empty';
                }
            }
            generatedMap.push(generatedRowMap);
        }

        generateBosses(generatedMap, bosses);
        generateItems(generatedMap, certificates, 'certificate');

        return generatedMap;
    }

    function generateBosses(map, bosses) {
        let bossesInterval = Math.floor(mapHeight / bosses);
        let bossVar = 0;
        console.log(bossesInterval);
        while (bossVar < mapHeight) {
            let bossY = getRandomNumber(bossVar, bossVar + bossesInterval - 5);
            let bossX = getRandomNumber(0, mapWidth - 5);
            console.log(bossVar);
            for (let bw = 1; bw < 4; bw++) {
                map[bossY][bossX] = 'boss-wall';
                map[bossY + bw][bossX] = 'boss-wall';
                map[bossY][bossX + bw] = 'boss-wall';
                map[bossY + bw][bossX + 3] = 'boss-wall';
                map[bossY + 3][bossX + bw] = 'boss-wall';
            }
            for (let b = 1; b < 3; b++) {
                map[bossY + 1][bossX + b] = 'boss';
                map[bossY + 2][bossX + b] = 'boss';
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
            </div>
        </div>
    );
}

StartMenu.propTypes = {
    showSettings: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    certificates: PropTypes.number.isRequired,
    bosses: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    mapWidth: PropTypes.number.isRequired,
    mapHeight: PropTypes.number.isRequired,
    generateItems: PropTypes.func.isRequired,
    getRandomNumber: PropTypes.func.isRequired,
};

export default StartMenu;