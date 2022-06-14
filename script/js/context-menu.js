//context-menu:
var editor = document.querySelector('.wrapper-editor')
var menu = document.querySelector(".menu");

editor.addEventListener('contextmenu', function(e) {
        menu.style.display = 'block';
        menu.style.marginLeft = e.clientX + 'px';
        menu.style.marginTop = e.clientY + 'px'; 
          //the clientX e clientY retornam as coordenadas dentro da aplicação onde o evento ocorreu. 
        e.preventDefault();  
}, false)

document.addEventListener('click', function() {
    if (menu.style.display=='block') {
        menu.style.display='none';
    }
})
