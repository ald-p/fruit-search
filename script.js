const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	const results = fruits.filter(fruit => {
		const lowerCaseFruit = fruit.toLowerCase();
		const lowerCaseInputVal = str.toLowerCase();
		return lowerCaseFruit.includes(lowerCaseInputVal);
	})

	return results;
}

function searchHandler(e) {
	e.preventDefault();

	// always create new ul for every keyup
	suggestions.innerHTML = '';
	// if no values, don't create any li elements and return undefined
	if (!e.target.value) return;

	const searchBarStr = e.target.value;
	const matchingFruits = search(searchBarStr);
	showSuggestions(matchingFruits, searchBarStr);
}

function showSuggestions(results, inputVal) {
	for (const [index, fruit] of results.entries()) {
		// only show 10 results at most
		if (index == 10) return;
		const liEl = document.createElement('li');
		liEl.innerHTML = boldString(fruit, inputVal);
		suggestions.appendChild(liEl);
	}
}

function useSuggestion(e) {
	const suggestionClicked = e.target.innerText;
	input.value = suggestionClicked;
	suggestions.innerHTML = '';
}

function boldString(fruit, inputVal) {
	const regEx = new RegExp(inputVal, "ig");
	return fruit.replace(regEx, `<b>$&</b>`);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);