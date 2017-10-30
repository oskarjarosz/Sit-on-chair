document.addEventListener("DOMContentLoaded", function () {

	//drop-down menu in page-header section
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


	//hide text on photos in page-gallery section
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



});
