var content = ['olution              ','studio               ', 'clone.        ']
let count=0, index=0, currentText = '', letter='';
(function typing(){
    if(count === content.length){
        count = 0;
    }
    currentText = content[count]
    letter = currentText.slice(0, ++index);
    document.getElementById('changing').textContent = letter;
    if (letter.length === currentText.length) {
        count++ ; index =0;
    }
    setTimeout(typing, 160)
}());
// **********************************************************************************************************
var menu = document.querySelector('.menu'),
    navBar = document.querySelector('nav'),
    close = document.querySelector(".close");
menu.addEventListener("click",()=>{
    menu.classList.toggle("meu");
    navBar.classList.toggle("active");
    close.classList.toggle("clos");
});
close.addEventListener("click", ()=>{
    menu.classList.toggle("meu");
    navBar.classList.toggle("active");
    close.classList.toggle("clos");
});
