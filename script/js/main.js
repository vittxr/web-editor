import createEditor from './editor.js';

//>> funcionalidades:
//botão de limpar:
$('.btn-limpar').on('click', function limpar() {
    $('div .note-editable').empty();
    $('#summernote').empty();
    createEditor(); //cria-se o editor novamente

    //zera-se as variáveis.
    document.getElementById("document").value=''; 
    cont = 0;
    eValue;
});

//open-modal:
document.querySelector(".libs").addEventListener("click", openModal, {passive: true});
var modal = document.querySelector('.modal_');
var backdrop = document.querySelector('.backdrop');

function openModal(){
    modal.style.display = 'flex';
    backdrop.style.display = 'block';
    backdrop.addEventListener('click', closeModal);
}

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}


document.addEventListener('load', createEditor()) 