let current_input='';
let previous_input='';
let current_operation='';
function append(number)
{
    current_input += number;
    document.getElementById('display').value=`${previous_input}${current_operation}${current_input}`;
}
function appent_op(operator)
{
    if(current_input==='')
      return;
    else if(previous_input === '' || current_input === '')
        calculate();
    current_operation=operator;
    previous_input=current_input;
    current_input='';
    document.getElementById('display').value=`${previous_input} ${current_operation}`;
}
function calculate()
{
    if(current_input==='')
        return;
    let result='';
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
            alert("Cannot divide by zero");
            return;
            result=previous/current; }
            break;
        default:
            return;
    }
    current_input=result.toString();
    previous_input='';
    current_operation='';   
    document.getElementById('display').current_input();
}
