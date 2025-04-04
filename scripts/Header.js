class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = document.querySelector(this.selectors.overlay)
        this.burgerButtonElement = document.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    onCloseButtonClick = () => {
        this.overlayElement.classList.remove(this.stateClasses.isActive);
        this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
        document.documentElement.classList.remove(this.stateClasses.isLock);

    }
    
    onKeydownPress = (e) => {
        if (e.key === 'Escape') {
            this.onCloseButtonClick();
        }
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)

        document.addEventListener(
            'keydown', this.onKeydownPress
        );
    }
}

export default Header