//-> funções de upload:
$('.btn-upload').on('click', function() {
    document.querySelector("div .note-editable").innerHTML='';
    document.getElementById("abrir-arquivo").value=''; 
})
//-> funções de upload:
document.getElementById("document").addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
    var options = {
        styleMap: [
            "p[style-name='Section Title'] => h1:fresh",
            "p[style-name='Subsection Title'] => h2:fresh",
            "u => u", 
            "b => b"
        ],
        ignoreEmptyParagraphs: false,
    };
    readFileInputEventAsArrayBuffer(event, function(arrayBuffer) {
        mammoth.convertToHtml({arrayBuffer: arrayBuffer}, options)
            .then(displayResult)
            .done();
    });
}

function displayResult(result) {
    $('div .note-editable').empty();
    $('div .note-editable').append(result.value);
    enter();
    
    var messageHtml = result.messages.map(function(message) {
        return '<li class="' + message.type + '">' + escapeHtml(message.message) + "</li>";
    }).join("");
    
    document.getElementById("messages").innerHTML = "<ul>" + messageHtml + "</ul>";
}

function enter() {
    let p = document.querySelectorAll('div .note-editable p');
    p.forEach((e, index) => {
        if(e.innerHTML == '') {
            console.log('ae');
            e.innerHTML='<br>';
        }
        else if(e.innerHTML.match('-')) {
            console.log('abe')
            e.innerHTML='&nbsp; &nbsp; &nbsp; &nbsp;'+e.innerHTML;
        } 
        else if(e.innerHTML.match('&gt')) {
            console.log(':C')
            e.innerHTML='&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'+e.innerHTML;
        } 
    })
}

function readFileInputEventAsArrayBuffer(event, callback) {
    var file = event.target.files[0];

    var reader = new FileReader();
    
    reader.onload = function(loadEvent) {
        var arrayBuffer = loadEvent.target.result;
        callback(arrayBuffer);
    };
    
    reader.readAsArrayBuffer(file);
}

function escapeHtml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
} 