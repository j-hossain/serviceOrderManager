// newOrder();
var body;
var mainDiv;
var elementsDiv;
var bodyCount;
var lensCount;
var flashCount;

function newOrder() {
    body = cleanBody();
    mainDiv = document.createElement('div');
    mainDiv.id = "newOrderForm";
    bodyCount = lensCount = flashCount = 0;
    var customerForm = createCustomerForm();
    elementsDiv = document.createElement('div');
    var addButtons = createAddButtons();
    elementsDiv.classList.add("elements");
    mainDiv.appendChild(customerForm);
    mainDiv.appendChild(elementsDiv);
    mainDiv.appendChild(addButtons);
    body.appendChild(mainDiv);
    // createBodyForm();
}

function createCustomerForm(){
    var customerForm = document.createElement('form');
    customerForm.classList.add("inputDiv", "serviceDetails");
    var inpName = createInput("text", "cName", "Customer Name");
    var inpPhone = createInput("tel", "cPhone", "Phone Number");
    var inpAdrs = createInput("text", "cAddress", "Address");
    var inpMnCost = createInput("number", "mnCost", "minimum cost");
    var inpMxCost = createInput("number", "mxCost", "maximum cost");
    var inpAdvPaid = createInput("number", "advPaid", "Advance Payment");
    //textarea that takes the details of the problem of the camera
    var details = document.createElement('textarea');
    details.name = "problemDet";
    details.id = "problem";
    details.placeholder = "Problem Details";
    // approximate delivery date of the camera
    var delDateDiv = document.createElement('div');
    var delDateLabel = document.createElement('label');
    var delDateInp = createInput("date", "dDate", "Delivery Date");
    delDateDiv.classList.add("delDate");
    delDateLabel.for = "dDate";
    delDateLabel.innerHTML = "Delivery Date";
    delDateDiv.appendChild(delDateLabel);
    delDateDiv.appendChild(delDateInp);
    customerForm.append(inpName,inpPhone,inpAdrs,details,delDateDiv,inpMnCost,inpMxCost,inpAdvPaid);
    return customerForm;
}

function createLensForm(){
    lensCount++;
    var lensForm = document.createElement('form');
    var divTtile = document.createElement('span');
    var deleteBtn = createDeleteBtn();
    lensForm.classList.add("inputDiv", "eleLens");
    var inpBrand = createInput("text", "brnad", "Lens Brand");
    var inpModel = createInput("tel", "model", "Lens Model");
    var inpIdent = createInput("text", "identityNo", "Identity No");
    var frontCapCheck = createCheckDiv("Front Cap","frontCap");
    var backCapCheck = createCheckDiv("Back Cap","backCap");
    var filterCheck = createCheckDiv("Filter","filter");
    var hoodCheck = createCheckDiv("Hood","hood");
    var bagCheck = createCheckDiv("Bag","bag");
    lensForm.id = "lens"+lensCount;
    divTtile.innerHTML = "Lens "+ lensCount;
    divTtile.classList.add("inputDivTitle");
    lensForm.append(deleteBtn,divTtile,inpBrand,inpModel,inpIdent,frontCapCheck,backCapCheck,filterCheck,hoodCheck,bagCheck);
    elementsDiv.append(lensForm);
}

function createFlashForm(){
    flashCount++;
    var flashForm = document.createElement('form');
    var divTtile = document.createElement('span');
    var deleteBtn = createDeleteBtn();
    flashForm.classList.add("inputDiv", "eleFlash");
    var inpBrand = createInput("text", "brnad", "Flash Brand");
    var inpModel = createInput("tel", "model", "Flash Model");
    var inpIdent = createInput("text", "identityNo", "Identity No");
    var BatteryCounter = createCounterInput("Battery","battery");
    var bagCheck = createCheckDiv("Bag","bag");
    flashForm.id = "flash"+flashCount;
    divTtile.innerHTML = "Flash "+ flashCount;
    divTtile.classList.add("inputDivTitle");
    flashForm.append(deleteBtn,divTtile,inpBrand,inpModel,inpIdent,BatteryCounter,bagCheck);
    elementsDiv.append(flashForm);
}

function createBodyForm(){
    bodyCount++;
    var bodyForm = document.createElement('form');
    bodyForm.classList.add("inputDiv", "eleBody");
    var divTtile = document.createElement('span');
    var deleteBtn = createDeleteBtn();
    var inpBrand = createInput("text", "brnad", "Camera Brand");
    var inpModel = createInput("tel", "model", "Camera Model");
    var inpIdent = createInput("text", "identityNo", "Identity No");
    var BatteryCounter = createCounterInput("Battery","battery");
    var memoryCardCounter = createCounterInput("Memory Card","memoryCard");
    var chargerCounter = createCounterInput("Cherger","charger");
    var bodyCapCheck = createCheckDiv("Body Cap","bodyCap");
    var bagCheck = createCheckDiv("Bag","bag");
    bodyForm.id = "body"+bodyCount;
    divTtile.innerHTML = "Body "+ bodyCount;
    divTtile.classList.add("inputDivTitle");
    bodyForm.append(deleteBtn,divTtile,inpBrand,inpModel,inpIdent,BatteryCounter,memoryCardCounter,chargerCounter,bodyCapCheck,bagCheck);
    elementsDiv.append(bodyForm);
}

function createCheckDiv(title,name){
    var div = document.createElement('div');
    var checkTitle = document.createElement('span');
    var yesInp = createInput("radio",name,"");
    var noInp = createInput("radio",name,"");
    var yesLabel = document.createElement('label');
    var noLabel = document.createElement('label');

    div.classList.add("checkDiv");
    checkTitle.classList.add("checkTitle");
    checkTitle.innerHTML = title;
    yesLabel.innerHTML = "Yes";
    noLabel.innerHTML = "No";
    yesLabel.for = name+"-"+"yes";
    noLabel.for = name+"-"+"no";
    yesInp.value = "yes";
    yesInp.value = "no";

    div.append(checkTitle,yesInp,yesLabel,noInp,noLabel);
    return div;
}

function createCounterInput(title,name){
    var div = document.createElement('div');
    var counterTitle = document.createElement('span');
    var decDiv = document.createElement('div');
    var counter = createInput("number",name,"");
    var incDiv = document.createElement('div');

    div.classList.add("counter");
    counterTitle.classList.add("counterTitle");
    decDiv.classList.add("cntBtn","decrease");
    counter.classList.add("counterBox");
    incDiv.classList.add("cntBtn","increase");

    counterTitle.innerHTML = title;
    counter.value= 0;
    decDiv.innerHTML= "<span><</span>";
    incDiv.innerHTML= "<span>></span>";
    decDiv.onclick = counterDecrease;
    incDiv.onclick = counterIncrease;

    div.append(counterTitle,decDiv,counter,incDiv);
    return div;
}

function createAddButtons(){
    var div = document.createElement('div');
    div.classList.add("addButtons");
    var buttons = [{id:"lensBtn",title:"Lens",funcName:createLensForm}
                    ,{id:"flashBtn",title:"Flash",funcName:createFlashForm}
                    ,{id:"bodyBtn",title:"Body",funcName:createBodyForm}];
    
    //loops through the buttons array no matter how many elements there are
    for(var i=0; i<buttons.length; i++){
        var button = createButton(buttons[i]);
        div.appendChild(button);
    }
    return div;
}

function createButton(button){
    var btn = document.createElement('span');
    btn.innerHTML = button.title;
    btn.id = button.id;
    btn.classList.add("addBtn");
    btn.onclick = button.funcName;
    return btn;
}

function createDeleteBtn(){
    var btn = document.createElement('span');
    btn.innerHTML = "x";
    btn.classList.add("deleteBtn");
    btn.onclick = deleteEle;
    return btn;
}

function deleteEle(event){
    var ele = event.target || event.srcElement;
    ele = ele.parentElement;
    elementsDiv.removeChild(ele);
    var type = ele.classList[1];
    var left = elementsDiv.querySelectorAll("."+type);
    var name ;
    if(type=="eleBody"){
        bodyCount--;
        name = "body";
    }
    else if(type=="eleLens"){
        lensCount--;
        name = "lens";
    }
    else if(type=="eleFlash"){
        flashCount--;
        name = "flash";
    }
    var cnt = 0;
    // console.log(left);
    left.forEach(element => {
        cnt++;
        element.id = name+cnt;
        element.querySelector(".inputDivTitle").innerHTML = name+" "+cnt;
    });
    
}

function counterDecrease(event) {
    var ele = event.target || event.srcElement;
    var numberBox = ele.parentElement.parentElement.getElementsByTagName('input')[0];
    if (numberBox.value > 0)
        numberBox.value--;
}

function counterIncrease(event) {
    var ele = event.target || event.srcElement;
    var numberBox = ele.parentElement.parentElement.getElementsByTagName('input')[0];
    numberBox.value++;
}