'use strict';

import togglePopUp from './togglePopUp';

let dataCalc = {
    bottom: "no",
    onoffswitch: 1
};

const calcAccord = () => {

    const accordionCalc = document.getElementById("accordion"),
    selectBox = document.querySelectorAll(".select-box"),
    titleText = document.querySelectorAll(".title-text")[1],
    calcResult = document.getElementById("calc-result"),
    collapseTwo = document.getElementById("collapseTwo"),
    myonoffswitchTwo = document.getElementById("myonoffswitch-two");
    
    myonoffswitchTwo.removeAttribute("checked");

    let calcRes = 10000,
    checkBottom = false,
    calcAdd = 10000;
    

    accordionCalc.addEventListener("click", e => {
        const target = e.target;
        
        const hideBlock = () => {
            titleText.style.display = "none";
            for (let index = 0; index < selectBox.length; index++) {
                const element = selectBox[index];
                if (index > 1) {element.style.display = "none";}
            }
        };
    
        const showBlock = () =>{
            titleText.style.display = "block";
            for (let index = 0; index < selectBox.length; index++) {
                const element = selectBox[index];
                if (index > 1) {element.style.display = "inline-block";}
            }
        };

        if (!((target.closest(".onoffswitch"))||
        (target.closest(".construct-btn")) ||
        (target.closest(moveAccord())) ||
        (target.closest("select")) )){
            return;
        }
        
  
        if(!target.closest("#collapseThree")) {
            calcRes = second(calcAdd);
        }
        //смена чекбокса        
        if (target.closest(".onoffswitch")) {
            const onoffswitch = target.closest(".onoffswitch"),
            inputCheck = onoffswitch.querySelector("input");
                    if (target.matches("span")) {
                        if (inputCheck.hasAttribute("checked")) {
                            inputCheck.removeAttribute("checked");
                            if (target.closest("#collapseOne")) {
                                showBlock();
                                calcAdd = 15000;
                                checkBottom = true;
                                // target.reset();
                                calcRes = second(calcAdd);
                                dataCalc["onoffswitch"] = 2;
                            }
                            if ((target.closest("#collapseThree"))&&
                            checkBottom) {
                                calcRes -=2000;
                            }

                            if ((target.closest("#collapseThree"))&& !checkBottom) {
                                calcRes -=1000;
                            } 
                            if (target.closest("#collapseThree")) {
                                dataCalc["bottom"] = "no";
                            }
                           
                        }
                        else {
                            inputCheck.setAttribute("checked","")

                            if (target.closest("#collapseOne")) {
                                hideBlock();
                                calcAdd = 10000;
                                checkBottom = false;
                               
                                calcRes = second(calcAdd);
                                dataCalc["onoffswitch"] = 1;
                            }
                            if ((target.closest("#collapseThree"))&& checkBottom) {calcRes +=2000;}
                            if ((target.closest("#collapseThree"))&& !checkBottom) {calcRes +=1000;}
                            if (target.closest("#collapseThree"))  {
                                dataCalc["bottom"] = "yes";
                            }

                        }
    
                    }
                 
        }
    
        //переход по кнопкам "следующий шаг"
        if (target.closest(".construct-btn")) {
            
            //отправка данных
            if (target.matches(".call-btn")) {
                e.preventDefault();
                addData(); //считывает данные со второго шага калькулятора
                const collapseFourInput = document.getElementById("collapseFour").querySelector("input");

                dataCalc["distance"] = collapseFourInput.value;
                
                return;

            }
            
            e.preventDefault();
            const targetPanel = target.closest(".panel-collapse");
            targetPanel.classList.remove("in");

            const targetNextPanel = targetPanel.closest(".panel").nextElementSibling;
            targetNextPanel.querySelector(".panel-collapse").classList.add("in");
        }
    
                
        calcResult.value = calcRes;

    });

    const formControl = collapseTwo.querySelectorAll(".form-control");
    //подсчет данных на втором шаге
    const second = res => {
        
        let countMeter = 0,
        countThingTwo = 0,
        countThingThree = 0;
        formControl.forEach((el) =>{
            if (el.value === "2 метра") {
                countMeter++ ;
            }
            if (el.value === "2 штуки") {
                countThingTwo++;
            }
            if (el.value === "3 штуки") {
                countThingThree++;
            }

        });
        

        res = res + res * countMeter * 0.2 + res * countThingTwo * 0.3 + res * countThingThree * 0.5;
        
        return res;
    };




    //получение данных со второго шага в объект
    const addData = () =>{
        for (let index = 0; index < formControl.length; index++) {
            const element = formControl[index];
            if ((!checkBottom) && (index > 1)) {break;}         
            dataCalc[`options ${index+1}`] = element.value;
            
        }
    };
    addData();

    const moveAccord = () => {
        // const accordion = document.getElementById('accordion');
            
        accordionCalc.addEventListener('click', e => {
    
            e.preventDefault();
    
            let target = e.target;
            target = target.closest('.panel-default');
    
            const openedElem = accordionCalc.querySelector('.collapse.in');
            openedElem.classList.remove('in');
            openedElem.classList.add('collapse');
            target.children[1].classList.add('in');
        });
    
    };
    
  
    


};


export default calcAccord;



