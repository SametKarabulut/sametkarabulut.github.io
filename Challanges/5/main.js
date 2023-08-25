const apiUrl = "https://raw.githubusercontent.com/cuneydbolukoglu/challenge/main/challenge-carousel.json";
const slides = document.querySelector('.slide');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

axios.get(apiUrl).then(
  response => {
    const respdata = response.data;
    respdata.forEach(item => {
      const img = document.createElement('img');
      img.src = item.imgUrl;
      slides.appendChild(img);
    });

    const slideImages = document.querySelectorAll('.slide img');

    function showSlide(index) {
      slideImages.forEach((image, idx) => {
        if (idx === index) {
          image.style.display = 'block';
          indicators[idx].classList.add('active');
        } else {
          image.style.display = 'none';
          indicators[idx].classList.remove('active');
        }
      });
      currentSlide = index;
    }

    prevButton.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
      showSlide(currentSlide);
    });

    nextButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slideImages.length;
      showSlide(currentSlide);
    });


    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        showSlide(index);
      });
    });

    showSlide(0);
  },
  error => {
    console.log('Error:', error);
  }
);
