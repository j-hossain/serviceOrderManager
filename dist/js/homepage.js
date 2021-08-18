// homePage();

function homePage(){
    var body = cleanBody();
    //creating an optionBox where all options are going to be appended one by one
    var optionBox = document.createElement('div');
    optionBox.classList.add("optionBox");

    body.appendChild(optionBox);
    
    //keeping the options in an array for future upgradations, more options can easily be added here
    //title goes to the html text of the span of the button
    //funtion goes to the onclick element
    //functions are defined in other files
    //only the function name is given no () needed
    var options = [{id:"newOrder",title:"new order",funcName:newOrder}
                    ,{id:"searchOrders",title:"Search for orders",funcName:searchOrder}
                    ,{id:"viewAll",title:"view All orders",funcName:viewAll}];
    //loops through the options array no matter how many elements there are
    for(var i=0; i<options.length; i++){
        var option = createOption(options[i]);//sending the ith option object froms options array
        optionBox.appendChild(option);//appending it to the optionBox div
    }
}

function createOption(optionData){
    var option = document.createElement('div');
    option.classList.add("option");
    option.id = optionData.id;
    option.onclick = optionData.funcName;
    //keeping the title text inside a span tag, since div is not for holding texts
    var span = document.createElement('span');
    span.innerHTML = optionData.title;
    option.appendChild(span);//the span goes inside that option div

    return option;//returning the whole option so that it can be appended
}

