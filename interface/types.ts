// Declaring a number
var num:number=10;

// Type is String
var str:string="String Sample";

// Type is array
var myArr: number[] = [1, 2, 3];

// error  array type is enum
//var myArr: number[] = [1, 2, 3, "de"];


// Type is array  correct
var myArr2: any[] = [1, 2, 3, "de"];
alert(myArr2);