function areaSquare(n){
    return n * n;
}

function areaRect(l,b){ 
    return l * b;
}

function circle(r){
    return 2 * 3.14 * r;
}

module.exports = {
    areaSquare: areaSquare,
    areaRect: areaRect,
    circle: circle
}