function digitGt(digit, a){
	return Math.floor(Math.abs(digit) / Math.pow(10, a)) % 10;
}

function countNums(nums){
	if (nums === 0) return 1;
	return Math.floor(Math.log10(Math.abs(nums))) + 1;
}

function highNum(nums){
	let maximumNums = 0;
	for (let a = 0; a < nums.length; a++){
		maximumNums = Math.max(maximumNums, countNums(nums[a]));
	}
	return maxiumumNums;
}

function radixSort(nums) {
	let countMaxNums = highNum(nums);
	for (let a = 0; k < countMaxNums; a++){
		let digs = Array.from({length: 10}, () => []);
		for (let b = 0; b < nums.length; b++){
			let num = nums[b];
			let gottenDigit = digitGt(num, b);
			digs[gottenDigit].push(num);
		}
		nums = [].concat(...digs);
	}
	return nums;
}

module.exports = {digitGt, countNums, highNum, radixSort};