
let current_input='';
let previous_input='';
let current_operation='';
let result='';  //for debugging, put all values 0 or something
function append(value)
{
    current_input += value;
    document.getElementById('display1').value=`${previous_input} ${current_operation} ${current_input}`;
}
function append_op(operator)
{ 
    if((operator=='-' || operator=='+') && (current_input==='' && previous_input==='')){  
        current_input+=operator;//to do -3+5=2
        document.getElementById('display1').value=`${previous_input} ${current_operation} ${current_input}`;
        return;
    }
     if(previous_input !== '')
        calculate();
    current_operation=operator;
    previous_input=current_input;
    current_input='';
    document.getElementById('display1').value=`${previous_input} ${current_operation}`;
}
function toRadian(degree) {
    return degree * (Math.PI / 180);
}
function calculate()
{
     /*if(pre==='')
        return;
   else if(operator==='!'){//factorial works but at what cost?
        if(previous_input!==''){
            previous_input=parseInt(previous_input);
            if(isNaN(previous_input) || previous_input<0){
                alert("Error");
                return;
            }
            else{
                let fact=1;
                for(let i=previous_input;i>0;i--){
                    fact*=i; }
            result=fact.toString();
            }
        }
        current_input=result.toString();
        previous_input='';
        current_operation='';  
        document.getElementById('display').value=`${result}`;
    }*/
    
    let previous=parseFloat(previous_input);
    let current=parseFloat(current_input);
    switch(current_operation){
        case '+':
            result=previous+current;
            break;
        case '-':
            result=previous-current;
            break;
        case '*':
            result=previous*current;
            break;
        case '/':
            if (current === 0) {
            alert("Cannot divide by 0!");
            clear(); 
            return;}
            else{
            result=previous/current; }
            break;
        case '%':
            result=previous%current;
            break;
        case 'sin[':
            current_input=toRadian(current_input);
            result=Math.sin(current_input);
            break;
        case 'cos[':
            current_input=toRadian(current_input);
            result=Math.cos(current_input);
            break;
        case 'tan[':
            current_input=toRadian(current_input);
            result=Math.tan(current_input);
            break;
        case 'csc[':
            current_input=toRadian(current_input);
            result=1/Math.sin(current_input);
            break;
        case 'sec[':
            current_input=toRadian(current_input);
            result=1/Math.cos(current_input);
            break;
        case 'cot[':
            current_input=toRadian(current_input);
            result=1/Math.tan(current_input);
            break;
//No, hyperbolic functions like Math.sinh(), Math.cosh(), and Math.tanh() in JavaScript do NOT require degrees or 
//radians — they take their input in raw numeric form, which is already in radians.
        case 'sinh[':
            //current_input=toRadian(current_input); not needed
            result=Math.sinh(current_input);
            break;
        case 'cosh[':
            result=Math.cosh(current_input);
            break;
        case 'tanh[':
            result=Math.tanh(current_input);
            break;
        case 'csech[':
            result=1/Math.sinh(current_input);
            break;
        case 'sech[':
            result=1/Math.cosh(current_input);
            break;
        case 'coth[':
            result=1/Math.tanh(current_input);
            break;
        case 'abs[':
            result=Math.abs(current_input);
            break;
        case 'sqrt[':
            result=Math.sqrt(current_input);
            break;
        case '*10^[':
            result=previous_input*Math.pow(10, current_input);
            break;
        case 'log[':
            result=Math.log10(current_input);
            break;
        case 'ln[':
            result=Math.log(current_input);
            break;
        case 'logx[': //Wait for logxy
            result=Math.log(current_input)/Math.log(previous_input);
            break;  
        case '^2':
            result=Math.pow(previous,2);
            break;
        case '^(-1)':
            result=Math.exp(previous,-1);
        default:
            return;
    }
    current_input=result.toString();
    previous_input='';
    current_operation='';  
    document.getElementById('display2').value=`${result}`;
}
function clearDisplay(){
    //In the browser, clear() is not reserved, but window.clear is actually 
    // already defined in some environments, especially in dev tools or 
    // specific libraries.
    current_input='';
    previous_input='';
    current_operation='';
    result='';
    document.getElementById('display1').value='0';
}
function ans(){
    current_input=result.toString();
    document.getElementById('display1').value=`${previous_input} ${current_operation} ${current_input}`;
}
function backspace(){
    current_input=current_input.slice(0,-1);
    if(current_input===''){
        current_input='0';
        document.getElementById('display1').value=`${previous_input} ${current_operation}`;
    }
    else{
        document.getElementById('display1').value=`${previous_input} ${current_operation} ${current_input}`;
    }
}
 //doesent work below
 // if value is to big, use toExponential(deciamlPlacesUWant)   Returns a number 
 // written in exponential notation. toFixed(deciamlPlacesUWant) Returns a number 
 // written with a number of decimals, 0 gives estimated value.

function leftBracket(){
    if(current_input===''){
        current_input='(';
        document.getElementById('display').value=`${previous_input} ${current_operation} ${current_input}`;
    }
}
function rightBracket(){
    if(current_input===''){
        current_input=')';
        document.getElementById('display').value=`${previous_input} ${current_operation} ${current_input}`;
    }
}