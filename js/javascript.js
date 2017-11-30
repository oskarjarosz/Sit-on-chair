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





	/* Calculator */
	var dropdownLists = [...document.querySelectorAll('.drop_down_list')];
	var listPanel = [...document.querySelectorAll('.list_panel')];
	var listPanelLi = [...document.querySelectorAll('.list_panel > li')];
	var listLabel = [...document.querySelectorAll('.list_label')];

	var transportCheckbox = document.querySelector('.checkbox label');
	var transportInput = document.querySelector('.checkbox input');

	/*Summary Panel Values*/
	var chairTitle = document.querySelector('.panel_left .title');
	var chairColor = document.querySelector('.panel_left .color');
	var chairPattern = document.querySelector('.panel_left .pattern');
	var chairTransport = document.querySelector('.panel_left .transport');
	var chairTitleValue = document.querySelector('.panel_right .title.value');
	var chairColorValue = document.querySelector('.panel_right .color.value');
	var chairPatternValue = document.querySelector('.panel_right .pattern.value');
	var chairTransportValue = document.querySelector('.panel_right .transport.value');
	var sumCounter = 0;
	var sumContainer = document.querySelector('.sum');



	dropdownLists.forEach(function (el) {
		el.addEventListener('click', function (event) {
			if (this.lastElementChild) {
				this.lastElementChild.classList.toggle("block");
			}
		});
	});


	listPanelLi.forEach(function (el) {
		function calc(itemTitle, itemValue) {
			itemTitle.innerText = el.innerText;
			itemValue.innerText = el.dataset.price + "zł";
			//sumCounter = 0;
			sumCounter += parseInt(el.dataset.price);
			sumContainer.innerText = sumCounter + "zł";

		};
		el.addEventListener('click', function (event) {
			var label = this.parentElement.parentElement.firstElementChild;
			label.innerText = el.innerText;
			label.style.color = "black";
			if (this.parentElement.parentElement === dropdownLists[0]) {
				calc(chairTitle, chairTitleValue);
			} else if (this.parentElement.parentElement === dropdownLists[1]) {
				calc(chairColor, chairColorValue);
			} else if (this.parentElement.parentElement === dropdownLists[2]) {
				calc(chairPattern, chairPatternValue);
			}
		});
	});

	transportCheckbox.addEventListener('click', function (event) {
		if (chairTransport.innerText && chairTransportValue.innerText) {
			chairTransport.innerText = "";
			chairTransportValue.innerText = "";
			sumCounter -= parseInt(transportInput.dataset.transportPrice);
		} else {
			chairTransport.innerText = "Transport";
			chairTransportValue.innerText = transportInput.dataset.transportPrice + "zł";
			sumCounter += parseInt(transportInput.dataset.transportPrice);

		}
		sumContainer.innerText = sumCounter + "zł";
	});



	/* jQuery */

	//smooth scroll
	$('.slide-section').click(function (e) {
		var linkHref = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top + 15
		}, 500);
		e.preventDefault();
	});

});
