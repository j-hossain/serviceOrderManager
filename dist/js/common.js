function cleanBody(){
    var body = document.getElementById('contentBody');
    body.innerHTML = "";
    return body;//returning the body so that the caller function can use it to insert elements
}
function createInput(type, name, placeholder) {
    var inputBox = document.createElement('input');
    inputBox.type = type;
    inputBox.name = name;
    inputBox.placeholder = placeholder;
    return inputBox;
}