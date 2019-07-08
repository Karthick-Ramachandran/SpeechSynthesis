const voice = document.querySelector('.voice');

const content = document.querySelector('.content');


const speech = window.SpeechRecognition ||  window.webkitSpeechRecognition;

const reg = new speech();

reg.onstart = function() {
    console.log('st');
}

reg.onresult = function(event) {
    content.innerHTML = `You Spoked: ${event.results[0][0].transcript}`;
    read(event.results[0][0].transcript);
}

voice.addEventListener('click', function(){
    console.log(1);
    reg.start();
});

const messages = [
    "I'm fine... hmm what about you? how's your work today",
    "Dont ask me.. i'm little angry",
    "Great, like you"
];
const hows = [
    'You sound horrible may be you might smoked extra cigarettes today',
    "it is pleasant to hear your voice"
]
const actor = [
    "Rajinikanth"
]

const wife = [
    'It depends.. you people wants wife like kanagi.... but there is karma... you may get wife like mia khalifa'
]

const weather = [
    'Why do you care?... you are inside a Ac room and asking?.............. Stop asking me the weather,  go to work.'
]

function read(message) {
    const mySpeech = new SpeechSynthesisUtterance();

    mySpeech.text = "I can't understood what you are asking... try asking me these questions... what's the weather now or something specific i can answer ";


   if(message.includes('how are you')){
     const SpeText = messages[Math.floor(Math.random() * messages.length)];
     mySpeech.text = SpeText;
   }
   if(message.includes("my voice")){
    const SpeText = hows[Math.floor(Math.random() * hows.length)];
    mySpeech.text = SpeText;
  }
  if(message.includes("my future wife")){
    mySpeech.text = wife[0];
  }
  if(message.includes('superstar in Tamil cinema')){
    mySpeech.text = actor[0];
  }
  if(message.includes("what's the weather now")){
    mySpeech.text = weather[0];
  }
  if(message.includes("what is the weather now")){
    mySpeech.text = weather[0];
  }

    mySpeech.volume = 1;
    mySpeech.rate = 0.8;
    mySpeech.pitch = 1;

    window.speechSynthesis.speak(mySpeech);

}