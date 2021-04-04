
const apiKey = 'EapKeNprg8BFJKA8UTk19tF73ar1hmk6';
const endpoint = 'https://api.giphy.com/v1/gifs/trending?api_key='+apiKey;
const gifhys = [];
console.log(endpoint)
fetch(endpoint)
    .then(blob => blob.json())
    .then(newdata => gifhys.push(newdata.data));
console.log(gifhys)


function findMatches(wordToMatch, gifs) {
    return gifs[0].filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.title.match(regex)
    });
}

function displayMatches(e) {
    if (e.target.value == "") {
        const clear = "";
        suggestions.innerHTML = clear;
    } else {
        const matchedArray = findMatches(e.target.value, gifhys);
        const html = matchedArray.map(place => {
            const regex = new RegExp(e.target.value, 'gi');
            const gifyNames = place.title.replace(regex, `<span class="letters">${e.target.value}</span>`);
            return `
        <li>
            <span class="gifs">${gifyNames}</span>
        </li>
    `;
        }).join('');
        console.log(html);
        suggestions.innerHTML = html;
    }
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);