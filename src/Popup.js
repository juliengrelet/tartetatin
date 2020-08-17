export default class Popup {

    constructor(config, tartetatin, language) {
        this.HTML = null;
        this.config = config;
        this.tarteTatin = tartetatin;
        this.language = language;
        this._createHTML();
        this._insertHTMLInBody();
        this.DOM = {
            tartetatinContainer: document.getElementById('tartetatin'),
            tartetatinContent: document.querySelector('.tartetatin__content'),
            btnCustomServices: document.querySelector('.tartetatin__btn-custom-services')
        };
        this._bindEvents();
    }

    _createHTML() {
        const divContainer = document.createElement("div");
        const divContent = document.createElement('div');
        const title = document.createElement('h1'); 
        const btnCustomServices = document.createElement('button');
        const cookie = true;
        divContainer.setAttribute('id', 'tartetatin');
        title.innerText = this.language.titlePopup;
        divContent.classList.add('tartetatin__content');
        btnCustomServices.classList.add('tartetatin__btn-custom-services');
        btnCustomServices.innerText = "Personnaliser";
        divContainer.appendChild(divContent);
        divContent.appendChild(title);
        if (!cookie) {
            divContainer.classList.add('is-hidden');
        }
        if (this.config.btnCustomServices) {
            divContent.appendChild(btnCustomServices);
        }
        this.HTML = divContainer;
    }
    
    closePopup() {
        if (!this.DOM.tartetatinContainer.classList.contains('is-hidden')) {
            this.DOM.tartetatinContainer.classList.add('is-hidden');
        }
    }
        
    _bindEvents() {
        this.DOM.btnCustomServices.addEventListener('click', () => {
            this.tarteTatin.accept();
            this.closePopup();
        });

        this.DOM.tartetatinContent.addEventListener('click', e => e.stopPropagation());
        
        this.DOM.tartetatinContainer.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closePopup();
        });

        this.DOM.tartetatinContainer.addEventListener('click', () => {
            this.closePopup();
        });
    }

    _insertHTMLInBody() {
        document.body.appendChild(this.HTML);
    }

}