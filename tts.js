const inputText=document.querySelector('#input-text');
const inputRate=document.querySelector('#input-rate');
const inputPitch=document.querySelector('#input-pitch');
const inputVoice=document.querySelector('#input-voice');
const speakButton=document.querySelector('#speak-button');
const readingText=document.querySelector('#reading-text');

let voices=[];

const synthObj=window.speechSynthesis;

voices=synthObj.getVoices().sort(function(a,b){
  if(a.name.toUpperCase() < b.name.toUpperCase())
    return -1;
  else if(a.name.toUpperCase() > b.name.toUpperCase())
    return 1;
  else
    return 0;
});

if(voices.length===0)
  alert("Sorry! This browser does not have support for Text to Speech. Please try Chrome or Firefox.");

for(let i=0; i<voices.length; i++){
  const option = document.createElement('option');
  option.textContent=`${voices[i].name} (${voices[i].lang})`;
  option.setAttribute('data-voice-name', voices[i].name);
  option.setAttribute('data-voice-lang', voices[i].lang);
  inputVoice.appendChild(option);
}

function speaker(){
  const speakObj = new SpeechSynthesisUtterance(inputText.value);
  const selectedVoice = inputVoice.selectedOptions[0].getAttribute('data-voice-name');

  for(let i=0; i<voices.length; i++){
    if(selectedVoice === voices[i].name)
      speakObj.voice=voices[i];
  }

  speakObj.rate=inputRate.value;
  speakObj.pitch-inputPitch.value;
  synthObj.speak(speakObj);
}

function showReadingText(){
  readingText.textContent=inputText.value;
  readingText.scrollIntoView();
}

speakButton.addEventListener('click', speaker);
speakButton.addEventListener('click', showReadingText)









