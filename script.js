
let Menu = document.getElementById("type");
let color;

function showDiv(){
    let gradientType = document.getElementById("gradient").value;

    if(gradientType === "linear-gradient"){
        document.getElementById(gradientType).style.display = "block";
        document.getElementById("radial-gradient").style.display = "none";
        document.getElementById("conic-gradient").style.display = "none";
    }

    else if(gradientType === "radial-gradient"){
        document.getElementById(gradientType).style.display = "block";
        document.getElementById("linear-gradient").style.display = "none";
        document.getElementById("conic-gradient").style.display = "none";
    }

    else if(gradientType === "conic-gradient"){
        document.getElementById(gradientType).style.display = "block";
        document.getElementById("radial-gradient").style.display = "none";
        document.getElementById("linear-gradient").style.display = "none";
    }
    else{
        document.getElementById("linear-gradient").style.display = "none";
        document.getElementById("radial-gradient").style.display = "none";
        document.getElementById("conic-gradient").style.display = "none";
    }
}

let typecolor = document.getElementById("intype")

typecolor.addEventListener("change", updateColorInfo);

function updateColorInfo(ev){
    let x = document.getElementById("color_output");
    x.innerHTML = ev.target.value;
}

function copyToClipboard(){
    let copy = document.getElementById("output");

    copy.select();
    copy.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copy.value);
}
let colors = [];
let generator = document.getElementById("generator");
function addColor(){
    let color = document.getElementById("intype").value;
    colors.push(" "+color);
    generator.value = colors.toString();
}

function deleteColor(){
    colors.pop();
    generator.value = colors.toString();
}

function applyGradient(){
    let finalColor = colors.toString();
    let gradient = document.getElementById("gradient").value;
    let clipboardValue = document.getElementById("output");
    let opdisplay = document.getElementById("opdisplay");
    if(gradient === "linear-gradient"){
        let direction = document.getElementById("direction").value;
        opdisplay .style.background = gradient+"("+direction+","+finalColor+")";
        clipboardValue.value = "background-image: "+gradient+"("+direction+","+finalColor+");"
    }

    if(gradient === "radial-gradient"){
        let shape = document.getElementById("shape").value;
        opdisplay .style.background = gradient+"("+shape+","+finalColor+")";
        clipboardValue.value = "background-image: "+gradient+"("+shape+","+finalColor+");"
    }

    if(gradient === "conic-gradient"){
        let from_angle = "from "+document.getElementById("from-angle").value+"deg";
        let at_position = "at "+document.getElementById("x-position").value+"% "+document.getElementById("y-position").value+"%"; 
        opdisplay .style.background = gradient+"("+from_angle+" "+at_position+","+finalColor+")";
        clipboardValue.value = "background-image: "+gradient+"("+from_angle+" "+at_position+","+finalColor+");";
    }

    hide();
}