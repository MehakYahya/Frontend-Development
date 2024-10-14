let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'AC') {
      string = "";
      memory = 0;
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'M+') {
      memory += parseFloat(string);
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == '←') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'MC') {
      memory = 0;
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'x') {
      string += '*';
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == '÷') {
      string += '/';
      document.querySelector('input').value = string;
    } else {
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
