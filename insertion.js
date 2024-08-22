function insertionSort(arra) {
	for (let a = 0; a < arra.length; a++){
		let val = arra[a];
		
		for (let b = a - 1; b > -1 && arra[b] > val; b--){
			arra[b + 1] = arra[b];
		}
		
	arra[b + 1] = val;
	}
	
	return arra;
}

module.exports = insertionSort;