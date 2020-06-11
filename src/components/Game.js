import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

function Game(
    {
        CERTIFICATES,
        SKILLS,

        gameMap,
        currentCertificates,
        currentSkills,
        isDefeatedBoss,
        level,
        points,
        currentOffsetX,
        currentOffsetY,
        playerX,
        playerY,

        difficulty,
        mapWidth,
        mapHeight,
        viewportWidth,
        viewportHeight,

        moveLeft,
        moveUp,
        moveRight,
        moveDown,
        changeOffsetX,
        changeOffsetY,
        addCertificate,
        startLevel2,
        addSkill,
        removeBossWalls,
        addPointsBoss,
        quitGame,
        endGame,

        windowWidth,
        windowHeight,
        generateItems,
    }
) {
    const [message, setMessage] = useState('');
    const [squareSize, setSquareSize] = useState(0);

    const EMPTY = 'empty';
    const WALL = 'wall';
    const BOSS_WALL = 'boss-wall';
    const BOSS = 'boss';
    const SKILL = 'skill';
    const CERTIFICATE = 'certificate';

    const BEFORE_BORDER = 3;

    const ARROW_LEFT = 'ArrowLeft';
    const ARROW_UP = 'ArrowUp';
    const ARROW_RIGHT = 'ArrowRight';
    const ARROW_DOWN = 'ArrowDown';
    const ESCAPE = 'Escape';

    useEffect(() => {
        const squareWidth = Math.floor((windowWidth * 91) / (100 * viewportWidth));
        const squareHeight = Math.floor((windowHeight * 51) / (100 * viewportHeight));
        squareWidth < squareHeight ? setSquareSize(squareWidth) :  setSquareSize(squareHeight);
    },[]);

    useEffect(() => {
        if (!isDefeatedBoss) {
            function handleWindowKeyDown(e) {
                switch (e.key) {
                    case ARROW_LEFT:
                        console.log(ARROW_LEFT);
                        if (playerX === 0 && gameMap[playerY][mapWidth - 1] !== WALL && gameMap[playerY][mapWidth - 1] !== BOSS_WALL) {
                            changeOffsetX((mapWidth - 1) - (viewportWidth - 1) );
                            addItems(gameMap[playerY][mapWidth - 1]);
                            moveLeft(mapWidth - 1);
                            break;
                        }
                        if (playerX !== 0 && gameMap[playerY][playerX - 1] !== WALL && gameMap[playerY][playerX - 1] !== BOSS_WALL) {
                            if ((playerX <= BEFORE_BORDER + currentOffsetX) && !(playerX <= BEFORE_BORDER)) {
                                changeOffsetX(currentOffsetX - 1);
                            }
                            addItems(gameMap[playerY][playerX - 1]);
                            moveLeft(playerX - 1);
                            break;
                        }
                        break;
                    case ARROW_UP:
                        console.log(ARROW_UP);
                        if (playerY === 0) {
                            break;
                        }
                        if (gameMap[playerY - 1][playerX] !== WALL && gameMap[playerY - 1][playerX] !== BOSS_WALL) {
                            if ((playerY <= BEFORE_BORDER + currentOffsetY) && !(playerY <= BEFORE_BORDER)) {
                                changeOffsetY(currentOffsetY - 1);
                            }
                            addItems(gameMap[playerY - 1][playerX]);
                            moveUp(playerY - 1);
                            break;
                        }
                        break;
                    case ARROW_RIGHT:
                        console.log(ARROW_RIGHT);
                        if (playerX === mapWidth - 1 && gameMap[playerY][0] !== WALL && gameMap[playerY][0] !== BOSS_WALL) {
                            changeOffsetX(0);
                            addItems(gameMap[playerY][0]);
                            moveLeft(0);
                            break;
                        }
                        if (playerX !== mapWidth - 1 && gameMap[playerY][playerX + 1] !== WALL && gameMap[playerY][playerX + 1] !== BOSS_WALL) {
                            if ((playerX >= (viewportWidth - 1) - BEFORE_BORDER + currentOffsetX) && !(playerX >= (mapWidth - 1) - BEFORE_BORDER)) {
                                changeOffsetX(currentOffsetX + 1);
                            }
                            addItems(gameMap[playerY][playerX + 1]);
                            moveRight(playerX + 1);
                            break;
                        }
                        break;
                    case ARROW_DOWN:
                        console.log(ARROW_DOWN);
                        if (playerY === gameMap.length - 1) {
                            break;
                        }
                        if (gameMap[playerY + 1][playerX] !== WALL && gameMap[playerY + 1][playerX] !== BOSS_WALL) {
                            if ((playerY >= (viewportHeight - 1) - BEFORE_BORDER + currentOffsetY) && !(playerY >= (mapHeight - 1) - BEFORE_BORDER)) {
                                changeOffsetY(currentOffsetY + 1);
                            }
                            addItems(gameMap[playerY + 1][playerX]);
                            moveDown(playerY + 1);
                            break;
                        }
                        break;
                    case ESCAPE:
                        console.log('Quit Game');
                        _quitGame()
                        break;
                    default: break;
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
        if (mapCoordinates === CERTIFICATE) {
            if (currentCertificates === CERTIFICATES - 1) {
                let map = gameMap.slice();
                console.log(`map`, map);
                generateItems(map, SKILLS, SKILL);
                console.log(`map`, map);
                startLevel2({map});
            }
            addCertificate(Math.round(calculatePoints(10)));
        }
        if (mapCoordinates === SKILL) {
            if (currentSkills === SKILLS - 1) {
                let map = gameMap.slice();
                console.log(`map`, map);
                map.forEach((rowMap, rowIndex) => rowMap.forEach((square, squareIndex) => {
                    if (square === BOSS_WALL) {
                        console.log(`square-change`, square);
                        map[rowIndex][squareIndex] = EMPTY;
                    }
                }));
                console.log(`map`, map);
                removeBossWalls({map});
            }
            addSkill(Math.round(calculatePoints(100)));
        }
        if (mapCoordinates === BOSS) {
            addPointsBoss(Math.round(calculatePoints(300)));
            endGame();
        }
    }

    function calculatePoints(factor) {
        return (factor * difficulty * (mapWidth / 100) * (mapHeight / 100) * (10 / viewportWidth) * (10 / viewportHeight))
    }

    function _quitGame() {
        if (window.confirm('Are you sure you want to quit?')) {
            quitGame();
        }
    }
    
    function renderMap() {
        let visibleMap = [];
        for (let y = currentOffsetY; y < currentOffsetY + viewportHeight; y++) {
            let visibleRowsMap = gameMap[y].slice(currentOffsetX, currentOffsetX + viewportWidth);
            visibleMap.push(visibleRowsMap);
        }
        console.log('visibleMap', visibleMap);
        console.log('currentOffsetY', currentOffsetY);
        console.log('currentOffsetX', currentOffsetX);

        return (
            visibleMap.map((rowMap, rowIndex) => {
                return (
                    <div className={
                        rowIndex + currentOffsetY === 0 ? "row-map first" : rowIndex + currentOffsetY === (mapHeight - 1) ? "row-map last" : "row-map"
                    } key={rowIndex + currentOffsetY}>
                        {
                            rowMap.map((square, squareIndex) => {
                                return (
                                    <div className={`square ${square}`} key={`${rowIndex + currentOffsetY}${squareIndex + currentOffsetX}`} style={{width: `${squareSize}px`, height: `${squareSize}px`}}></div>
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
                        <p>Certificates: <span>{currentCertificates}/{CERTIFICATES}</span></p>
                        <progress value={currentCertificates} max={CERTIFICATES}></progress>
                    </div>
                    <div>
                        <p>Skills: <span>{currentSkills}/{SKILLS}</span></p>
                        <progress value={currentSkills} max={SKILLS}></progress>
                    </div>
                    <div>Points: <span>{points}</span></div>
                </div>
                <div className="messages">
                    <p>{message}</p>
                    { level === 1 && <p>Collect 25 certificates.</p> }
                    { level === 2 && currentSkills < SKILLS && <p>Collect 3 skills.</p> }
                    { level === 2 && currentSkills === SKILLS && !isDefeatedBoss && <p>Find the boss.</p> }
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
    CERTIFICATES: PropTypes.number.isRequired,
    SKILLS: PropTypes.number.isRequired,
    gameMap: PropTypes.arrayOf(PropTypes.array).isRequired,
    currentCertificates: PropTypes.number.isRequired,
    currentSkills: PropTypes.number.isRequired,
    isDefeatedBoss: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
    currentOffsetX: PropTypes.number.isRequired,
    currentOffsetY: PropTypes.number.isRequired,
    playerX: PropTypes.number.isRequired,
    playerY: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    mapWidth: PropTypes.number.isRequired,
    mapHeight: PropTypes.number.isRequired,
    viewportWidth: PropTypes.number.isRequired,
    viewportHeight: PropTypes.number.isRequired,
    moveLeft: PropTypes.func.isRequired,
    moveUp: PropTypes.func.isRequired,
    moveRight: PropTypes.func.isRequired,
    moveDown: PropTypes.func.isRequired,
    changeOffsetX: PropTypes.func.isRequired,
    changeOffsetY: PropTypes.func.isRequired,
    addCertificate: PropTypes.func.isRequired,
    startLevel2: PropTypes.func.isRequired,
    addSkill: PropTypes.func.isRequired,
    removeBossWalls: PropTypes.func.isRequired,
    addPointsBoss: PropTypes.func.isRequired,
    quitGame: PropTypes.func.isRequired,
    endGame: PropTypes.func.isRequired,
    windowWidth: PropTypes.number.isRequired,
    windowHeight: PropTypes.number.isRequired,
    generateItems: PropTypes.func.isRequired,
};

export default Game;