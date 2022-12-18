function iterativeFibs(n) {
	let fib = [0, 1]; // Initialize array!

	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	}
	console.log(fib);
}

iterativeFibs(8);

let initialize = [0, 1];

recursiveFibs(8, initialize, 2);

function recursiveFibs(n, array, i) {
	if (array.length === n) {
		console.log('recursive:' + ' ' + array);
		return;
	} else {
		array[i] = array[i - 2] + array[i - 1];
		recursiveFibs(n, array, i + 1);
	}
}
