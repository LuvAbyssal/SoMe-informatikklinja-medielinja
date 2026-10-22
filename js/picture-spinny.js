const carousel = document.querySelector(".carousel");
const slides = [...carousel.querySelectorAll(".carousel__slides img")];
const dotsContainer = document.querySelector(".carousel__dots");
let activeSlide = 0;

function showSlide(index) {
	activeSlide = (index + slides.length) % slides.length;
	slides.forEach((slide, slideIndex) => {
		slide.hidden = slideIndex !== activeSlide;
		slide.setAttribute("aria-hidden", String(slideIndex !== activeSlide));
	});
	[...dotsContainer.children].forEach((dot, dotIndex) => {
		dot.setAttribute("aria-current", String(dotIndex === activeSlide));
	});
}

slides.forEach((slide, index) => {
	slide.classList.add("carousel__image");
	slide.hidden = index !== 0;
	const dot = document.createElement("button");
	dot.type = "button";
	dot.className = "carousel__dot";
	dot.setAttribute("aria-label", `Vis bilde ${index + 1}`);
	dot.addEventListener("click", () => showSlide(index));
	dotsContainer.append(dot);
});

document.querySelectorAll(".carousel__arrow").forEach((button) => {
	button.disabled = slides.length < 2;
	button.addEventListener("click", () => showSlide(activeSlide + Number(button.dataset.direction)));
});

if (slides.length) {
	showSlide(0);
	carousel.classList.add("carousel--has-images");
}