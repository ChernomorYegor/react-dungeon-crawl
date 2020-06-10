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
    }
) {
    const [difficultyInner, setDifficultyInner] = useState(difficulty);
    const [mapHeightInner, setMapHeightInner] = useState(mapHeight);
    const [viewportHeightInner, setViewportHeightInner] = useState(viewportHeight);

    const DIFFICULTY = 'Difficulty';
    const MAP_HEIGHT = 'Map Height';
    const VIEWPORT_HEIGHT = 'Viewport Height';

    function _change(name, e) {
        switch(name) {
            case DIFFICULTY: setDifficultyInner(+e.target.value); break;
            case MAP_HEIGHT: setMapHeightInner(+e.target.value); break;
            case VIEWPORT_HEIGHT: setViewportHeightInner(+e.target.value); break;
            default: break;
        }
    }

    function _saveSettings(e) {
        e.preventDefault();
        console.log({difficultyInner, mapHeightInner, viewportHeightInner});
        saveSettings({difficultyInner, mapHeightInner, viewportHeightInner});
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
                {/*<div>*/}
                {/*    <label htmlFor="map-width">Map Width:</label>*/}
                {/*    <input id="map-width" type="number" value={mapWidth} min="10" max="250" step="5" onChange={_change.bind(this, 'Map Width')} />*/}
                {/*</div>*/}
                <div>
                    <label htmlFor="map-height">Map Height <small>(50 - 500)</small>:</label>
                    <input id="map-height" type="number" value={mapHeightInner} min="50" max="500" step="5" onChange={_change.bind(this, MAP_HEIGHT)} />
                </div>
                {/*<div>*/}
                {/*    <label htmlFor="viewport-width">Viewport Width:</label>*/}
                {/*    <input id="viewport-width" type="number" value={viewportWidth} min="10" max="20" step="1" onChange={_change.bind(this, 'Viewport Width')} />*/}
                {/*</div>*/}
                <div>
                    <label htmlFor="viewport-height">Viewport Height <small>(10 - 20)</small>:</label>
                    <input id="viewport-height" type="number" value={viewportHeightInner} min="10" max="20" step="1" onChange={_change.bind(this, VIEWPORT_HEIGHT)} />
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
};

export default Settings;