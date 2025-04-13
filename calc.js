
let current_input='';
let previous_input='';
let current_operation='';
let result='';
function append(value)
{
    current_input += value;
    document.getElementById('display').value=`${previous_input} ${current_operation} ${current_input}`;
}
function append_op(operator)
{
    if((operator=='-' || operator=='+')){
        current_input+=operator;//to do -3+5=2
        document.getElementById('display').value=`${previous_input} ${current_operation} ${current_input}`;
        return;
    }
    else if(previous_input !== '' && current_input !== '')
        calculate();
    current_operation=operator;
    previous_input=current_input;
    current_input='';
    document.getElementById('display').value=`${previous_input} ${current_operation}`;
}
function toRadian(degree) {
    return degree * (Math.PI / 180);
}
function calculate()
{
    if(current_input==='')
        return;
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
            result=Math.pow(10, current_input);
            break;
        default:
            return;
    }
    current_input=result.toString();
    previous_input='';
    current_operation='';  
    document.getElementById('display').value=`${result}`;
}
function clearDisplay(){
    //In the browser, clear() is not reserved, but window.clear is actually 
    // already defined in some environments, especially in dev tools or 
    // specific libraries.
    current_input='';
    previous_input='';
    current_operation='';
    result='';
    document.getElementById('display').value='0';
}
function ans(){
    current_input=result.toString();
    document.getElementById('display').value=`${previous_input} ${current_operation} ${current_input}`;
}
function backspace(){
    current_input=current_input.slice(0,-1);
    if(current_input===''){
        current_input='0';
        document.getElementById('display').value=`${previous_input} ${current_operation}`;
    }
    else{
        document.getElementById('display').value=`${previous_input} ${current_operation} ${current_input}`;
    }
}
 //doesent work below
 // if value is to big, use toExponential(deciamlPlacesUWant)   Returns a number 
 // written in exponential notation. toFixed(deciamlPlacesUWant) Returns a number 
 // written with a number of decimals, 0 gives estimated value.
function tenRaise(){
    if(current_input===''){
        current_input= Math.pow(10, x);
        document.getElementById('display').value=`${previous_input} ${current_operation} ${current_input}`;

        document.getElementById('display').value=`${previous_input} ${current_operation}`;
    }
}
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
function absolute(){
if(current_input===''){
    document.getElementById('display').value="abs(";
   // current_input='abs(';
    append(num);
    current_input=Math.abs(num);
    document.getElementById('display').value=`${current_input}`;
}
}
function trignometric(operator){
    switch(operator){
        case 'sin':
            current_input=Math.sin(current_input);
            break;
        case 'cos':
            current_input=Math.cos(current_input);
            break;
        case 'tan':
            current_input=Math.tan(current_input);
            break;
        case 'csc':
            current_input=1/Math.sin(current_input);
            break;
        case 'sec':
            current_input=1/Math.cos(current_input);
            break;
        case 'cot':
            current_input=1/Math.tan(current_input);
            break;
        default:
            return;
    }
    document.getElementById('display').value=`${current_input}`;
    current_input='';
}