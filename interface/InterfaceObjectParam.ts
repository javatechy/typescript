interface operateInterface { 
    shape: string,
    side: number 
}
/**
 *Similar to struct in C/C++
 struct mystruct{
//......
 }obj1,obj2;
 */

function operate(x:operateInterface) {
    return x.side *x.side;
}

alert(operate({ "shape": "Hellp", "side": 20 }));
