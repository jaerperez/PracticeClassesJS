const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
  

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) ||
            place.state.match(regex);
    });
}

function displayMatches(e) {
    if (e.target.value == "") {
        const clear = "";
        suggestions.innerHTML = clear;
    } else {
        const matchedArray = findMatches(e.target.value, cities);
        const html = matchedArray.map(place => {
            const regex = new RegExp(e.target.value, 'gi');
            const cityName = place.city.replace(regex,`<span class=hl>${e.target.value}</span>`)
            const stateName = place.state.replace(regex,`<span class=hl>${e.target.value}</span>`)
            return
            `<li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="people">${place.population}</span>
            </li>`
        }).join('');
        suggestions.innerHTML = html;
    }
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);