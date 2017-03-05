// assign num2=num1 for second variable

function addNums(num1: number, num2: number=num1) { 
   	return Math.PI * num2 * num1;
}
//  Error  => alert(addNums(10));
 alert(addNums(10));