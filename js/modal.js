

export const Modal = {
    wrapper: document.querySelector('.modal'),
    buttonClose: document.querySelector('.modal button.close'),
    message: document.querySelector('.modal .title'),


    open() {
        Modal.wrapper.classList.add('open')

    },
    close() {
        Modal.wrapper.classList.remove('open')

    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
    }

window.addEventListener('keydown', handkeydown)
function handkeydown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}

    