document.getElementById('timestamp')
    .innerHTML = (new Date()).toLocaleTimeString();

document.getElementById('get-server-data')
    .addEventListener('click', getServerData);
    
function getServerData() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'hello.html', true);
    xhr.send();
}