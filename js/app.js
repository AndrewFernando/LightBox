
/*
Hacemos click en una imagen pequena 
    lightbox aparece y anadimos una clase 'activo'
    recogemos la imagen pequena 
    a la imagen grande colocas scr de la imagen pequena 
*/


const enlaces = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.grande')
const cerrar = document.querySelector('.cerrar')
const buttons = document.querySelector('.buttons')
const botones = document.querySelectorAll('.boton');

enlaces.forEach((cadaEnlace,i)=>{   
    enlaces[i].addEventListener('click',(e)=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src
        console.log(ruta)
        lightbox.classList.add('activo')
        grande.setAttribute('src',ruta)
        buttons.style.display = 'none';
    })
})
console.log(cerrar);
cerrar.addEventListener('click',(e)=>{
    console.log("Clic en el botón de cerrar");
    lightbox.classList.remove('activo')
    grande.setAttribute('src','')
    buttons.style.display = 'flex';
})

buttons.addEventListener('click', (event) => {
    const buttonIndex = [...buttons.children].indexOf(event.target);
    if (buttonIndex !== -1) {
        if (buttonIndex === 0) {
            window.location.href = `index.html`;
        } else {
            window.location.href = `index${buttonIndex}.html`;
        }
    }
});