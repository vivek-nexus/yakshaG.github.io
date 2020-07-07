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
const prevButton=document.querySelector('#prev-button');
const nextButton=document.querySelector('#next-button');
const readingText=document.querySelector('#reading-text');

//Setting Variables
let voices=[];
let date= new Date();
let stopAll=false;
let pause=false;
let prev=false;
let next=false;
pauseButton.disabled=true;
resumeButton.disabled=true;
prevButton.disabled=true;
nextButton.disabled=true;

const synthObj=window.speechSynthesis;

//Execution Statements and Event Handlers
populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoices;
}

fullScreenButton.addEventListener('click', function(){
  document.body.requestFullscreen();
});

resetButton.addEventListener('click', function(){
  inputText.value="";
  inputText.focus();
});

speakButton.addEventListener('click', function(){
  speakButton.disabled=true;
  parseSentences();
});
stopButton.addEventListener('click', stopAllFunction);

pauseButton.addEventListener('click',pauseFunction);

prevButton.addEventListener('click',function(){
  speechSynthesis.cancel();
  prev=true;
});

nextButton.addEventListener('click',function(){
  speechSynthesis.cancel();
  next=true;
});









//FUNCTIONS SECTION

//Fetches and Populates the Voices Array in Alphabetical Order
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


//Parses text content and breaks into sentences
//Loops over sentences and sends to showReadingText
//Handles Previous, Stop, Pause, Resume and Next Buttons
async function parseSentences(){
  const selectedVoice = inputVoice.selectedOptions[0].getAttribute('data-voice-name');

  if(selectedVoice===''){
    alert("Please select Voice from the list");
    speakButton.disabled=false;
    return;
  }

  pauseButton.disabled=false;
  resumeButton.disabled=false;
  prevButton.disabled=false;
  nextButton.disabled=false;

  let sentences=inputText.value.split(/[.|!|?]+/g);

  console.log("Finished parsing sentences!")
  for(let i=0; i<sentences.length; i++){
    
    if(pause===true){
      await pausedResume();
      i--;
      pause=false;
    }

    if(prev===true){
      i=i-2;
      prev=false;
    }

    if(stopAll===true){
      stopAll=false;
      break;
    }
    console.log(`Sentence ${i+1} sent for reading...`)
    await showReadingText(sentences[i]);
  }

  speakButton.disabled=false;
  pauseButton.disabled=true;
  resumeButton.disabled=true;
  prevButton.disabled=true;
  nextButton.disabled=true;

}

//Displays Reading text and calls speaker
//Waits until speaking is over
//Returns promise after completion
async function showReadingText(textPart){
  // console.log(textPart);
  readingText.textContent=textPart;
  readingText.scrollIntoView();
  await speaker(textPart);
  return new Promise(resolve => {resolve();});
}

//TTS Speaking function
//Returns promise after completing or cancelling TTS speak
function speaker(textPart){
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

//Called by Pause Button
//Stops TTS and sets variable values
function pauseFunction(){
  speechSynthesis.cancel(); 
  pause=true;
}

//Called by Stop Button
//Stops TTS and sets variable values
function stopAllFunction(){
  speechSynthesis.cancel(); 
  readingText.textContent=''; 
  stopAll=true;
}

//Called by Resume Button
//Resolves promises for pause wait
async function pausedResume(){
  return new Promise(resolve => {
    resumeButton.onclick = resolve; 
    stopButton.onclick = resolve;
    prevButton.onclick = resolve;
    nextButton.onclick = resolve;
  });
}








//ADD TO HOME SCREEN PROGRESSIVE WEBAPP

