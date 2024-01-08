const microPhone = document.getElementById('mic');
const copy = document.getElementById('one');
const remove = document.getElementById('two');
const textBox = document.getElementById('textBox')
const stopSign = document.getElementById('stopSymbol')


if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const mySpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new mySpeechRecognition();

    recognition.continuous =  true;
    recognition.interimResults = true;

    recognition.onresult = function (event) {

        // to access the results property of the event, we say;
        const outcome = event.results[event.results.length - 1]

        // to get the last (most recent) result from the array, we say;
        const writtenVersion = event.results[0][0].transcript;

        // the textBox will contain the text representation of what was spoken...
        textBox.innerHTML = writtenVersion
    };


 // next, we  set up an event handler for the error event of the SpeechRecognition

    recognition.onerror = function(event){
        console.error('Cannot recognize speech:', event.error);
    };


 //  next, let's add an event listener to the microphone icon


    microPhone.addEventListener('click', function(){
            recognition.start();
    });
 
 //  next, let's add an event listener to the copy icon

    copy.addEventListener('click', function(){
        textBox.select()
        document.execCommand('copy');
    });

    // add eventListener to the delete icon 

    remove.addEventListener('click', function(){
        textBox.innerHTML = ""
    })

    stopSign.addEventListener("click", ()=> {
        recognition.stop();
    })


}

else{
    textBox.innerHTML = "Speech recognition is not supported in this browser.";
};



