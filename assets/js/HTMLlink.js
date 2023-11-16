// Link me in HTML


console.group('HTMLlink.js')


console.info('Jeg er HTMLlink.js');

// find dom element med id
const HiddenElement = document.getElementById('hidden');

console.warn(HiddenElement.innerText);



console.info('hej fra et script tag');
const opgave = document.getElementById('Omid');
console.warn(opgave.innerText);

console.groupEnd()