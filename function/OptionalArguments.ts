function squre(num1: number, isInteger?: boolean ): number{
    if (isInteger) {
        return Math.floor(num1 * num1);
    }
    //error
    return '2';
}
alert(squre(10.22));
alert(squre(10.22,true));