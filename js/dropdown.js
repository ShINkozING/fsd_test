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

//счётчик в выпадающем меню
let buttons = document.querySelectorAll('[data-action]');
buttons.forEach(function(button){
    button.addEventListener('click', function(){
    let counterWrapper = this.closest('.counters-wrapper');
    let counter = counterWrapper.querySelector('[data-counter]');
        if (this.dataset.action === "plus") {
            if(counter.value < 10) {
            counter.value = ++counter.value;
        }
        } else {
            if(counter.value > 0) {
            counter.value = --counter.value;
        }
        }
    });
});
