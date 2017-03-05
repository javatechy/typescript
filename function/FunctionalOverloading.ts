function area(side1: number);
function area(side1: number, side2: number);
function area(side1: number, side2: number, side3: number, side4: number);
function area(side1: number, side2?: number, side3?: number, side4?: number){
    if (side2 == undefined && side3 == undefined && side4 == undefined) {
        side2 = side3 = side1;
        return side1 * side2;
    }
    else if (side3 == undefined && side4 == undefined) { 
        side3 = side1;
        side4 = side2;
     return side1 * side2;
   
    }
    return -1;
}
alert(area(10));
alert(area(10, 20));
// Error method signature is not defined : alert(area(10,20,20));
alert(area(10,20,30,40));