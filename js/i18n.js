// i18n.js - Internationalization system

class I18n {
    constructor() {
        this.currentLang = 'pl';
        this.translations = {};
        this.init();
    }

    async init() {
        // Get language from URL parameter, localStorage, or default to Polish
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        const storedLang = localStorage.getItem('language');

        this.currentLang = urlLang || storedLang || 'pl';

        // Load translations
        await this.loadTranslations(this.currentLang);

        // Apply translations
        this.applyTranslations();

        // Update language selector
        this.updateLanguageSelector();
    }

    async loadTranslations(lang) {
        try {
            const response = await fetch(`i18n/${lang}.json`);
            this.translations = await response.json();
        } catch (error) {
            console.error(`Failed to load translations for ${lang}:`, error);
            // Fallback to Polish if loading fails
            if (lang !== 'pl') {
                await this.loadTranslations('pl');
            }
        }
    }

    applyTranslations() {
        // Find all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (translation) {
                element.textContent = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = this.translations;

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return null;
            }
        }

        return value;
    }

    async changeLanguage(lang) {
        if (lang === this.currentLang) return;

        this.currentLang = lang;
        localStorage.setItem('language', lang);

        await this.loadTranslations(lang);
        this.applyTranslations();
        this.updateLanguageSelector();

        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url);
    }

    updateLanguageSelector() {
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = this.currentLang;
        }
    }
}

// Initialize i18n when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.i18n = new I18n();
    });
} else {
    window.i18n = new I18n();
}
