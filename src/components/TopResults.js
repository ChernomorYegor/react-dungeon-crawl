import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function TopResults({topResults, getResults, backToStartMenu}) {

    useEffect(() => {
        getResults();
    }, []);

    function renderTopResults() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topResults.map((result, index) => {
                            return (
                                <tr key={result.id}>
                                    <td className="position">{index + 1}.</td>
                                    <td className="player-name">{result.name}</td>
                                    <td className="points">{result.points}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }

    return (
        <div className="top-results">
            <div className="top-bar-head">
                <h3>Top Results</h3>
                <button className="btn-back" type="text" onClick={backToStartMenu}>Back</button>
            </div>
            <div className="top-results-body">
                {topResults.length ? renderTopResults() : <p className="no-results">There are no results yet.</p>}
            </div>
        </div>
    );
}

TopResults.propTypes = {
    topResults: PropTypes.arrayOf(PropTypes.object).isRequired,
    getResults: PropTypes.func.isRequired,
    backToStartMenu: PropTypes.func.isRequired,
};

export default TopResults;