Array.prototype.last = function(){
		return this[this.length-1];
}
Array.prototype.lastBut1 = function(){
	return this[this.length-2]
}

 var arr = [1,1];

function sumFibs(num) {
while(arr.last()+ arr.lastBut1()<=num){
arr.push(arr.last()+arr.lastBut1());
}
var arr1=arr.filter(arr=>arr%2!==0);
var accumulator = (accumulator,currentValue)=>accumulator+currentValue;
var sum = arr1.reduce(accumulator)
console.log(arr1);
 console.log(sum);
  return sum;
}

sumFibs(75025);
