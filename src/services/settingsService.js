const DUNGEON_CRAWL_SETTINGS_KEY = 'DUNGEON_CRAWL_SETTINGS_KEY';

class SettingsService {
    get() {
        const settingsRaw = window.localStorage.getItem(DUNGEON_CRAWL_SETTINGS_KEY);

        let localSettings = {};

        if (settingsRaw) {
            localSettings = JSON.parse(settingsRaw);
        }

        return localSettings;
    }

    save(settings) {
        window.localStorage.setItem(DUNGEON_CRAWL_SETTINGS_KEY, JSON.stringify(settings));

        return settings;
    }
}

export default new SettingsService();