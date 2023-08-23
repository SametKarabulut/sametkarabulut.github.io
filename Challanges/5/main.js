const apiUrl = "https://raw.githubusercontent.com/cuneydbolukoglu/challenge/main/challenge-carousel.json";
const slides = document.querySelector('.slide');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

axios.get(`${apiUrl}`).then(
    response =>{
        const respdata = response.data;
        respdata.map(item=>{
            const img = document.createElement('img');
             img.src = item.imgUrl;
            slides.appendChild(img);
            const slidesimg = document.querySelector('img');
            /*slidesimg.setAttribute("class","closedslider");*/
            /*slidesimg.forEach(slide => slide.style.display = 'none');*/
        })
    }, 
    error => {
        console.log('Error : ' , error);
    }
);


function updateIndicators(index){
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active')
}

const slidesimgs = document.querySelector('.slide img');

function showSlide(index) {
    slidesimgs.forEach(slide => slide.style.display = 'none');
    slidesimgs[index].style.display = 'block';
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slidesimgs.length - 1;

  }
  showSlide(currentSlide);
  updateIndicators(currentSlide);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slidesimgs.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  updateIndicators(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);


