// eslint-disable-next-line strict
'use strict';

const togglePopUp = () => {
    
    const showElem = e => {
        e.style.display = 'block';
        e.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
    };
    const hideElem = e => {
        if (!e){
            return;
        }
        e.style.display = 'none';
    };
    //Открытие разных POPUP
    document.body.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.call-btn')){ //При клике на эту надписи в header и footer 
            showElem(document.querySelector('.popup-call'));
        }
        if (target.closest('.discount-btn')){ //после нажатия на кнопку “Получить расчет и скидку” 
            showElem(document.querySelector('.popup-discount'));
        }
        if (target.closest('.check-btn')){ //При нажатии на кнопку “Получить чек-лист и скидку”
            showElem(document.querySelector('.popup-check'));
        }
        if (target.closest('.consultation-btn')){ //открывается модальное окно с классом popup-consultation
            showElem(document.querySelector('.popup-consultation'));
        }
    });
    //Закрытие POPUP
    document.body.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.closest('.popup-close') || //нажатие на крестик
            !e.target.closest('.popup-content') && !e.target.closest('.contacts')){
            //нажатие на любой элемент страницы, кроме модального окна и кнопки вызова popup
            hideElem(e.target.closest('.popup'));
        }
    });

};

export default togglePopUp;
