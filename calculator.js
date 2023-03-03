function Add(){
    let x=Number(form1.Num1.value);
    let y=Number(form1.Num2.value);
    document.getElementById("result").innerHTML = "Result is: "+ Number(x+y);
    }

function Subtract(){
    let x=Number(form1.Num1.value);
    let y=Number(form1.Num2.value);
    document.getElementById("result").innerHTML = "Result is: "+ Number(x-y);
    }

function Multiply(){
    let x=Number(form1.Num1.value);
    let y=Number(form1.Num2.value);
    document.getElementById("result").innerHTML = "Result is: "+ Number(x*y);
    }

function Divide(){
    let x=Number(form1.Num1.value);
    let y=Number(form1.Num2.value);
    document.getElementById("result").innerHTML = "Result is: "+ Number(x/y);
    }

function Reset(){
    document.getElementById("form1").reset();
    document.getElementById("result").innerHTML = "";
}
