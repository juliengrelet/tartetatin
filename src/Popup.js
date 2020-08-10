export default class Popup {

    constructor(config = {}) {
        this.HTML = null;
        this.config = config;
    }

    init() {
        this._createHTML();
        this._insertHTMLInBody();
        this._bindEvents();
    }

    _createHTML() {
        const divContainer = document.createElement("div");
        const divContent = document.createElement('div');
        const title = document.createElement('h1'); 
        const btnCustomServices = document.createElement('button');
        divContainer.setAttribute('id', 'tartetatin');
        title.innerText = this.config.titlePopup;
        divContent.classList.add('tartetatin__content');
        btnCustomServices.classList.add('tartetatin__btn-custom-services');
        btnCustomServices.innerText = "Personnaliser";
        divContainer.appendChild(divContent);
        divContent.appendChild(title);
        const cookie = true;
        if (!cookie) {
            divContainer.classList.add('is-hidden');
        }
        if (this.config.btnCustomServices) {
            divContent.appendChild(btnCustomServices);
        }
        this.HTML = divContainer;
    }
    
    _closePopup() {

    }
        
    _bindEvents() {
        const btnCustomServices = document.querySelector('.tartetatin__btn-custom-services');
        const tartetatinContainer = document.querySelector('#tartetatin');

        btnCustomServices.addEventListener('click', function() {
            window.tartetatin.prototype.accept();
        });

        tartetatinContainer.addEventListener('click', () => {
            if (!tartetatinContainer.classList.contains('is-hidden')) {
                tartetatinContainer.classList.add('is-hidden');
            }
        });
    }

    _insertHTMLInBody() {
        document.body.appendChild(this.HTML);
    }

}