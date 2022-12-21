module.exports = function toReadable (number) {
    const number1 = number.toString()[number.toString().length - 1];
    const number2 = number.toString()[number.toString().length - 2];
    const number3 = number.toString()[number.toString().length - 3];
    console.log(number3)
    const numbers = [
        'zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen', 'twenty'];
    const numbers30 = [
      'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ]
    if(number3) {
      if (numbers[`${number2}${number1}`]) return `${numbers[number3]} hundred ${numbers[`${number2}${number1}`]}`;
      if(number2 == 0 && number1 == 0) return `${numbers[number3]} hundred`;
      if(number2 && number1 == 0) return `${numbers[number3]} hundred ${numbers30[number2]}`;
      if(number2 == 0 && number1) return `${numbers[number3]} hundred ${numbers[number1]}`;
      if(number2 && number1) return `${numbers[number3]} hundred ${numbers30[number2]} ${numbers[number1]}`;
      console.log(number1)
      return `${numbers[number3]} hundred`;
    }
    if (numbers[`${number2}${number1}`]) return numbers[`${number2}${number1}`];
    if(number2 && number1 == 0) return numbers30[number2];
    if(number2 && number1) return `${numbers30[number2]} ${numbers[number1]}`;
    
    return numbers[number1];
  }
