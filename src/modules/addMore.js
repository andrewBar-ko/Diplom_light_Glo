'use strict';

const addMore = () => {
    const shadowBlock = document.querySelectorAll('.shadow-block');
    const addSentenceBtn = document.querySelector('.add-sentence-btn');

    addSentenceBtn.addEventListener('click', () => {

        for (const i of shadowBlock) {
            if(getComputedStyle(i, null).display !== 'flex/block'){
                const parentDiv = i.parentNode;
                parentDiv.classList.remove('hidden');
                if (parentDiv.closest('.visible-sm-block')) {
                    parentDiv.classList.remove('visible-sm-block');
                }
            }            
        }
        addSentenceBtn.style.display = 'none';
        
    });
};

export default addMore;