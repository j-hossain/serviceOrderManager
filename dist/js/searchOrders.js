var body;
searchOrder();
function searchOrder(){
    body = cleanBody();
    var searchBox = createSearchBox();
    body.appendChild(searchBox);
}

function createSearchBox(){
    var div = document.createElement('form');
    div.classList.add("searchBox");
    div.id = "searchForm";
    var searchInp = createInput("text","searchInp","Service ID");
    var SearchBtn = document.createElement('button');
    SearchBtn.classList.add("searchBtn");
    SearchBtn.innerHTML = "Search";
    SearchBtn.type = "submit";
    div.append(searchInp,SearchBtn);
    div.addEventListener('submit', (event) => {
        // stop form submission
        event.preventDefault();
        search();
    });
    return div;
}

function search(){
    var searchForm = document.getElementById('searchForm');
    var serviceId = parseInt(searchForm.elements["searchInp"].value);
    
}