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
      loop: true,
      effect: "fade",
      speed: 1500,
      pagination: {
        el: '.top-slider__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.top-slider__next',
        prevEl: '.top-slider__prev',
      },
      breakpoints: {
        320: {
          speed: 1000,
        },
        1710: {
          speed: 1250,
        },
      }
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
        768: {
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

    // function GradientAccordeon() {
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
    // }
    // GradientAccordeon();
    // window.addEventListener('resize', GradientAccordeon);
  }

  /*-- Search --*/

  const searchBtn = document.querySelector('.search-btn');
  const body = document.querySelector('body');

  if (searchBtn) {

    const timeout = 400;

    const fixBlocks = document.querySelectorAll('.fix-block');

    searchBtn.addEventListener('click', function (e) {
      searchBlockOpen();
    })

    function searchBlockOpen() {
      const searchBlock = document.querySelector('.search-block');
      searchBlock.classList.add('active');
      // searchBtn.classList.add('active');
      searchBodyLock();

      searchBlock.addEventListener('click', function (e) {
        console.log(e.target)
        if (!e.target.closest('.search-block')) {

          searchBlockClose(e.target.closest('.search-block'));
        }
      })
    }

    function searchBlockClose(doUnlock = true) {
      const searchBlock = document.querySelector('.search-block');
      searchBlock.classList.remove('active');
      searchBtn.classList.remove('active');
      searchBodyUnlock();
    }

    const serchBlockItem = document.querySelectorAll('.search-block-close');

    if (serchBlockItem.length > 0) {
      for (let i = 0; i < serchBlockItem.length; i++) {
        const el = serchBlockItem[i];
        el.addEventListener('click', function (e) {
          searchBlockClose(el.closest('.search-block'));
          e.preventDefault();
        })
      }
    }

    function searchBodyLock() {
      let paddingOffset = window.innerWidth - body.offsetWidth + "px";
      body.style.paddingRight = paddingOffset;
      fixBlocks.forEach((el) => {
        el.style.paddingRight = paddingOffset;
      })
      body.classList.add('lock');
    }

    function searchBodyUnlock() {
      body.style.paddingRight = 0;
      fixBlocks.forEach((el) => {
        el.style.paddingRight = 0;
      })
      body.classList.remove('lock');
    }


    // const searchInput = document.querySelector('.search-block input')

    // searchInput.addEventListener('focus', function () {
    //   const searchIcon = document.querySelector('.search-block__btn');
    //   const searchPaths = document.querySelectorAll('.search-block__btn path');

    //   searchPaths.forEach(searchPath => {
    //     searchPath.style.stroke = '#00E68A';
    //   })
    // })
  }

  /*--Collapse--*/

  const topElement = document.querySelector('.accordeon')

  if (topElement) {
    let topPosition = topElement.offsetTop;

    const collapseBtns = document.querySelectorAll('.collapse__btn');
    collapseBtns.forEach((collapseBtn) => {
      collapseBtn.addEventListener('click', (e) => {
        scrollTo(topElement);
      })
    })

    function scrollTo(element) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: topPosition
      });
    }
  }


  /*--Fancybox--*/

  // Fancybox.bind('[data-fancybox="trigger"]', {
  //   closeButton: true,
  //   // dragToClose: false,
  //   // click: false,
  
  //   on : {
  //     ready : (fancybox) => {
  //       const previousPOpup = document.querySelector('[data-fancybox="trigger"]');
  //       console.log(previousPOpup);
  //     }
  //   }
  // });

});
