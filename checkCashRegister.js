
var denom = [
	{ name: 'ONE HUNDRED', val: 100.00 },
	{ name: 'TWENTY', val: 20.00 },
	{ name: 'TEN', val: 10.00 },
	{ name: 'FIVE', val: 5.00 },
	{ name: 'ONE', val: 1.00 },
	{ name: 'QUARTER', val: 0.25 },
	{ name: 'DIME', val: 0.10 },
	{ name: 'NICKEL', val: 0.05 },
	{ name: 'PENNY', val: 0.01 }
];
console.log(typeof (denom));
function checkCashRegister(price, cash, cid) {
	var change = cash - price;

	var registerTotal = cid.reduce(function (acc, curr) {
		return acc + curr[1]
	}, 0.0);
	console.log(registerTotal);
	var output = { status: "", change: [] }

	if (registerTotal === change) {
		output.status = "CLOSED";
		output.change = cid;
		return output;
	}

	else if (registerTotal < change) {
		output.status = "INSUFFICIENT_FUNDS";
		console.log("error")
		return output
	}
	cid = cid.reverse();
	var result = denom.reduce(function (acc, next, index) {
		if (change >= next.val) {
			var currentChange = 0.0;

			while (change >= next.val && cid[index][1] >= next.val) {
				currentChange += next.val;
				change -= next.val;
				change = Math.round(change * 100) / 100;
				cid[index][1] -= next.val;
			}
			acc.push([next.name, currentChange]);

			return acc;
		} else return acc;
	}, [])

	console.log(result.lenth);



	if (result.length < 1 || change > 0) {
		output.status = "INSUFFICIENT_FUNDS";
		return output;
	}
	output.status = "OPEN";
	output.change = result;
	return output;
}


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 




