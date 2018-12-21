function uniteUnique(arr) {
	var arr1=[];
for(var i=0; i<arguments.length; i++){
	var arrArguments = arguments[i];
	for(var j=0; j<arrArguments.length; j++){
		var indexValue = arrArguments[j];
		if(arr1.indexOf(indexValue)=== -1){
				arr1.push(indexValue)
		}
	}
}
	console.log(arr1);
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);