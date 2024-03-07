const projects = {
    'hotelfinder': {
        slides: [
            'img/hotelfinder/int1.PNG',
            'img/hotelfinder/int2.PNG',
            'img/hotelfinder/int3.PNG',
            'img/hotelfinder/int4.PNG',
            'img/hotelfinder/int5.PNG',
            'img/hotelfinder/int6.PNG',
            'img/hotelfinder/int7.PNG',
            'img/hotelfinder/int9.PNG',
            // Add more image paths for Hotel Finder as needed
        ],
    },
    'eherfa': {
        slides: [
            'img/eherfa/img.png',
            'img/eherfa/eherfa2.png',
            'img/eherfa/eherfa3.png',
            'img/eherfa/eherfa4.png',
            'img/eherfa/eherfa5.png',        
            'img/eherfa/eherfa10.png',
            'img/eherfa/eherfa8.png',
            'img/eherfa/eherfa11.png',
            'img/eherfa/eherfa9.png',
            'img/eherfa/eherfa13.png',
            'img/eherfa/eherfa6.png',
            'img/eherfa/eherfa12.png',           
            'img/eherfa/eherfa14.png',
            // Add more image paths for Another Project as needed
        ],
    },
    'chattie': {
        slides: [
            'img/chat/chat2.png',
            'img/chat/chat1.png',
            'img/chat/chat3.png',
        ]
    },
    'dental': {
        slides: [
            'img/dental/dental.png',
            'img/dental/dental1.png',
            'img/dental/dental3.png',
            'img/dental/dental4.png',
            'img/dental/dental5.png',
            'img/dental/dental6.png',
        ]
    },
    'ensah':{
        slides: [
            'img/ensah/ensah1.png',
        ]
    },
    'toshine':{
        slides: [
            'img/toshine/toshine1.png',
            'img/toshine/toshine2.png',
            'img/toshine/toshine3.png',
            'img/toshine/toshine4.png',
            'img/toshine/toshine5.png',
            'img/toshine/toshine6.png',
            'img/toshine/toshine7.png',
            'img/toshine/toshine8.png',
            'img/toshine/toshine9.png',
            'img/toshine/toshine10.png',
        ]
    },
    'c': {
        slides: [
            'img/c/c1.png',
            'img/c/c2.png',
            'img/c/c3.png',
            'img/c/c4.png',
            'img/c/c5.png',
            'img/c/c6.png',
            'img/c/c7.png',
            'img/c/c8.png',
            'img/c/c9.png',

        ]
    },
    'py': {
        slides: [
            'img/search/py1.png',
            'img/search/py2.png',
            'img/search/py3.png',
            'img/search/py4.png',
            'img/search/py5.png',
        ]
    }
    // Add more projects as needed
};

let currentProject = null;
let currentSlide = 0;

const sliderImage = document.getElementById('sliderImage');
const sliderContainer = document.getElementById('slider');

function showSlide(index) {
    if (index < 0) {
        currentSlide = currentProject.slides.length - 1;
    } else if (index >= currentProject.slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    sliderImage.src = currentProject.slides[currentSlide];
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function openSlider(projectKey) {
    currentProject = projects[projectKey];
    if (currentProject) {
        sliderContainer.style.display = 'block';
        showSlide(currentSlide);
        document.getElementById('overlay').style.display = 'block';
    }
}

function closeSlider() {
    sliderContainer.style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Initial display
showSlide(currentSlide);
