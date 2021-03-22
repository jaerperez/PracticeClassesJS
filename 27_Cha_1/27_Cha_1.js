let btn = document.getElementById("btn");
let text=document.getElementById("text");
btn.addEventListener('click',()=>{
    if(text.value==""){
        text.style.background='#e22b2b';
        alert("El input está vacío");
        event.stopPropagation();
    }else{
    alert( "Hola este es el nombre que escribieron en el input:  "+ text.value); }
})

text.addEventListener('focus',()=>{
    text.style.background='white';
})