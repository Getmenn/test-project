import '../sass/main.scss'
import logoSvg from '../assets/logo.svg'
import arrowSvg from '../assets/arrow.svg'
import mapJpg from '../assets/map.jpg'

import cardOne from '../assets/business/IMG1.jpg'
import cardTwo from '../assets/business/IMG2.jpg'
import cardThree from '../assets/business/IMG3.jpg'
import cardFour from '../assets/business/IMG4.jpg'
import cardFive from '../assets/business/IMG5.jpg'
import cardSix from '../assets/business/IMG6.jpg'

import benefitsOne from '../assets/compensation/compensation1.svg'
import benefitsTwo from '../assets/compensation/compensation2.svg'
import benefitsThree from '../assets/compensation/compensation3.svg'
import benefitsFour from '../assets/compensation/compensation4.svg'
import benefitsFive from '../assets/compensation/compensation5.svg'
import benefitsSix from '../assets/compensation/compensation6.svg'
import benefitsSeven from '../assets/compensation/compensation7.svg'

import slideOne from '../assets/gallery/Слайд1.jpg'
import slideTwo from '../assets/gallery/Слайд2.jpg'
import slideThree from '../assets/gallery/Слайд3.jpg'
import slideFour from '../assets/gallery/Слайд4.jpg'
import slideFive from '../assets/gallery/Слайд5.jpg'

import arrowSlider from '../assets/arrowSlider.svg'

import arrowMapMob from '../assets/arrowMapMobyle.svg'


const logo = document.querySelector('.logo-img')
logo.src = logoSvg

const arrow = document.querySelector('.map__arrow')
arrow.src = arrowSvg

const map = document.querySelector('.map__picture')
map.src = mapJpg

const card1 = document.querySelector('.card-one')
const card2 = document.querySelector('.card-two')
const card3 = document.querySelector('.card-three')
const card4 = document.querySelector('.card-four')
const card5 = document.querySelector('.card-five')
const card6 = document.querySelector('.card-six')

card1.style.background = 'url(' + cardOne + ') center ';
card2.style.background = 'url(' + cardTwo + ') center';
card3.style.background = 'url(' + cardThree + ') center';
card4.style.background = 'url(' + cardFour + ') center';
card5.style.background = 'url(' + cardFive + ') center';
card6.style.background = 'url(' + cardSix + ') center';


const benefits = document.querySelector('.benefits__compensation')
const benefitsSectorTwo = document.querySelector('.benefits__compensation--two')

const benefits1 = benefits.querySelector('.benefits__image-one')
const benefits2 = benefits.querySelector('.benefits__image-two')
const benefits3 = benefits.querySelector('.benefits__image-three')
const benefits4 = benefits.querySelector('.benefits__image-four')
const benefits5 = benefits.querySelector('.benefits__image-five')

benefits1.src = benefitsOne
benefits2.src = benefitsTwo
benefits3.src = benefitsThree
benefits4.src = benefitsFour
benefits5.src = benefitsFive

const benefitsTwo1 = benefitsSectorTwo.querySelector('.benefits__image-one')
const benefitsTwo6 = benefitsSectorTwo.querySelector('.benefits__image-six')
const benefitsTwo7 = benefitsSectorTwo.querySelector('.benefits__image-seven')

benefitsTwo1.src = benefitsOne
benefitsTwo6.src = benefitsSix
benefitsTwo7.src = benefitsSeven

const sliderImageOne = document.querySelector('.slider__image-one')
const sliderImageTwo = document.querySelector('.slider__image-two')
const sliderImageThree = document.querySelector('.slider__image-three')
const sliderImageFour = document.querySelector('.slider__image-four')
const sliderImageFive = document.querySelector('.slider__image-five')

sliderImageOne.src = slideOne
sliderImageTwo.src = slideTwo
sliderImageThree.src = slideThree
sliderImageFour.src = slideFour
sliderImageFive.src = slideFive

const arrowSl = document.querySelector('.arrow-left')
const arrowReversSl = document.querySelector('.arrow-right')

arrowSl.src = arrowSlider
arrowReversSl.src = arrowSlider

const arrowMapMobyle = document.getElementsByClassName('arrow-map-mobyle')

for (let index = 0; index < arrowMapMobyle.length; index++) {
    const element = arrowMapMobyle[index];
    element.src = arrowMapMob
}

