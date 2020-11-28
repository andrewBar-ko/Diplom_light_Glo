'use strict';

const moveAccord = () => {
    const accordionTwo = document.getElementById('accordion-two');
        
    accordionTwo.addEventListener('click', e => {

        e.preventDefault();

        let target = e.target;
        target = target.closest('.panel-default');

        const openedElem = accordionTwo.querySelector('.collapse.in');
        openedElem.classList.remove('in');
        openedElem.classList.add('collapse');
        target.children[1].classList.add('in');
    });

};

export default moveAccord;