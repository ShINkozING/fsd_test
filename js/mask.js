let input = document.querySelectorAll('.js-date')[0];

let dateInputMask = function dateInputMask(elm) {
    elm.addEventListener('keypress', function(e) {
    if(e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
    }
    
let len = elm.value.length;
    
    if(len !== 1 || len !== 3) {
        if(e.keyCode == 47) {
        e.preventDefault();
        }
    }
    if(len === 2) {
        elm.value += '.';
    }
    if(len === 5) {
        elm.value += '.';
    }
    });
};

dateInputMask(input);