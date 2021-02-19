function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var phrase = "Result is ";
add(num1, num2, printResult, phrase);
