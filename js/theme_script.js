$(document).ready(function () {


	/*=====================================
		Sticky
	======================================= */
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;

		if (window.scrollY > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}
	};




	/*======================================
		Gsap RegisterPlugin
	========================================*/
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

	/*======================================
		Config GSAP
	========================================*/
	// gsap.config({
	// 	nullTargetWarn: false,
	// });



	/*======================================
		  Smooth Scroll
	========================================*/
	if ($('#smooth-wrapper').length > 0) {
		let smoother = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			ignoreMobileResize: true,
			//preventDefault: true,
			smooth: 1,
			ease: "Power3.easeOut",
			effects: true,
			onUpdate: (self) => {
				progress = self.progress;
			}
		})
	}

	/*======================================
		Hero Title Anim
	========================================*/
	let title_anim_reveal = document.querySelectorAll(".hero-heading");

	title_anim_reveal.forEach((title_reveal) => {
		let image = title_reveal.querySelector("h1");
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: title_reveal,
				start: "top 50%",
			}
		});

		tl.set(title_reveal, { autoAlpha: 1 });
		tl.from(title_reveal, 1.5, {
			xPercent: -100,
			ease: Power2.out
		});
		tl.from(image, 1.5, {
			xPercent: 100,
			scale: 1.3,
			delay: -1.5,
			ease: Power2.out
		});
	});

	let media_list;

	if (window.innerWidth > 767) { // Adjust the screen width breakpoint as needed
		media_list = gsap.timeline({
			scrollTrigger: {
				trigger: ".hero-title",
				start: "top 170",
				end: "bottom 70%",
				scrub: false,
				// markers: true,
				pin: false,
				toggleActions: "play none reverse none",
			}
		});

		media_list.from(".cards-item", { y: 50, stagger: 0.07, opacity: 0, delay: 1 });
	}

	/*======================================
		Swiper Card slider
	========================================*/
	const swiper = new Swiper('.card-slider', {
		direction: "horizontal",
		loop: true,
		loopedSlides: 8,
		freeMode: false,
		slidesPerView: 1,
		centeredSlides: false,
		spaceBetween: 10,
		speed: 8000,
		simulateTouch: false,


		autoplay: {
			delay: 1,
			disableOnInteraction: true,

		},
		breakpoints: {
			400: {
				slidesPerView: 2,
			},
			568: {
				slidesPerView: 3,
			}
		}
	});



	/*======================================
		About Img Anim
	========================================*/
	let about_meta = gsap.timeline({
		scrollTrigger: {
			trigger: ".about-meta-section",
			start: "top 60%",
			end: "bottom 45%",
			id: "about_meta",
			toggleActions: "play none resume reset",
		},
	});

	about_meta.from(".img", { y: 100, stagger: 0.5, opacity: 0 });





	var stopCircle = document.getElementsByClassName('anima');
	for (var i = 0; i < stopCircle.length; i++) {
		if (stopCircle[i].matches(':hover')) { }
		stopCircle[i].addEventListener("mouseover", function (event) {
			document.getElementsByClassName('circle-arround-two-1')[0].classList.add("stopanima");
			document.getElementsByClassName('circle-arround-two-2')[0].classList.add("stopanima");
			document.getElementsByClassName('circle-arround-two-3')[0].classList.add("stopanima");
			document.getElementsByClassName('circle-arround-two-4')[0].classList.add("stopanima");
		});
		stopCircle[i].addEventListener("mouseout", function (event) {
			document.getElementsByClassName('circle-arround-two-1')[0].classList.remove("stopanima");
			document.getElementsByClassName('circle-arround-two-2')[0].classList.remove("stopanima");
			document.getElementsByClassName('circle-arround-two-3')[0].classList.remove("stopanima");
			document.getElementsByClassName('circle-arround-two-4')[0].classList.remove("stopanima");
		});
	}





	//===== mobile-menu-btn
	let navbarToggler = document.querySelector(".mobile-menu-btn");
	navbarToggler.addEventListener('click', function () {
		navbarToggler.classList.toggle("active");
	});



});







