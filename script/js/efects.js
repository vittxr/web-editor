//arrow hover efect:
var libs_box = document.querySelector('.libs-container')
var arrow = document.querySelector('.icon')

console.log(libs_box)

libs_box.addEventListener("mouseover", function() {
    arrow.classList.toggle("arrow-hover__animation")
      //toggle faz a alternância - adiciona a classe, se o elemento não possui ela; remove a classe, se o elemento tiver ela.
})

libs_box.addEventListener("mouseout", function() {
    arrow.classList.toggle("arrow-hover__animation")
})

