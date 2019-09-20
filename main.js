document.getElementById("calculate_area").addEventListener("click", calculateArea);


//Calculate the area of the trapezoid
function calculateArea() {

    //Get the values of the numbers
    let topBase = Number(document.getElementById("top_base").value);
    let bottomBase = Number(document.getElementById("bottom_base").value);
    let trapezoidHeight = Number(document.getElementById("height").value);

    //Calculate the area
    let trapezoidArea = 1/2* (topBase + bottomBase) * trapezoidHeight;
    trapezoidArea = trapezoidArea * 100;
    trapezoidArea = Math.round(trapezoidArea);
    trapezoidArea = trapezoidArea / 100;

    //Display area
    document.getElementById("trapezoid_area").innerHTML = trapezoidArea;
}