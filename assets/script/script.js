let currentShape = " ";

function triangleHandler(){
    currentShape = "triangle"
}
function circleHandler(){
    currentShape = "circle"
}
function squareHandler(){
    currentShape = "square" 
}

function calculateArea(){
    let side = document.getElementsByClassName('squareInput')[0].value;
    let radius = document.getElementsByClassName('circleInput')[0].value;
    let length = document.getElementsByClassName('triangleInput')[0].value;
    let breadth = document.getElementsByClassName('triangleInput')[1].value;

    if(currentShape === "square"){
        let result = side * side;
        document.getElementsByClassName('squareInput')[1].value = result;
        console.log(result);
    }
    if(currentShape === "circle"){
        let pi = 3.14;
        let result = pi * (radius * radius);
        document.getElementsByClassName('circleInput')[1].value = result;
        console.log(result);
    }
    if(currentShape === "triangle"){
        let result = 0.5 *(length * breadth);
        document.getElementsByClassName('triangleInput')[2].value = result;
        console.log(result);
    }
}