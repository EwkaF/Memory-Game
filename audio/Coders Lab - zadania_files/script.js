/*zadanie 1*/
var numbers = [23,4,16];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

/*zadanie 2*/
var fruits = ["banan", "kiwi", "gruszka"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
for (var i = fruits.length - 1; i >= 0; i--) {
 console.log(fruits[i])
}

/*zadanie 3*/
var sum = 0;
var tablica = [1,3,5,7,9,2,23,65,12,8];
for (var i = 0; i < tablica.length; i++) {
	sum = sum + tablica[i];
}
console.log(sum);

/*zadanie 4*/
var wynik = 0
for (var i = 0; i< tablica.length; i++) {
	if (tablica[i]%2 === 0){
		wynik = wynik + tablica[i];
	}
}
console.log(wynik)

/*zadanie 5*/
var tablica = [1,3,5,7,9,2,23,65,12,8];
var max = 0;
for (var i = 0; i < tablica.length; i++) {
	if (tablica[i] > tablica[i-1]){
		max = tablica[i]
	}
}
console.log(max)

/*zadanie 6*/
var arrWithNumbers = [9,2,6,9,4,4,3,6,2,4];
firstIndex = 0;
for (var i = 0; i < arrWithNumbers.length; i++){
	/*if (arrWithNumbers[i] === arrWithNumbers){
		firstIndex = arrWithNumbers[i]
		
		break;
	}*/
	for (var j = 0; j< arrWithNumbers.length; j++){
		if (i === j){
			firstIndex = arrWithNumbers[i];

		}
	}
}
console.log(firstIndex);


/*zadanie 10*/

var tablica = [1,3,5,7,9,2,23,65,12,8];
for (var i = tablica.length - 1; i >= 0; i--) {
 tablica[i]
 console.log(tablica)
}
for