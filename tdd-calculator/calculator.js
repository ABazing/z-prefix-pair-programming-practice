class Calculator {
  constructor() {
    this.currentState = 0;
  }

  getCurrentState(){
    return this.currentState;
  }

  addInputs(...num){
    var result = 0;
    for(var i = 0; i < num.length; i++){
        result = result + num[i];
    }
    return result;
  }

  multiplyInputs(...num){
    var result = 1;
    for(var i = 0; i < num.length; i++){
        result = result * num[i];
    }
    return result;
  }

  divideInputs(...num){
    var result = num[0];
    for(var i = 1; i < num.length; i++){
      result /= num[i];
    }
    return result;
  }

  subtractInputs(...num){
    var result = num[0];
    for(var i = 1; i < num.length; i++){
      result -= num[i];
    }
    return result;
  }

  toPower(...num){
    return Math.pow(num[0], num[1]);
  }

  squareRoot(...num){
      const result = Math.sqrt(num[0], num[1]);
      return result.toFixed(2);
  }
}

module.exports = Calculator