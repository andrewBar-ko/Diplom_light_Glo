'use strict';

const sendForm = () => {
    const errorMessage = "Что-то пошло нет...",
	    loadMessage = "Загрузка...",
		bodyHtml = document.querySelector('body'),
		successMessage = "Спасибо!Мы с вами свяжемся! ";
		
		const loader = () => `
			<style>
			.preloader__container {
				position: fixed;
				background-color: rgba(0, 0, 0, .8);
				height: 100%;
				width: 100%;
				z-index: 10;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-content: space-around;
				top: 0;
			}
			.sk-rotating-plane {
				width: 4em;
				height: 4em;
				margin: auto;
				background-color: #f28c07;
				animation: sk-rotating-plane 1.2s infinite ease-in-out;
			}
			@keyframes sk-rotating-plane {
				0% {
					transform: perspective(120px) rotateX(0deg) rotateY(0deg);
				}
				50% {
					transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
				}
				100% {
					transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
				}
			}		 
			</style>
			<section></section>
			<div class="preloader">
				<div class="preloader__container">
					<div class='sk-rotating-plane'></div>
				</div>
			</div>
		`;
	

	const statusMessage = document.createElement("div");
	statusMessage.classList.add('status-message');
	statusMessage.style.cssText = "font-size: 2rem; color: #000";
	
	const removeStatusMessage = () => {
		const status = document.querySelector('.status-message');
		if (!status) {return;}
		setTimeout(() => {
			status.remove();
		}, 3000);
	};

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'

    });

    document.addEventListener('submit', e => {
        
        e.preventDefault();
        const target = e.target;

        target.appendChild(statusMessage);
	    statusMessage.textContent = loadMessage;
	
		bodyHtml.insertAdjacentHTML('beforeend', loader());
		const loaderHtml = document.querySelector('.preloader');

        const formData = new FormData(target);
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        const clearInputsForms = target => {
            const targetFormInputs = target.querySelectorAll('input');
            targetFormInputs.forEach(item => {
                item.value = '';
            });
        };

        // eslint-disable-next-line no-use-before-define
        postData(body)

            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200!');
                }
                statusMessage.textContent = successMessage;
                // eslint-disable-next-line no-use-before-define
				clearInputsForms(target);
				removeStatusMessage();
                const remStatus = () => statusMessage.loaderHtml = '';
                setTimeout(() => {
					remStatus();
					loaderHtml.remove();
				}, 2500);
				
				
            })
            .catch(error => {
				removeStatusMessage();
				clearInputsForms(target);
                statusMessage.textContent = errorMessage;
				console.error(error);
				setTimeout(() => {
					loaderHtml.remove();
				}, 500);
            });

    });

    // Validator
    const isValidate = () => {

        document.addEventListener('input', event => {
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

            if (target.matches('[name="user_message"]')) {
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

    document.body.addEventListener('input', isValidate);

};

export default sendForm;