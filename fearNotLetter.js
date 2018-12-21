function fearNotLetter(str) {
var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
if(str[0] === str[0].toUpperCase()){
	alphabet = alphabet.join('').toUpperCase().split('');
}
strFirst = str[0];
strFirstPos = alphabet.indexOf(strFirst);
alphabet = alphabet.splice(strFirstPos,str.length+1);
console.log(alphabet)
for (var i=0; i<alphabet.length; i++){
	if(str.indexOf(alphabet[i])==-1){
		console.log(alphabet[i]);
		console.log(i);
		return alphabet[i];
	}
}
}

fearNotLetter("ABCE");
