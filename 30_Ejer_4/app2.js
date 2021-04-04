const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
console.log(endpoint);
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
    console.log(cities);
  

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
        const cityNames = place.city.replace(regex,`<span class="letters">${e.target.value}</span>`);
        const stateNames = place.state.replace(regex,`<span class="letters">${e.target.value}</span>`)
        return `
        <li>
            <span class="city">${cityNames}, ${stateNames}</span>
            <span class="population">${place.population}</span>
        </li>
    `;
    }).join('');
    console.log(html);
    suggestions.innerHTML = html;
    }
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);