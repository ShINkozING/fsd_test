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
let counter = document.querySelector(".child");
let counterInt = parseInt(counter.value, 10);
//отследить клик по кнопке
buttonPlus.addEventListener("click", function(){
    counterInt += 1;
    console.log(counterInt);
    counter.value = counterInt;
});