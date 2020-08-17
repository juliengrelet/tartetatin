import TarteTatin from './Tartetatin';

const lang = {
    titlePopup: 'Caca Boudin'
};

const tarteTatin = new TarteTatin({
    language: 'en',
    btnCustomServices: true,
    templateDefault: true,
    customContent: lang
});

tarteTatin.services();