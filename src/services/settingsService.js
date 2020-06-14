const DUNGEON_CRAWL_SETTINGS_KEY = 'DUNGEON_CRAWL_SETTINGS_KEY';

class SettingsService {
    get() {
        const localSettingsRaw = window.localStorage.getItem(DUNGEON_CRAWL_SETTINGS_KEY);

        return JSON.parse(localSettingsRaw);
    }

    save(settings) {
        window.localStorage.setItem(DUNGEON_CRAWL_SETTINGS_KEY, JSON.stringify(settings));

        return settings;
    }
}

export default new SettingsService();