console.log("Hello world");

const myName = "Ala";

const h1 = document.querySelector(".heading-primary");

console.log(h1);

// h1.addEventListener("click", function () {
// 	h1.textContent = myName;

// 	h1.style.backgroundColor = "red";

// 	h1.style.padding = "5rem";
// });

// Set current year

const yearEl = document.querySelector(".year");

const currentYear = new Date().getFullYear();

console.log(currentYear);

yearEl.textContent = currentYear;

// Mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

// Smoth scrolling

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");

		// scroll back to the top
		if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

		// scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEL = document.querySelector(href);
			sectionEL.scrollIntoView({ behavior: "smooth" });
		}

		// close mobile nav
		if (link.classList.contains("main-nav-link")) {
			headerEl.classList.toggle("nav-open");
		}
	});
});

///////////////////////////////////////////////////////////
// Sticky nav

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);

		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky");
		}
		if (ent.isIntersecting === true) {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari ver sions
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
