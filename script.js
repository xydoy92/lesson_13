// Dialog Task

let dialog = "Здравствуйте! Как вас зовут?";
let userName = prompt(dialog);
dialog +=`\n${userName}`;
let dialogVar = `Как дела, ${userName}?`;
dialog +=("\n" + dialogVar);
dialogVar = prompt(dialogVar);
dialog +=("\n" + dialogVar);
dialogVar = "Что вы ели на обед?";
dialog +=("\n" + dialogVar);
dialogVar = prompt(dialogVar);
dialog +=("\n" + dialogVar);
dialogVar = "Человеческая еда даже звучит невкусно. Пока";
dialog +=("\n" + dialogVar);
dialogVar = prompt(dialogVar, "Пока");
dialog +=("\n" + dialogVar);
console.log(dialog);

// DividedTwoAndFive Task

let startUserNumber = +prompt("Введите меньшее число");
let finishUserNumber = +prompt("Введите большее число");

while (Number.isNaN(startUserNumber)
|| Number.isNaN(finishUserNumber)
|| startUserNumber >= finishUserNumber) {
	startUserNumber = +prompt("Введите меньшее число ещё раз");
	finishUserNumber = +prompt("Введите большее число ещё раз");
}

// with continue
// for (i = startUserNumber; i <= finishUserNumber; i++) {
// 	if (i % 2 && i % 5) continue;
// 	console.log(i);
// }

//without continue
for (i = startUserNumber; i <= finishUserNumber; i++) {
	if (i % 2 === 0 || i % 5 === 0) {
		console.log(i);
	}
}