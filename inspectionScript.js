const previousDate=document.querySelector("[name='previous-date']");
const presentDate=document.querySelector("[name='present-date']");

let date=new Date();

presentDate.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);

const addMSRow = document.querySelector("#add-ms-row");
const addPowerRow = document.querySelector("#add-power-row");
const addHsdRow = document.querySelector("#add-hsd-row");
const addTurboRow = document.querySelector("#add-turbo-row");

addMSRow.addEventListener('click', () => {addRow('MS');});
addPowerRow.addEventListener('click', () => {addRow('poWer');});
addHsdRow.addEventListener('click', () => {addRow('HSD');});
addTurboRow.addEventListener('click', () => {addRow('Turbo');});



function addRow(product){
    productString=product.toLowerCase();
    const productSecton=document.querySelector(`[id=${productString}]`);
    const customMeterRow=document.createElement('div');
    customMeterRow.setAttribute('class', 'row custom-meter-row');
    productSecton.appendChild(customMeterRow);

    const productCol=document.createElement('div');
    productCol.setAttribute('class', 'col-4');
    customMeterRow.appendChild(productCol);

    const productName=document.createElement('p');
    productName.textContent=product;
    productCol.appendChild(productName);

    
    // Previous input
    const previousCol=document.createElement('div');
    previousCol.setAttribute('class', 'col-4');
    customMeterRow.appendChild(previousCol);

    const previousInput=document.createElement('input');
    previousInput.value='0';
    previousInput.setAttribute('type', 'number');
    previousInput.setAttribute('name', 'previous-val');
    previousCol.appendChild(previousInput);


    // Present input
    const presentCol=document.createElement('div');
    presentCol.setAttribute('class', 'col-4');
    customMeterRow.appendChild(presentCol);

    const presentInput=document.createElement('input');
    presentInput.value='0';
    presentInput.setAttribute('type', 'number');
    presentInput.setAttribute('name', 'present-val');
    presentCol.appendChild(presentInput);
}

function findSale(product){
    let result=0;
    const row=document.querySelector(`[id=${product}]`).querySelectorAll(".custom-meter-row");
    for(let i=0; i<row.length; i++){
        result+= Number(row[i].querySelector("input[name='present-val']").value)-Number(row[i].querySelector("input[name='previous-val']").value);
    }
    // console.log(`${product} sales: ${result}`);
    return result;       
}

function numberOfDays(previousDate, presentDate){
    let prvDt=new Date(previousDate.value);
    let prsDt=new Date(presentDate.value);
    return (prsDt.getTime() - prvDt.getTime())/(1000 * 3600 * 24);

}

function findVariation(product){
    let sales=findSale(product);
    let variation=(sales-Number(document.querySelector(`[name=${product}-test]`).value)) - 
    (Number(document.querySelector(`[name=${product}-invoice]`).value) + Number(document.querySelector(`[name=${product}-stock-previous]`).value) - Number(document.querySelector(`[name=${product}-stock-present]`).value));
    
    console.log(variation);

    return variation;
}

function findLimits(product){
    let limits=[];
    let temp=[];
    // let days=Number(numberOfDays(previousDate, presentDate));
    let sales=findSale(product);
    let percentStock = 0.04 * Number(document.querySelector(`[name=${product}-stock-present]`).value);

    let indicativeSales=600000;

    if(product==='ms' || product === 'power'){
        temp[0] = Math.min(indicativeSales,sales) * (0.75/100);
        temp[1] = (sales > indicativeSales) ? (sales-indicativeSales)*(0.6/100) : 0 ;
    }

    else{
        temp[0] = Math.min(indicativeSales,sales) * (0.25/100);
        temp[1] = (sales > indicativeSales) ? (sales-indicativeSales)*(0.2/100) : 0 ;
    }

    // console.log(limits);

    limits[0] = -1 * (Number(temp[0]) + Number(temp[1]) + percentStock);
    limits[1] = percentStock;


    console.log(limits);
    return limits;

}

function getResult(product){
    let variation=findVariation(product);
    document.querySelector(`.${product}-result`).textContent=`${product.toUpperCase()}: ${variation}`;

    let limits=findLimits(product);

    if(variation<=limits[1] && variation>=limits[0]){
        document.querySelector(`.${product}-result`).style.color='white';
        document.querySelector(`.${product}-result`).style.backgroundColor='green';
    }
    else{
        document.querySelector(`.${product}-result`).style.color='white';
        document.querySelector(`.${product}-result`).style.backgroundColor='red';
    }
}

function checkDateAndFire(){
    if(document.querySelector("[name='previous-date']").value===""){
        errorMessage.textContent='Please enter previous inspection date';
        return;
    }
    else{
        errorMessage.textContent='';
        getResult('ms');
        getResult('power');
        getResult('hsd');
        getResult('turbo');
    }
}

const calculate=document.querySelector("#calculate");
const errorMessage=document.querySelector("#error-message");

calculate.addEventListener('click', checkDateAndFire);
// calculate.addEventListener('click', () => {getResult('ms');});
// calculate.addEventListener('click', () => {getResult('power');});
// calculate.addEventListener('click', () => {getResult('hsd');});
// calculate.addEventListener('click', () => {getResult('turbo');});


