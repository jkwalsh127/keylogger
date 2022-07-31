console.log('hello')

const inputBox = document.querySelector('.input-box')

var keyString = "";

function buildKeyString (e) {
    var result = ''
    var character = String.fromCharCode(e.keyCode)
    if (e.keyCode === 13) {
        console.log('enter')
        keyString = ""
    } else {
        result += character    
        keyString += result
        console.log(keyString)
    }
}

inputBox.addEventListener('keypress', (e) => {
    buildKeyString(e);
})