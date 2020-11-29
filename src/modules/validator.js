'use strict';

// Validator
const isValidate = () => {

    document.body.addEventListener('input', event => {
        const target = event.target;
        if (target.matches('[name="user_name"]')) {
            target.value = target.value.replace(/[^а-яА-ЯёЁ\s]/, '');
        }

        if (target.matches('[name="user_email"]')) {
            if (/^[\w-\\.]+@[\w-]+\.[a-z]{2,4}$/i.test(target.value)) {
                target.setCustomValidity('');
            } else {
                target.setCustomValidity('Введите значение в формате myemail@mail.ru');
            }
        }

        if (target.matches('[name="user_quest"]')) {
            target.value = target.value.replace(/[^а-яА-ЯёЁ,.!?\s]/, '');
        }

        if (target.matches('[name="user_phone"]')) {
            target.value = target.value.replace(/[^\\+?[0-9]/i, '');
            if (/^\+?[78][0-9]{10}$/.test(target.value) ||
            /^\+?[378][0-9]{11}$/.test(target.value)) {
                target.setCustomValidity('');
            } else {
                target.setCustomValidity('Введите значение в формате +79273335544 или 89273335544');
            }
        }
    });
};
isValidate();

export default isValidate;