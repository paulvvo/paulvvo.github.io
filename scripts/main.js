var modalContainer = document.getElementsByClassName("modalContainer")[0];
var modalContent = document.getElementsByClassName("modalContent");
var portfolioBox = document.getElementsByClassName("portfolio-box");

// console.log(modalContent[0].textContent);
// console.log(modalContent[1].textContent);

for(let i=0; i<modalContent.length; i++){
	portfolioBox[i].addEventListener("click", function(){
		modalContainer.style.display="block";

		modalContent[i].style.display="block";
		console.log(modalContent[i].textContent);
		console.log(i);
	})
}


window.addEventListener("click", function(e){
	if(e.target === modalContainer){
		modalContainer.style.display="none";
		for(var i=0; i<modalContent.length; i++){
			if(modalContent[i].style.display ==="block"){
				modalContent[i].style.display ==="none";
			}
		}
	}
})
