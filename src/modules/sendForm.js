'use strict';

import sendData from './sendData';

const sendForm = () =>{
    const errorMessage = 'Что то пошло не так',
        successMessage = 'Ваша заявка получена',
        statusMessage = document.createElement('div'),
        imgLoader = document.createElement('img'),
        url = './server_json.php';
    let body = {};        
    let finishSend = {};       

    statusMessage.style.cssText = 'font-size: 2rem;';

     // очищаем поля
     const resetValue = target =>{
         setTimeout(()=>{
            target.querySelector('.phone-user') ?
            target.querySelector('.phone-user').value = '' : null;

            target.querySelector('.user-name') ?
            target.querySelector('.user-name').value = '' : null;

            target.querySelector('.question-boss') ?
            target.querySelector('.question-boss').value = '' : null;

            statusMessage.textContent = '';
            finishSend = {};
         },5000);

    };
    // отображаем loader
    const showLoader =  () => {
        imgLoader.style.display = 'inline-block';
        imgLoader.src = "./img/1.gif";
    };

    document.addEventListener('submit',(event) => {
        event.preventDefault();
        const target = event.target; 

        if( target.querySelector('.phone-user') &&
        target.querySelector('.phone-user').matches('.error') ) {return;}

        if( target.querySelector('.user-name') &&
        target.querySelector('.user-name').matches('.error') ) {return;}

        if (target.querySelector('.question-boss') &&
        target.querySelector('.question-boss').matches('.error')) {return;}
       
       
        target.appendChild(statusMessage);
        statusMessage.textContent ='';
        statusMessage.appendChild(imgLoader).style.display = 'none';
        const formData = new FormData(target);
                formData.forEach((val, key) => {
                    body[key] = val;
                    sendData[key] = val;
                });
        if (target.parentNode.parentNode.parentNode.matches('.popup-discount')) {
            finishSend = sendData;
        } else if (target.parentNode.parentNode.parentNode.matches('.popup-consultation')) {
            body.message = sendData.questionDirector;
            finishSend = body;
        } else {
            finishSend = body;
        }

        showLoader();
        const postData = (body) => {
            return fetch(url,{
                method: 'POST',
                headers: {'Content-Type': 'aplication/json'},
                body : JSON.stringify(body)
            });
        };

        // postData(body)              
        postData(finishSend)              
            .then( response => {
                if (response.ok) {
                    imgLoader.style.display = 'none';
                    statusMessage.textContent = successMessage;
                } else {
                    throw new Error(response.textContent);
                }
            }).then( 
                resetValue(target)            
            )
            .catch( error => statusMessage.textContent = errorMessage);
    });
};

export default sendForm;