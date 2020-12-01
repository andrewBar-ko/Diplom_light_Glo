// eslint-disable-next-line strict
'use strict';

const togglePopUp = () => {

    const popupCall = document.querySelector('.popup-call'),
		popupDiscount = document.querySelector('.popup-discount'),
		popupCheck = document.querySelector('.popup-check'),
		popupDirector = document.querySelector('.popup-consultation'),
		popupContent = document.querySelector('.popup-content');

	document.body.addEventListener('click', e => {
		const target = e.target;

        if (target.classList.contains('call-btn') &&
        !target.classList.contains('construct-btn')) {
			popupCall.style.display = 'block';
			popupContent.style.opacity = 0;
                let op = 0;
                const setOpacity = () => {
                    let opacity;
                        if( op < 1 ) {
                            opacity = requestAnimationFrame(setOpacity);
                            op +=0.04;
                            popupContent.style.opacity = op;
                        } else{
                            cancelAnimationFrame(opacity);
                        }
                };
                setOpacity();
		} else if (target.closest('.popup-close') || target.classList.contains('popup-call')) {
            popupCall.style.display = 'none';
            document.querySelector('.popup input').valuу = '';
		}

		if (target.classList.contains('discount-btn')) {
			popupDiscount.style.display = 'block';
			popupContent.style.opacity = 0;
                let op = 0;
                const setOpacity = () => {
                    let opacity;
                        if( op < 1 ) {
                            opacity = requestAnimationFrame(setOpacity);
                            op +=0.04;
                            popupContent.style.opacity = op;
                        } else{
                            cancelAnimationFrame(opacity);
                        }
                };
                setOpacity();
		} else if (target.closest('.popup-close') || target.classList.contains('popup-discount')) {
			popupDiscount.style.display = 'none';
		}

		if (target.classList.contains('check-btn')) {
			popupCheck.style.display = 'block';
			popupContent.style.opacity = 0;
                let op = 0;
                const setOpacity = () => {
                    let opacity;
                        if( op < 1 ) {
                            opacity = requestAnimationFrame(setOpacity);
                            op +=0.04;
                            popupContent.style.opacity = op;
                        } else{
                            cancelAnimationFrame(opacity);
                        }
                };
                setOpacity();
		} else if (target.closest('.popup-close') || target.classList.contains('popup-check')) {
			popupCheck.style.display = 'none';
		}

		if (target.classList.contains('director-btn')) {
			popupDirector.style.display = 'block';
			popupContent.style.opacity = 0;
                let op = 0;
                const setOpacity = () => {
                    let opacity;
                        if( op < 1 ) {
                            opacity = requestAnimationFrame(setOpacity);
                            op +=0.04;
                            popupContent.style.opacity = op;
                        } else{
                            cancelAnimationFrame(opacity);
                        }
                };
                setOpacity();
		} else if (target.closest('.popup-close') || target.classList.contains('popup-consultation')) {
			popupDirector.style.display = 'none';
		}

	});

};

export default togglePopUp;
