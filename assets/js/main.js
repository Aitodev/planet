window.addEventListener('DOMContentLoaded', function () {
  'use strict'

  function timerTimer() {
    //TIMER
    let minute = document.querySelector('#minutes'),
      second = document.querySelector('#seconds');



    const startingMinutes = 15;
    let time = startingMinutes * 60;


    let timeInterval = setInterval(updateCountDown, 1000);

    function updateCountDown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;

      minute.innerHTML = `${minutes}`;
      second.innerHTML = `${seconds}`;
      time--;
      if (time <= -1) {
        clearInterval(timeInterval);
      }
    }

  }

  function timerTimer2() {
    //TIMER2

    let minute2 = document.querySelector('#minutes2'),
      hour = document.querySelector('#hours');

    const startingHours = 13;
    const startingMinutes2 = 15;
    let time2 = ((startingHours * 60) + startingMinutes2) * 60;

    let timeInterval2 = setInterval(updateCountDown2, 1000);

    function updateCountDown2() {
      const hours = Math.floor(time2 / 60 / 60);
      let minutes2 = Math.floor(time2 / 60 % 60);

      minute2.innerHTML = `${minutes2}`;
      hour.innerHTML = `${hours}`;
      time2--;

      if (time2 <= -1) {
        clearInterval(timeInterval2);
      }

    }
  }


  let checkTimer = document.querySelector('.dop2-timer')
  checkTimer ? timerTimer() : console.log('Нет элемента');


  let checkTimer2 = document.querySelector('#hours')
  checkTimer2 ? timerTimer2() : console.log('Нет элемента');




  $('.main__video2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    arrows: true,
    fade: true,
    asNavFor: '.child__video2',
    draggable: false
  });
  $('.child__video2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main__video2',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
          breakpoint: 700,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
      }
  ]
  });






  let done = document.getElementById('done'),
    video = document.getElementById('video'),
    done2 = document.getElementById('done2'),
    video2 = document.getElementById('video2'),
    done3 = document.getElementById('done3'),
    video3 = document.getElementById('video3'),
    frame = document.getElementById('frame'),
    frame2 = document.getElementById('frame2'),
    frame3 = document.getElementById('frame3'),
    heading = document.getElementById('heading'),
    text = document.getElementById('text'),
    text2 = document.getElementById('text2'),
    text3 = document.getElementById('text3')

  heading.innerHTML = text.innerHTML

  frame.addEventListener('click', () => {
    heading.innerHTML = text.innerHTML
  })

  done.addEventListener('click', () => {
    heading.innerHTML = text.innerHTML
  })

  frame2.addEventListener('click', () => {
    heading.innerHTML = text2.innerHTML
  })

  done2.addEventListener('click', () => {
    heading.innerHTML = text2.innerHTML
  })

  frame3.addEventListener('click', () => {
    heading.innerHTML = text3.innerHTML
  })

  done3.addEventListener('click', () => {
    heading.innerHTML = text3.innerHTML
  })


  let player = new Vimeo.Player(video);
  let player2 = new Vimeo.Player(video2);
  let player3 = new Vimeo.Player(video3);

  player.on('ended', function(){
    done.classList.add('active')
    frame.classList.add('hide')
  });

  player2.on('ended', function(){
    done2.classList.add('active')
    frame2.classList.add('hide')
  });

  player3.on('ended', function(){
    done3.classList.add('active')
    frame3.classList.add('hide')
  });









  $('.how-start').on('click', function() {
    $('.d-none').slideToggle();
  })

});
