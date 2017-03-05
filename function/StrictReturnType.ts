//function squre(num1: number, isInteger: boolean = true) {
function squre(num1: number, isInteger?: boolean ) {
    if (isInteger) {
        return Math.floor(num1 * num1);
    }
    return num1 * num1;
}
alert(squre(10.22));
alert(squre(10.22,true));