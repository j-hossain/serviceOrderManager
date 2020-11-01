function cleanBody(){
    var body = document.getElementById('contentBody');
    body.innerHTML = "";
    return body;//returning the body so that the caller function can use it to insert elements
}