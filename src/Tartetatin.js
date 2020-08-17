import './styles/tartetatin.scss';
import Popup from './Popup';
import Languages from './lang/index';
import CookiesManager from './CookiesManager';

export default class TarteTatin {

    constructor(config = {}) {
        // set the config
        this.config = {
            language: 'fr',
            btnCustomServices: true,
            templateDefault: true,
            ...config
        };
        // check if the key "templateDefault" is true 
        if (this.config.templateDefault) {
            this._useDefaultTemplate(this.config, this, this._setLanguage());
        }

        this.cookies = new CookiesManager();
        this.cookies.set('test');

        console.log('this.config : ', this.config);
    }

    _useDefaultTemplate(config, instance, language) {
        this.popup = new Popup(config, instance, language);
    }

    _setLanguage() {
        let currentLanguage = Languages.fr;
        for (const language in Languages) {
            if (language === this.config.language) {
                currentLanguage = Languages[language];
            }
        }
        return currentLanguage;
    }

    accept() {
        console.log('jaccepte');
    }

    services() {
        console.log('je suis le service');
    }

}