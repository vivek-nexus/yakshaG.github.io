const fullScreenButton=document.querySelector('#full-screen-button');
const inputText=document.querySelector('#input-text');
const inputRate=document.querySelector('#input-rate');
const inputPitch=document.querySelector('#input-pitch');
const inputVoice=document.querySelector('#input-voice');
const resetButton=document.querySelector('#reset-button');
const speakButton=document.querySelector('#speak-button');
const pauseButton=document.querySelector('#pause-button');
const resumeButton=document.querySelector('#resume-button');
const stopButton=document.querySelector('#stop-button');
const readingText=document.querySelector('#reading-text');

let voices=[];
let stopAll=false;
let pause=false;

const synthObj=window.speechSynthesis;

function populateVoices(){
  voices=synthObj.getVoices().sort(function(a,b){
    if(a.name.toUpperCase() < b.name.toUpperCase())
      return -1;
    else if(a.name.toUpperCase() > b.name.toUpperCase())
      return 1;
    else
      return 0;
  });
 
  
  for(let i=0; i<voices.length; i++){
    const option = document.createElement('option');
    option.textContent=`${voices[i].name} (${voices[i].lang})`;
    option.setAttribute('data-voice-name', voices[i].name);
    option.setAttribute('data-voice-lang', voices[i].lang);
    inputVoice.appendChild(option);
  }
}


async function pausedResume(){
  return new Promise(resolve => {
    resumeButton.onclick = resolve; 
    stopButton.onclick = resolve;
  });
}


async function speaker(textPart){
  const speakObj = new SpeechSynthesisUtterance(textPart);
  const selectedVoice = inputVoice.selectedOptions[0].getAttribute('data-voice-name');

  for(let i=0; i<voices.length; i++){
    if(selectedVoice === voices[i].name)
      speakObj.voice=voices[i];
  }
  speakObj.rate=inputRate.value;
  speakObj.pitch-inputPitch.value;
  synthObj.speak(speakObj);
  
  return new Promise(resolve => {speakObj.onend = resolve;});
}

async function showReadingText(textPart){
  // console.log(textPart);
  readingText.textContent=textPart;
  readingText.scrollIntoView();
  await speaker(textPart);
  return new Promise(resolve => {resolve();});
}

async function parseSentences(){
  const selectedVoice = inputVoice.selectedOptions[0].getAttribute('data-voice-name');

  if(selectedVoice===''){
    alert("Please select Voice from the list");
    return;
  }

  let sentences=inputText.value.split(/[.|!|?]+/g);


  for(let i=0; i<sentences.length; i++){
    
    if(pause===true){
      await pausedResume();
      i--;
      pause=false;
    }

    if(stopAll===true){
      stopAll=false;
      break;
    }
    await showReadingText(sentences[i]);
  }
}


populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoices;
}

// console.log(voices);

// if(voices.length==0)
// alert("Sorry! This browser does not have support for Text to Speech. Please try Chrome or Firefox.");


// speakButton.addEventListener('click', speaker);
fullScreenButton.addEventListener('click', function(){
  document.documentElement.webkitRequestFullScreen();
});


resetButton.addEventListener('click', function(){
  inputText.value="";
  inputText.focus();
});

speakButton.addEventListener('click', function(){
  speechSynthesis.cancel(); 
  stopButton.click();
  stopAll=false;
  parseSentences();
});
stopButton.addEventListener('click', function(){speechSynthesis.cancel(); readingText.textContent=''; stopAll=true;})
pauseButton.addEventListener('click',function(){speechSynthesis.cancel(); pause=true;})







