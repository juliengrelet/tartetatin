import './styles/tartetatin.scss';
import Popup from './Popup';

export default class TarteTatin {

    constructor(config = {}) {
        this.config = {
            titlePopup: 'Ce site utilise des cookies et vous donne le contrôle sur ce que vous souhaitez activer',
            btnCustomServices: true,
            ...config
        };
        this.popup = new Popup(this.config);
    }

    init() {
        this.popup.init();
    }

    accept() {
        console.log('jaccepte');
    }

    services() {
        console.log('je suis le service');
    }

}

window.tartetatin = TarteTatin;
