function dropElements(arr, func) {
  // Drop them elements.
	var inde=[];
	var arr1=[];
	for(var i=0; i<=arr.length-1; i++){
		console.log(i);
		console.log(arr);
		if(func(arr[i])){
			arr.splice(0,i)	
			return arr
		}
	}
	return [];
}
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
