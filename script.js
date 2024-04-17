var Inpt = document.getElementById("Inpt"),
	Ans = document.getElementById("Ans"),
	Check = document.getElementById("Check"),
	Gen = document.getElementById("Gen"),
	InfoPar = document.getElementById("Info"),
	Cnt = 0,
	Value = 0,
	Shuffle = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generate() {
	"use strict";
	for (Cnt = 0; Cnt <= 4; Cnt += 1) {
		Value = Math.floor(Math.random() * Shuffle.length);
		Inpt.value += Shuffle[Value];
	}
}

window.onload = generate;

Gen.onclick = function() {
	"use strict";
	Inpt.value = "";
	generate();
	Ans.value = "";
};

Check.onclick = function() {
	"use strict";
	if (Ans.value === "") {
		InfoPar.textContent = "Enter The Code First!";
		InfoPar.style.color = "#ab5755";
	} else if (Ans.value !== Inpt.value) {
		InfoPar.innerHTML = "Wrong Code! Try Again...";
		InfoPar.style.color = "#ab5755";
		Ans.value = "";
		Inpt.value = "";
		generate();
	} else if (Ans.value === Inpt.value) {
		InfoPar.textContent = "Good job! Correct Code!";
		InfoPar.style.color = "green";
	}
};