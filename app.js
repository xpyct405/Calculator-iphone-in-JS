let userInput =  document.querySelector("#input");
let expression = "";

// Запрет нв ввод с клавиатуры букв и некоторых символов
userInput.addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)

press = (num) => {
    expression += num;
    userInput.value = expression;
    
  }
  
  equal = () => {
    userInput.value = eval(expression);
    expression = "";
    
  }
  
  erase = () => {
    expression = "";
    userInput.value = expression;
  }
 
  