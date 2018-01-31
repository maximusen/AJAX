document.getElementById('get-server-json').addEventListener('click', getJson);

function getJson() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const clientData = JSON.parse(xhr.responseText);
            document.getElementById('client-nam')erText = clientData.name;
            document.getElementById('client-age').innerText = clientData.age;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();    
}
