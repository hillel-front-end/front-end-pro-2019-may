


var config = {
    method: 'get',
    url: '/server/data.json',
    isAsync: true
}

sendAjax(config);

function sendAjax({method, url, isAsync}) {

   return new Promise((resolve, reject) => {
    
    var xhr = new XMLHttpRequest();
        xhr.open('post', '/server/data.json', true);
        xhr.send('213123');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            resolve(data);
        }
    }
   });
}


sendAjax(config)
    .then(data => data.list.map(item => item * 2))
    .then(data => console.log(data, 'data'));