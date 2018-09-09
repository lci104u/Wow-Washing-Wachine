var json;
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = fetchDB;
httpRequest.open('GET', 'fetchDB.php', true);
httpRequest.send();

function fetchDB() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
            if(httpRequest.responseText[0]!="[") {
                notify('There was a problem to connect to database.');
                return;
            }
            json = JSON.parse(httpRequest.responseText);
            console.log(json);
            json.forEach(element => {
                console.log(element);
                addItem(element['location'], element['number'], element['status']);
            });
        } else {
            notify('There was a problem to connect to backend.');
        }
    }
};

function addItem(location, number, status) {
    var tr = document.createElement('tr'); 
    var th = document.createElement('th'); 
    th.setAttribute('scope', 'row');
    addText(th, location);
    tr.appendChild(th);
    var td = document.createElement('td'); 
    addText(td, number);
    tr.appendChild(td);
    td = document.createElement('td'); 
    addText(td, status);
    tr.appendChild(td);
    var table = document.querySelector('#status-table');
    table.appendChild(tr);
}

function addText(node, text) {
    var content = document.createTextNode(text);
    node.appendChild(content);
}

function notify(message) {
    var div = document.createElement('div');
    div.classList.add('alert', 'alert-dismissable', 'fade', 'show', 'alert-danger');
    var btn = document.createElement("button");
    btn.setAttribute('type', 'button');
    btn.setAttribute('data-dismiss', 'alert');
    btn.classList.add('close');
    var strong = document.createElement('strong');
    addText(strong, '錯誤！');
    div.appendChild(btn);
    div.appendChild(strong);
    addText(div, message);
    var zone = document.querySelector('#notification-zone');
    zone.appendChild(div);
}
