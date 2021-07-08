console.log('Editable Div Test')
let div = document.createElement('div')
div.setAttribute('id', 'editable')
div.setAttribute('class', 'editable')
let get = localStorage.getItem('key');
let text;
if (get == null) {
    text = document.createTextNode("Click Me to Edit")
}
else {
    text = document.createTextNode(get)
}
div.appendChild(text)
let heading = document.querySelector('.heading')
heading.appendChild(div)
heading.setAttribute('style', 'display: flex;flex-direction: column; justify-content : center ; align-items : center')
div.setAttribute('style', 'padding : 21px; border : 2px solid blue; width: 500px;')
div.addEventListener('click', function (e) {
    let ta = div.getElementsByClassName('textarea')
    if (ta.length === 0) {
        let html = div.innerText;
        div.innerHTML = `<textarea class = "textarea" id = "textarea">${html}</textarea>`
        let taStyle = div.querySelector('#textarea');
        taStyle.setAttribute('style', 'width: 100%;')
        taStyle.addEventListener('blur', function () {
            div.innerHTML = taStyle.value;
            let divInner = div.innerHTML
            localStorage.setItem('key', divInner)
        })
    }
})
/*
console.log(heading)
console.log(div)
*/