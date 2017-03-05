// add Two numbers if a type is string it return 0 else convert into number
function addNums(num1: any, num2: number) { 
    if (typeof num1 == "string") { 
        if (isNaN(parseInt(num1, 10))) { 
            return 0;
        }
        num1 = parseInt(num1, 10);
    }
    return num2;
}

alert(addNums("10", 20));