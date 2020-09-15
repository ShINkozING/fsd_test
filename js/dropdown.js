//выпадающее меню dropdown
let select = function () {
    let selectHeader = document.querySelectorAll('.dropdown__header');
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });
    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

};
select();

//счетчик
//найти кнопку +
let buttonPlus = document.querySelector('[data-action="plus"]');
let buttonMinus = document.querySelector('[data-action="minus"]')

buttonPlus.addEventListener('click',()=>{
    let inp = document.querySelector('.first');
    let num = parseInt(inp.value, 10);
    if(num <10){
        num += 1;
        inp.value = num;
    }
});

buttonMinus.addEventListener('click',()=>{
    let inp = document.querySelector('.first');
    let num = parseInt(inp.value, 10);
    if (num > 0){
        num -= 1;
        inp.value = num;
    } 
});