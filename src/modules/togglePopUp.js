// eslint-disable-next-line strict
'use strict';

const togglePopUp = () => {
    const popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content'),
        popup = document.querySelector('.popup'),
        contacts = document.querySelector('.contacts'),
        callBtn = document.querySelector('.call-btn'),
        discountBtn = document.querySelector('.discount-btn'),
        checkBtn = document.querySelector('.check-btn'),
        consultationBtn = document.querySelector('.consultation-btn'),
        popupCall = document.querySelector('.popup-call'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        popupConsultation = document.querySelector('.popup-consultation');

    try {

        const showElem = e => {
            e.style.display = 'block';
            e.querySelectorAll('input').forEach(input => {
                input.value = '';
            });
        };
        const hideElem = e => {
            if (!e) {
                return;
            }
            e.style.display = 'none';
        };
        // Открытие разных Popup
        document.body.addEventListener('click', e => {
            const target = e.target;
            if (target.closest(callBtn)) { 
                showElem(popupCall);
            }
            if (target.closest(discountBtn)) { 
                showElem(popupDiscount);
            }
            if (target.closest(checkBtn)) {
                showElem(popupCheck);
            }
            if (target.closest(consultationBtn)) { 
                showElem(popupConsultation);
            }
        });

        // Закрытие Popup
        document.body.addEventListener('click', ev => {
            ev.preventDefault();
            if (ev.target.closest(popupClose) ||
                !ev.target.closest(popupContent) &&
                !ev.target.closest(contacts)) {
                //нажатие на любой элемент страницы, кроме модального окна и кнопки вызова popup
                hideElem(ev.target.closest(popup));
            }
        });
    } catch (e) {
        console.warn(e);
    } 
};

export default togglePopUp;
