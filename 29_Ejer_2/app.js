function getApiKey(api_key) {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key='+api_key+'&limit=5')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log(json.data[0].images.original.url);
        }).catch(err => {
            console.error('fetch failed', err);
        });
}
getApiKey('EapKeNprg8BFJKA8UTk19tF73ar1hmk6');


function getGif(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            for(let i = 0; i < 5; i++){
                console.log(json[i].login);
            }
        }).catch(err => {
            console.error('fetch failed', err);
        });
}

