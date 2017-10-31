document.addEventListener("DOMContentLoaded", function () {

	/***************************DROP-DOWN MENU (PAGE-HEADER SECTION)*********************************/

	const menu = document.querySelector(".menu-items > li:first-of-type");
	const subMenu = document.querySelector(".menu-items > li:first-of-type > ul");
	const menuLiA = document.querySelector(".menu-items > li > a");

	menu.addEventListener('mouseover', function () {
		subMenu.classList.add("show")
		menuLiA.style.color = "#24BAA0";
	});

	menu.addEventListener('mouseout', function () {
		subMenu.classList.remove("show")
		menuLiA.style.color = "#fff";
	});



	/***************************HIDE TEXT ON PHOTOS (PAGE-GALLERY SECTION)**************************/
	/*
	const img = document.querySelector(".page-gallery .box");
	const img2 = document.querySelector(".page-gallery .box:nth-of-type(2)");
	const imgSpan = document.querySelector(".box div");

	img.addEventListener("mouseover", function () {
		img.firstElementChild.classList.add('hide');
	});

	img.addEventListener("mouseout", function () {
		img.firstElementChild.classList.remove('hide');

	});

	img2.addEventListener("mouseover", function () {
		img2.firstElementChild.classList.add('hide');
	});

	img2.addEventListener("mouseout", function () {
		img2.firstElementChild.classList.remove('hide');
	});*/



	/********************************************* SLIDER ******************************************/

	// variabels
	var imageCount = 1;
	var total = 3; //number of photos
	var arrowLeft = document.getElementById("left");
	var arrowRight = document.getElementById("right");
	var timer = 2500;


	// main function 
	function slide(x) {
		var image = document.getElementById("img");
		imageCount = imageCount + x;
		if (imageCount > total) {
			imageCount = 1;
		} else if (imageCount < 1) {
			imageCount = total;
		}
		image.src = "img/img" + imageCount + ".png";
	}

	// left arrow click
	arrowLeft.addEventListener("click", function () {
		slide(-1);
		clearInterval(temp);
		startInterval();
	});

	// right arrow click
	arrowRight.addEventListener("click", function () {
		slide(1);
		clearInterval(temp);
		startInterval();
	});

	//setInterval
	function startInterval() {
		temp = setInterval(function slide() {
			var image = document.getElementById("img");
			imageCount++;
			if (imageCount > total) {
				imageCount = 1;
			} else if (imageCount < 1) {
				imageCount = total;
			}
			image.src = "img/img" + imageCount + ".png";
		}, timer);
	}
	startInterval();


});
