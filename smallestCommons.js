function smallestCommons(arr) {
	 arr.sort(function(a, b) {
    return a - b;
  });
	console.log(arr);
	var numArr=[];
	
	for (var i=arr[0]; i<=arr[arr.length-1]; i++){
		numArr.push(i);
		console.log(numArr);
	}
	


var j=numArr[numArr.length-1]+1;
var found = false;
while(found===false){
	if(numArr.every(commonSmall)){
		found=true;
}else j=j+1;
}
;

function commonSmall(currentvalue){
return j%currentvalue ===0;
}
return j
}
smallestCommons([23,18]);
