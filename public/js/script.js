function addTwoNumbers(input1, input2){
    var x=document.getElementById(input1).value;
    var y=document.getElementById(input2).value;
    var sum=0;
    sum=Number(x)+Number(y);
    document.getElementById("printSum").style.fontWeight = 'bold';
    document.getElementById("printSum").innerHTML = "SUM is : " + sum;
}

function displayImg(image) {
    var imageholder = document.getElementById("imageHolder");
    imageholder.src = image;
}