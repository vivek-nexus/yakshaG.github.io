// const fullScreenButton=document.querySelector('#full-screen-button');
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
// pauseButton.disabled=true;
// resumeButton.disabled=true;
prevButton.disabled=true;
nextButton.disabled=true;
pauseButton.style.display = 'none';
resumeButton.style.display = 'none';

const synthObj=window.speechSynthesis;


//Execution Statements and Event Handlers
populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoices;
}

// fullScreenButton.addEventListener('click', function(){
//   document.body.requestFullscreen();
// });

resetButton.addEventListener('click', function(){
  inputText.value="";
  inputText.focus();
});

speakButton.addEventListener('click', function(){
  speakButton.style.display = 'none';
  pauseButton.style.display = 'inline';
  parseSentences();
});
stopButton.addEventListener('click', stopAllFunction);

pauseButton.addEventListener('click', function(){
  pauseButton.style.display = 'none';
  resumeButton.style.display = 'inline';
  pauseFunction();
});

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
    pauseButton.style.display = 'none';
    speakButton.style.display = 'inline';
    return;
  }

  prevButton.disabled=false;
  nextButton.disabled=false;

  let sentences=inputText.value.split(/[.|!|?]+/g);

  console.log("Finished parsing sentences!")
  for(let i=0; i<sentences.length; i++){
    
    if(pause===true){
      await pausedResume();
      resumeButton.style.display = 'none';
      pauseButton.style.display = 'inline';
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
    console.log(`Sentence ${i+1} sent for reading...`);
    await showReadingText(sentences[i]);
  }


  console.log('Flushing Buttons');
  prevButton.disabled=true;
  nextButton.disabled=true;
  speakButton.style.display = 'inline';
  pauseButton.style.display = 'none';
  resumeButton.style.display = 'none';
}

//Displays Reading text and calls speaker
//Waits until speaking is over
//Returns promise after completion
async function showReadingText(textPart){
  // let screenLock = new NoSleep();
  // screenLock.enable();
  // console.log('Screen Locked!');
  readingText.textContent=textPart;
  readingText.scrollIntoView();
  await speaker(textPart);
  // screenLock.disable();
  // console.log('Screen Unlocked.')
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
  //For blank and undefined text inputs
  if(textPart==='' || textPart===undefined)
    return new Promise(resolve => {resolve();});
  
  speakObj.rate=inputRate.value;
  speakObj.pitch-inputPitch.value;
  synthObj.speak(speakObj);
  console.log('Reading: '+textPart);
  
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
  speakButton.style.display = 'inline';
  speechSynthesis.cancel(); 
  readingText.textContent=''; 
  stopAll=true;
}

//Called by Resume Button
//Resolves promises for pause wait
function pausedResume(){
  resumeButton.style.display = 'inline';
  pauseButton.style.display = 'none';
  return new Promise(resolve => {
    resumeButton.onclick = resolve; 
    stopButton.onclick = resolve;
    prevButton.onclick = resolve;
    nextButton.onclick = resolve;
  });
}

