document.getElementById('fetch-server-data').addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('hello.html')
        .then( response => response.text() )
        .then( text => document.getElementById('placeholder').innerHTML = text);
}