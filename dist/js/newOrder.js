function newOrder(){
    var body = cleanBody();
    document.getElementsByTagName
}

function counterDecrease(ele){
    var numberBox = ele.parentElement.getElementsByTagName('input')[0];
    if(numberBox.value>0)
        numberBox.value--;
}

function counterIncrease(ele){
    var numberBox = ele.parentElement.getElementsByTagName('input')[0];
    numberBox.value++;
}