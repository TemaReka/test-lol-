var btn1 = document.getElementById("btn1");
var myList = document.getElementById("list");
var btn2 = document.getElementById("btn2");
var item = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup") [0];
var closePopup = document.getElementsByClassName("close")[0];


console.log(btn1);
console.log(myList);
console.log(item);
console.log(popup);
console.log(closePopup);

function addGoal() {
	var newLi = document.createElement('li');
	newLi.className = "item";
	newLi.innerHTML = 'Новая задача';
	myList.appendChild(newLi)
	popup.style.display = "none";
}

function removeGoal() {
	myList.removeChild(item[0]);

	if(item.length == 0) {
		popup.style.display = "block";
	}
}


function closePop() {
	popup.style.display = "none";
}


btn1.addEventListener("click", addGoal);
btn2.addEventListener("click", removeGoal);
closePopup.addEventListener("click", closePop);
//первый блок кода закончен
//начало второго



var age = confirm('Есть 18?');
var name = prompt('Как зовут??');
var subscribed = confirm('Подписан на рассылку??');


function isAdult() {
	if (age && subscribed) {
		alert('Велком');
		console.log(name + ' ' +age);
	} else {
		alert('Слышь, тебе сюда нельзя');
	}
}
isAdult();