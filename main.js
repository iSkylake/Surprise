let passContainer = document.getElementsByClassName('password-container')[0];
let passForm = document.getElementsByClassName('password-form')[0];
let passInput = document.getElementsByClassName('password-input')[0];
let passSubmit = document.getElementsByClassName('password-submit')[0];
let secretContainer = document.getElementsByClassName('secret-container');
let previousBtn = document.getElementsByClassName('previous-btn')[0];
let nextBtn = document.getElementsByClassName('next-btn')[0];

let password = '123456';

passSubmit.addEventListener('click', function(){
	if(passInput.value.toLowerCase() !== password){
		passForm.classList.remove('shake');
		window.requestAnimationFrame(function() {
			passForm.classList.add('shake');
		});
		passInput.value = "";
	} else {
		passForm.style.transform = "scale(0)";
		passContainer.style.opacity = 0;
		secretContainer[0].style.opacity = 1;
		nextBtn.style.opacity = 1;
		// previousBtn.style.opacity = 1;
	}
});

// let currentSecret = secretContainer[0];

// function slideShow(){
// 	if(i === 2) {
// 		nextBtn.style.display = "none";
// 	} else {
// 		nextBtn.style.display = "block";
// 	}

// 	if(i === 0) {
// 		previousBtn.style.display = "none";
// 	} else {
// 		previousBtn.style.display = "block";
// 	}

// 	if(i === secretContainer.length){
// 		i = secretContainer.length - 1;
// 	} else if(i < 0) {
// 		i = 0;
// 	} else {
// 		currentSecret.style.opacity = 0;
// 		currentSecret = secretContainer[i];
// 		currentSecret.style.opacity = 1;
// 	}
// }

// let i = 0;

// nextBtn.addEventListener('click', function(){
// 	i += 1;
// 	slideShow();
// });

// previousBtn.addEventListener('click', function(){
// 	i -= 1;
// 	slideShow();
// });