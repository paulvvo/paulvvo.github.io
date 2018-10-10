var modalContainer = document.getElementsByClassName("modalContainer")[0];
var modalContent = document.getElementsByClassName("modalContent");
var portfolioBox = document.getElementsByClassName("portfolio-box");
var closeModalButton = document.querySelector("#closeModalButton");

var ul = document.getElementsByTagName("ul")[0];
var menu = document.getElementsByClassName("menu")[0];
var li = document.getElementsByTagName("li");


menu.addEventListener("click", function(e){
	e.preventDefault();
	ul.classList.toggle("showNav");
})

for(let i=0; i<modalContent.length; i++){
	portfolioBox[i].addEventListener("click", function(){
		modalContainer.style.display="block";
		modalContent[i].style.display="block";
	})
}

closeModalButton.addEventListener("click", function(){
	modalContainer.style.display="none";
	for(var i=0; i<modalContent.length; i++){
		if(modalContent[i].style.display ==="block"){
			modalContent[i].style.display ="none";
		}
	}
})
window.addEventListener("click", function(e){
	if(e.target === modalContainer){
		modalContainer.style.display="none";
		for(var i=0; i<modalContent.length; i++){
			if(modalContent[i].style.display ==="block"){
				modalContent[i].style.display ="none";
			}
		}
	}
});

$("document").ready(function(){
	var scrollClass = $(".scroll");

	scrollClass.click(function(event){
		event.preventDefault();
		$("body,html").animate({
			scrollTop:$(this.hash).offset().top
		}, 1000)
	});

});
