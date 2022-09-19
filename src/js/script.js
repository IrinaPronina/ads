// /* global document console */

// import ready from 'Utils/documentReady.js';
// import getScrollSize from 'Utils/getScrollSize.js';

// ready(function() {
//   console.log('DOM героически построен!');
//   // Добавление кастомного свойства с системной шириной скролла
//   document.documentElement.style.setProperty('--css-scroll-size', `${getScrollSize()}px`);
// });

import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
} from 'swiper';

import Choices from 'choices.js';
import {
  Fancybox
} from "@fancyapps/ui";
import getScrollSize from 'Utils/getScrollSize.js';


Swiper.use([Navigation, Pagination, EffectFade]);

'use strict';

window.addEventListener("load", () => {

  const mobile = window.matchMedia('(max-width:1200px)');

  /*-- Top Slider --*/

  const topSlider = document.querySelector(".top-slider.swiper");

  if (topSlider) {
    let topSliderSwiper;

    topSliderSwiper = new Swiper(".top-slider.swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      speed: 1500,
      pagination: {
        el: '.top-slider__pagination',
      },
      navigation: {
        nextEl: '.top-slider__next',
        prevEl: '.top-slider__prev',
      },
    });
  }


  /*-- Partners Slider --*/

  const partnersSlider = document.querySelector(".partners");

  if (partnersSlider) {
    let partnersSwiper;
    partnersSwiper = new Swiper(".partners__swiper.swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      // autoplay: true,
      // delay: 3500,
      speed: 1000,
      navigation: {
        prevEl: ".partners__prev",
        nextEl: ".partners__next",
      },
      breakpoints: {
        // when window width is >= 640px
        576: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        1800: {
          slidesPerView: 5,
          spaceBetween: 0
        },
      }
    });
  }


  /*-- Menu Mob Accordeon --*/

  const accordeonContents = document.querySelectorAll('.menu__sublist');
  const accordeonBtns = document.querySelectorAll('.menu__link');


  function MenuMobAccordeon() {
    if (mobile.matches) {
      accordeonBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          accordeonBtns.forEach((btnItem, idx) => {

            if (btnItem === btn) {

              const menuItem = btnItem.parentElement;
              console.log(menuItem);
              // btnItem.classList.toggle('open');
              menuItem.classList.toggle('open');
              // accordeonContents[idx].classList.toggle('hidden')
            } else {
              // btnItem.classList.remove('feature__link_active')
              // lists[idx].classList.add('hidden')
            }
          })
        })
      })
    }
  }

  MenuMobAccordeon();
  window.addEventListener('resize', MenuMobAccordeon);



  /*-- Menu --*/

  const menuBurger = document.querySelector('.menu__burger');

  if (menuBurger) {
    const menuBody = document.querySelector('.menu__body');
    const menuBtnClose = document.querySelector('.menu__mob-close');

    menuBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      menuBurger.classList.toggle('active');
      menuBody.classList.toggle('active');
    })

    menuBtnClose.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      menuBurger.classList.toggle('active');
      menuBody.classList.toggle('active');
    })
  }

  /*-- Choices --*/
  const selectEls = document.querySelectorAll('.js-choice');

  selectEls.forEach(selectEl => {
    const choices = new Choices(selectEl, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: true,
    })
  })

  /*-- Gradient Accordeon --*/

  const gradientAccordeon = document.querySelector('.accordeon');

  if (gradientAccordeon) {

    function GradientAccordeon() {
      const accordeonContents = document.querySelectorAll('.accordeon__content');
      const accordeonBtns = document.querySelectorAll('.accordeon__btn');

      accordeonBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          accordeonBtns.forEach((btnItem, idx) => {

            if (btnItem === btn) {
              const accordeonelement = btn.closest('.accordeon__element');
              const collapseBtn = accordeonelement.querySelector('.collapse__btn');
              accordeonelement.classList.toggle('open');

              collapseBtn.addEventListener('click', () => {
                accordeonelement.classList.remove('open');
              })
            }
          })
        })
      })
    }
    GradientAccordeon();
    window.addEventListener('resize', GradientAccordeon);
  }

  /*-- Search --*/

  const searchBtn = document.querySelector('.search-btn');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const searchBlock = document.querySelector('.search-block');
      searchBlock.classList.toggle('active');
      searchBtn.classList.toggle('active');
    })

    const searchInput = document.querySelector('.search-block input')  

    searchInput.addEventListener('focus', function() {
      const searchIcon = document.querySelector('.search-block__btn');
      const searchPaths = document.querySelectorAll('.search-block__btn path');

      searchPaths.forEach(searchPath => {
        searchPath.style.stroke = '#00E68A';
      })
    })
  }
});
