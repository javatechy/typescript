interface operateInterface { 
    shape: string,
    side?: number 
}

function operate(x:operateInterface) {
    return x.side *x.side;
}

alert(operate({ "shape": "Hellp"}));
