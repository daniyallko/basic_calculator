var temp=0;
var result=0;
var opt1="";

function inp(val)
{
    temp += val;
    document.getElementById("op").value = temp;
}

function calc(opt){
    
    if(opt1=="")
    { 
        result = temp;
        temp = 0;
        document.getElementById("op").value="";
    }
    else{
        if(opt1== "+")
        {
            result = parseFloat(temp)+parseFloat(result);
            document.getElementById("op").value=result;
        }
        if(opt1== "-")
        {
            result = parseFloat(result)-parseFloat(temp);
            document.getElementById("op").value=result;
        }
        if(opt1== "*")
        {
            result = parseFloat(result)*parseFloat(temp);
            document.getElementById("op").value=result;
        }
        if(opt1== "/")
        {   
            result = parseFloat(result)/parseFloat(temp);
            document.getElementById("op").value=result;
        }
        if(opt1== "=")
        {
            document.getElementById("op").value=result;
        }
    }
        opt1=opt;   
        temp="0"; 
}
function clr(){

    opt1="";
    result = 0;
    temp = 0;
    document.getElementById("op").value=result;
}