function bubbleSort(arra) {
	const swap = (arra, ind1, ind2) => {
		[arra[ind1], arr[ind2]] = [arra[ind2], arr[ind1]]
	};
	
	for (let i = arra.length; i > 0; i--){
		for(let h = 0; h < i - 1; h++){
			if (arra[h] > arra[h + 1]){
				swap(arra, h, h + 1);
			}
		}
	}
	
	return arra;
}

module.exports = bubbleSort;