module.exports = function toReadable (num) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    checkValidation(num);

    if (num < 100) {
        return convertNumber(num);
    } else {
        if (num % 100 == 0) {
            return arr[num / 100] + ' ' + 'hundred';
        } else if (num % 100 != 0) {
            let endNum = parseInt(num.toString().substring(1));
            return arr[Math.floor(num / 100)] + ' ' + 'hundred' + ' ' + convertNumber(endNum);
        }
    }

    function convertNumber(num1) {
        return num1 < 20 ? arr[num1] :
        num1 % 10 == 0 ? arr2[(num1 / 10) - 2] :
        num1 % 10 != 0 ? arr2[Math.floor(num1 / 10) - 2] + ' ' + arr[num1 % 10] : alert('Введите корректное число');
    }

    function checkValidation(num2) {
        if((isNaN(num2)) || (num2 < 0) || (num2 > 999) || (parseInt(num2) != num2)) {
            return alert('Введите корректное число');
        } 
            return num2;
    }
    }
