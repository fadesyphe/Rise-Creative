const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
	anchor.addEventListener('click', (e) => {
		e.preventDefault();
		const blockID = anchor.getAttribute('href');

		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}





const testimonialCarousel = document.querySelector('.testimonial_slider_carousel');
const testimonialItems = Array.from(document.querySelectorAll('.testimonial_info'));
const dots = Array.from(document.querySelectorAll('.dot'));
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', (e) => {
		let dotActive = document.querySelector('.dot.active');
		let testimonialItemActive = document.querySelector('.testimonial_info--active');

		if (dotActive === dots[i]) {
			return
		}

		let testimonialOffset = 605 * (-i); //???? fix logic offset
		testimonialCarousel.style.transition = '0.5s ease';
		testimonialCarousel.style.left = `${testimonialOffset}px`;
		
		dotActive.classList.remove('active');
		dots[i].classList.add('active');

		testimonialItemActive.classList.remove('testimonial_info--active');
		testimonialItems[i].classList.add('testimonial_info--active');
	})
}
