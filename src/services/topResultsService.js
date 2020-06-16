import gameOptions from "../gameOptions/gameOptions";

const NUMBER_OF_RESULTS = gameOptions.NUMBER_OF_RESULTS;

const DUNGEON_CRAWL_TOP_RESULTS_KEY = 'DUNGEON_CRAWL_TOP_RESULTS_KEY';

class topResultsService {
    get() {
        const topResultsRaw = window.localStorage.getItem(DUNGEON_CRAWL_TOP_RESULTS_KEY);

        return JSON.parse(topResultsRaw);
    }

    save(topResults, name, points) {
        if (!topResults) {
            topResults.push({
                id: Date.now(),
                name,
                points,
            })
        } else {
            let index = 0;
            topResults.forEach((result) => points < result.points && index++);
            if (index < NUMBER_OF_RESULTS) {
                topResults.splice(index,0, {id: Date.now(), name, points});
            }
            if (topResults.length > NUMBER_OF_RESULTS) {
                topResults.pop();
            }
        }
        console.log(topResults);
        window.localStorage.setItem(DUNGEON_CRAWL_TOP_RESULTS_KEY, JSON.stringify(topResults));

        return topResults;
    }
}

export default new topResultsService();