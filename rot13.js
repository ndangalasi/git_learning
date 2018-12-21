function rot13(str) { // LBH QVQ VG!
str=str.toUpperCase();
var res = [];
  for(var i=0; i<str.length; i++){
		var x =str.charCodeAt(i);
		if(x<65||x>90){
			res.push(String.fromCharCode(x));
		}else if(x<78){
				res.push(String.fromCharCode(x+13));
		}else res.push(String.fromCharCode(x-13));
	}
  return res.join("");
}

// Change the inputs below to test
rot13("SERR PbQR PNZC");
