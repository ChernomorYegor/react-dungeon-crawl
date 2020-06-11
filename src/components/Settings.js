import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Settings(
    {
        difficultyOptions,

        difficulty,
        mapWidth,
        mapHeight,
        viewportWidth,
        viewportHeight,

        backToStartMenu,
        saveSettings,

        viewportWidthMax,
        viewportHeightMax,
    }
) {
    const [difficultyInner, setDifficultyInner] = useState(difficulty);
    const [mapWidthInner, setMapWidthInner] = useState(mapWidth);
    const [mapHeightInner, setMapHeightInner] = useState(mapHeight);
    const [viewportWidthInner, setViewportWidthInner] = useState(viewportWidth);
    const [viewportHeightInner, setViewportHeightInner] = useState(viewportHeight);

    const DIFFICULTY = 'Difficulty';
    const MAP_WIDTH = 'Map Width';
    const MAP_HEIGHT = 'Map Height';
    const VIEWPORT_WIDTH = 'Viewport Width';
    const VIEWPORT_HEIGHT = 'Viewport Height';

    function _change(name, e) {
        switch(name) {
            case DIFFICULTY: setDifficultyInner(+e.target.value); break;
            case MAP_WIDTH: setMapWidthInner(+e.target.value); break;
            case MAP_HEIGHT: setMapHeightInner(+e.target.value); break;
            case VIEWPORT_WIDTH: setViewportWidthInner(+e.target.value); break;
            case VIEWPORT_HEIGHT: setViewportHeightInner(+e.target.value); break;
            default: break;
        }
    }

    function _saveSettings(e) {
        e.preventDefault();
        console.log({difficultyInner, mapWidthInner, mapHeightInner, viewportWidthInner, viewportHeightInner});
        saveSettings({difficultyInner, mapWidthInner, mapHeightInner, viewportWidthInner, viewportHeightInner});
    }

    return (
        <div className="settings">
            <div className="top-bar-head">
                <h3>Settings</h3>
                <button className="btn-back" type="text" onClick={backToStartMenu}>Back</button>
            </div>
            <form className="settings-form" onSubmit={_saveSettings}>
                <div>
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select id="difficulty" value={difficultyInner} onChange={_change.bind(this, DIFFICULTY)}>
                        <option value={difficultyOptions.easy}>Easy</option>
                        <option value={difficultyOptions.medium}>Medium</option>
                        <option value={difficultyOptions.hard}>Hard</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="map-width">Map Width <small>(20 - 200)</small>:</label>
                    <input
                        id="map-width"
                        type="number"
                        value={mapWidthInner}
                        min="20"
                        max="200"
                        step="5"
                        onChange={_change.bind(this, MAP_WIDTH)}
                    />
                </div>
                <div>
                    <label htmlFor="map-height">Map Height <small>(50 - 500)</small>:</label>
                    <input
                        id="map-height"
                        type="number"
                        value={mapHeightInner}
                        min="50"
                        max="500"
                        step="5"
                        onChange={_change.bind(this, MAP_HEIGHT)}
                    />
                </div>
                <div>
                    <label htmlFor="viewport-width">Viewport Width <small>(10 - {mapWidth <= viewportWidth ? mapWidth : viewportWidthMax})</small>:</label>
                    <input
                        id="viewport-width"
                        type="number"
                        value={viewportWidthInner}
                        min="10"
                        max={mapWidth <= viewportWidth ? mapWidth : viewportWidthMax}
                        step="1"
                        onChange={_change.bind(this, VIEWPORT_WIDTH)}
                    />
                </div>
                <div>
                    <label htmlFor="viewport-height">Viewport Height <small>(10 - {viewportHeightMax})</small>:</label>
                    <input
                        id="viewport-height"
                        type="number"
                        value={viewportHeightInner}
                        min="10"
                        max={viewportHeightMax}
                        step="1"
                        onChange={_change.bind(this, VIEWPORT_HEIGHT)}
                    />
                </div>
                <button type="submit" className="btn-save">Save</button>
            </form>
        </div>
    );
}

Settings.propTypes = {
    difficultyOptions: PropTypes.object.isRequired,
    difficulty: PropTypes.number.isRequired,
    mapWidth: PropTypes.number.isRequired,
    mapHeight: PropTypes.number.isRequired,
    viewportWidth: PropTypes.number.isRequired,
    viewportHeight: PropTypes.number.isRequired,
    backToStartMenu: PropTypes.func.isRequired,
    saveSettings: PropTypes.func.isRequired,
    viewportWidthMax: PropTypes.number.isRequired,
    viewportHeightMax: PropTypes.number.isRequired,
};

export default Settings;