function convertToRoman(num) {
	var result='';
	var roman =["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
	var decimals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
	for(var i=0; i<decimals.length; i++){
		while(num%decimals[i]<num){
				result+= roman[i];
				num -= decimals[i]
		}
	}
 return result;
}

convertToRoman(49);
