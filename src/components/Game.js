import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

function Game(
    {
        certificatesAll,
        skillsAll,

        gameMap,
        currentCertificates,
        currentSkills,
        isDefeatedBoss,
        level,
        points,
        currentOffset,
        playerX,
        playerY,

        difficulty,
        mapWidth,
        mapHeight,
        viewportHeight,

        moveLeft,
        moveUp,
        moveRight,
        moveDown,
        changeOffset,
        addCertificate,
        startLevel2,
        addSkill,
        removeBossWalls,
        addPointsBoss,
        quitGame,
        endGame,

        generateItems,
    }
) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!isDefeatedBoss) {
            function handleWindowKeyDown(e) {
                const beforeBorder = 3;
                switch (e.key) {
                    case 'ArrowLeft':
                        console.log('ArrowLeft');
                        if (playerX === 0 && gameMap[playerY][mapWidth - 1] !== 'wall' && gameMap[playerY][mapWidth - 1] !== 'boss-wall') {
                            addItems(gameMap[playerY][mapWidth - 1]);
                            moveLeft(mapWidth - 1);
                            break;
                        }
                        if (playerX !== 0 && gameMap[playerY][playerX - 1] !== 'wall' && gameMap[playerY][playerX - 1] !== 'boss-wall') {
                            addItems(gameMap[playerY][playerX - 1]);
                            moveLeft(playerX - 1);
                            break;
                        }
                        break;
                    case 'ArrowUp':
                        console.log('ArrowUp');
                        if (playerY === 0) {
                            break;
                        }
                        if (gameMap[playerY - 1][playerX] !== 'wall' && gameMap[playerY - 1][playerX] !== 'boss-wall') {
                            if ((playerY <= beforeBorder + currentOffset) && !(playerY <= beforeBorder)) {
                                changeOffset(currentOffset - 1);
                            }
                            addItems(gameMap[playerY - 1][playerX]);
                            moveUp(playerY - 1);
                            break;
                        }
                        break;
                    case 'ArrowRight':
                        console.log('ArrowRight');
                        if (playerX === mapWidth - 1 && gameMap[playerY][0] !== 'wall' && gameMap[playerY][0] !== 'boss-wall') {
                            addItems(gameMap[playerY][0]);
                            moveLeft(0);
                            break;
                        }
                        if (playerX !== mapWidth - 1 && gameMap[playerY][playerX + 1] !== 'wall' && gameMap[playerY][playerX + 1] !== 'boss-wall') {
                            addItems(gameMap[playerY][playerX + 1]);
                            moveRight(playerX + 1);
                            break;
                        }
                        break;
                    case 'ArrowDown':
                        console.log('ArrowDown');
                        if (playerY === gameMap.length - 1) {
                            break;
                        }
                        if (gameMap[playerY + 1][playerX] !== 'wall' && gameMap[playerY + 1][playerX] !== 'boss-wall') {
                            if ((playerY >= (viewportHeight - 1) - beforeBorder + currentOffset) && !(playerY >= (mapHeight - 1) - beforeBorder)) {
                                changeOffset(currentOffset + 1);
                            }
                            addItems(gameMap[playerY + 1][playerX]);
                            moveDown(playerY + 1);
                            break;
                        }
                        break;
                    case 'Escape':
                        console.log('Quit Game');
                        _quitGame()
                        break;
                    default:
                        break;
                }
            }

            window.addEventListener('keydown', handleWindowKeyDown);
            return () => window.removeEventListener('keydown', handleWindowKeyDown);
        }
    }, [playerX, playerY]);

    useEffect(() => {
        timeoutFunc(currentCertificates,'+1 certificate', 500);
    },[currentCertificates]);

    useEffect(() => {
        timeoutFunc(currentSkills,'+1 skill', 500);
    },[currentSkills]);

    function timeoutFunc(item, messageText, time) {
        if (item > 0) {
            setMessage(messageText);
            const timeout = setTimeout(() => {
                setMessage('');
            }, time);

            return () => clearTimeout(timeout);
        }
    }

    function addItems(mapCoordinates) {
        if (mapCoordinates === 'certificate') {
            if (currentCertificates === certificatesAll - 1) {
                let map = gameMap.slice();
                console.log(`map`, map);
                generateItems(map, skillsAll, 'skill');
                console.log(`map`, map);
                startLevel2({map});
            }
            addCertificate(Math.round(difficulty * mapHeight / 100 * viewportHeight / 10));
        }
        if (mapCoordinates === 'skill') {
            if (currentSkills === skillsAll - 1) {
                let map = gameMap.slice();
                console.log(`map`, map);
                map.forEach((rowMap, rowIndex) => rowMap.forEach((square, squareIndex) => {
                    if (square === 'boss-wall') {
                        console.log(`square-change`, square);
                        map[rowIndex][squareIndex] = 'empty';
                    }
                }));
                console.log(`map`, map);
                removeBossWalls({map});
            }
            addSkill(Math.round(difficulty * 10 * mapHeight / 100 * viewportHeight / 10));
        }
        if (mapCoordinates === 'boss') {
            addPointsBoss(Math.round(difficulty * 30 * mapHeight / 100 * viewportHeight / 10));
            endGame();
        }
    }

    function _quitGame() {
        if (window.confirm('Are you sure you want to quit?')) {
            quitGame();
        }
    }

    function renderMap() {
        let visibleMap = [];
        for (let index = currentOffset; index < currentOffset + viewportHeight; index++) {
            let visibleRowsMap = gameMap[index];
            visibleMap.push(visibleRowsMap);
        }
        console.log(visibleMap);
        console.log(currentOffset);

        const windowHeight = document.documentElement.clientHeight;
        const squareSize = Math.floor((windowHeight * 51) / (100 * viewportHeight));
        console.log('squareSize',squareSize);

        return (
            visibleMap.map((rowMap, rowIndex) => {
                return (
                    <div className={
                        rowIndex + currentOffset === 0 ? "row-map first" : rowIndex + currentOffset === (mapHeight - 1) ? "row-map last" : "row-map"
                    } key={rowIndex + currentOffset}>
                        {
                            rowMap.map((square, squareIndex) => {
                                return (
                                    <div className={`square ${square}`} key={`${rowIndex + currentOffset}${squareIndex}`} style={{width: `${squareSize}px`, height: `${squareSize}px`}}></div>
                                )
                            })
                        }
                    </div>
                )
            })
        )
    }

    function renderGameOver() {
        return (
            <div className="game-over">
                <p>Congratulations!</p>
                <p>You left the dungeon!</p>
                <p className="result">Your result: {points} points.</p>
            </div>
        )
    }
    
    return (
        <div className="game">
            <div className="top-bar-head">
                <h2>Dungeon Crawl</h2>
                <button className="btn-quit" type="text" onClick={_quitGame}>Quit Game</button>
            </div>
            <div className="top-bar">
                <div className="top-bar-stats">
                    <div>Level: <span>{level}</span></div>
                    <div>
                        <p>Certificates: <span>{currentCertificates}/{certificatesAll}</span></p>
                        <progress value={currentCertificates} max={certificatesAll}></progress>
                    </div>
                    <div>
                        <p>Skills: <span>{currentSkills}/{skillsAll}</span></p>
                        <progress value={currentSkills} max={skillsAll}></progress>
                    </div>
                    <div>Points: <span>{points}</span></div>
                </div>
                <div className="messages">
                    <p>{message}</p>
                    { level === 1 && <p>Collect 25 certificates.</p> }
                    { level === 2 && currentSkills < skillsAll && <p>Collect 3 skills.</p> }
                    { level === 2 && currentSkills === skillsAll && !isDefeatedBoss && <p>Find the boss.</p> }
                </div>
            </div>
            <div className="map">
                { !isDefeatedBoss ? renderMap() : renderGameOver() }
            </div>
            <div className="bottom-bar">
                <div>
                    <p>Press 'Arrows' on the keyboard to move.</p>
                    <p>Press 'Esc' to quit the game or click the button at the top right.</p>
                </div>
            </div>
        </div>
    );
}

Game.propTypes = {
    certificatesAll: PropTypes.number.isRequired,
    skillsAll: PropTypes.number.isRequired,
    gameMap: PropTypes.arrayOf(PropTypes.array).isRequired,
    currentCertificates: PropTypes.number.isRequired,
    currentSkills: PropTypes.number.isRequired,
    isDefeatedBoss: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
    currentOffset: PropTypes.number.isRequired,
    playerX: PropTypes.number.isRequired,
    playerY: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    mapWidth: PropTypes.number.isRequired,
    mapHeight: PropTypes.number.isRequired,
    viewportHeight: PropTypes.number.isRequired,
    moveLeft: PropTypes.func.isRequired,
    moveUp: PropTypes.func.isRequired,
    moveRight: PropTypes.func.isRequired,
    moveDown: PropTypes.func.isRequired,
    changeOffset: PropTypes.func.isRequired,
    addCertificate: PropTypes.func.isRequired,
    startLevel2: PropTypes.func.isRequired,
    addSkill: PropTypes.func.isRequired,
    removeBossWalls: PropTypes.func.isRequired,
    addPointsBoss: PropTypes.func.isRequired,
    quitGame: PropTypes.func.isRequired,
    endGame: PropTypes.func.isRequired,
    generateItems: PropTypes.func.isRequired,
};

export default Game;