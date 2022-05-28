const popupAddFile = document.querySelector('.popup_addFile');
const closeAddFileBtn = popupAddFile.querySelector('.popup__closed');
const openAddFileBtn = document.getElementById('materials__button1');

console.log(openAddFileBtn);


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    document.addEventListener('click', closePopupOverlay);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closePopupEsc);
    document.removeEventListener('click', closePopupOverlay);
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'))
    }
}

function closePopupOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target);
    }
}

openAddFileBtn.addEventListener('click', () => openPopup(popupAddFile));
closeAddFileBtn.addEventListener('click', () => closePopup(popupAddFile));
