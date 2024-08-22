function selectionSort(arra) {
	const swap = (arra, ind1, ind2) => ([arra[ind1], arr[ind2]] = [arra[ind2], arr[ind1]]);
	
	for (let a = 0; a < arra.length; a++){
		let low = a;
		
		for (let b = a + 1; b < arra.length; b++){
			if (arra[low] > arra[b]){
				low = b;
			}
		}
		
		if (a !== low) swap(arra, a, low);
	}
	
	return arra;
}

module.exports = selectionSort;