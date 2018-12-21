function telephoneCheck(str) {
	// Good luck!

	//covert string into array of number
	var arr = [];
	var count = 0;
  if (str[0]==="-"){
		return false
	}
	str = str.replace(/-|\s/g, "")
	console.log(typeof(str[0]));
	console.log(str.length);

	var q = str.length === 12 && str[0] === "(" && str[4] === ")";
	var p = str.length === 13 && str[1] === "(" && str[5] === ")" && str[0] === "1";
	var x = str.length === 11 && str[0] == "1";
	var y = str.length === 10 && str[0] != "1"
	console.log(x);
	console.log(y);
	console.log(p);
	console.log(q + " q");
	if (y || x || p || q) {
		str = str.replace(/\D+/g, "");
		console.log(str)
		for (var j = 0; j < str.length; j++) {
			arr.push(parseInt(str[j]));
		}
		console
		for (var i = 0; i < arr.length; i++) {
			if (typeof (arr[i]) === "number") {
				count++
			}
			console.log(count);
		}
		if (count === arr.length) {
			return true;
		}
		else return false;

	}
	else return false;
}
telephoneCheck("-1 (555) 555-5555");
