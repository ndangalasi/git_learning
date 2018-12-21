function chunkArrayInGroups(arr, size) {
	// Create (two) empty arrays 
	var arr1 = [];
	var arr2 = [];
	var arr3 = [arr1, arr2];

	//using reduce fill the two array with a size- elements
	for(let i=0; i<size;i++){
		arr1.push(arr[i]);

	}
	for(let j=size; j<arr.length; j++){
		arr2.push(arr[j]);
	}

	return arr3;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
