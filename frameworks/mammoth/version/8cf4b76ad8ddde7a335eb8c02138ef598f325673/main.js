Array.prototype.forEach.call(
    document.querySelectorAll("pre code[class*='language-']"),
    function(element) {
        hljs.highlightBlock(element);
        element.classList.remove("hljs");
    });
