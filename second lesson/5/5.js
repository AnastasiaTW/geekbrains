function calc(a,b,operand) {
	a = +prompt("Введите a");
	b = +prompt("Введите b");
	operand = +prompt("Введите операцию (+, -, /, *)");

	switch(operand) {
		case "-":
			return a - b;
			break;
		case "+":
			return a+b;
			break;
		case "/":
			return a/b;
			break;
		case "*":
			return a*b;
			break;
	}
}
console.log(calc())
