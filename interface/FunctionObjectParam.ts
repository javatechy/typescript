// Passing a object in param

function operate(x: { shape: string, side: number }) {
    return x.side *x.side;
}

alert(operate({ "shape": "Hellp", "side": 20 }));
