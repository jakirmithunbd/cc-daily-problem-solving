function countLetters (str) {
	const count = {};

	const l = str.length

	for (var i = 0; i < l; i++) {
		const char = str[i].toLowerCase();

		if (
			char >= 'a' && char <= 'z'
		) {
			count[char] = (count[char] || 0) + 1;
		}
	}

	const sortedRes = Object.keys(count).sort();

	let res = '';

	sortedRes.forEach( (item, index) => {
		res += `${item} : ${count[item]} \n`;
	}) 



	return sortedRes;
}

console.log(countLetters('aawrasabbc'))