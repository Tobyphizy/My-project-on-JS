// Return a boolean is a number is desending order

const arr1 = [242,237,289,265,289,246,257,563,890,750,490,756,459,521,1000];
const arr2 = [514,253,152,697,100,564,764,325,692,462,756,548,960,465,2000];

function arrSort(arr) {
	arr.sort((a,b)=>b-a);
	return arr;
}

console.log(arrSort(arr1));
console.log(arrSort(arr2));
