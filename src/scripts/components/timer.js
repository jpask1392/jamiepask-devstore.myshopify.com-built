import { component } from 'picoapp';
import $ from 'jquery';

export default component((node, ctx) => {
  const zeroPad = (num, places) => String(num).padStart(places, '0')

  // Set the date we're counting down to
  const year = $(node).data('countdown-to-year'), 
        monthIndex = $(node).data('countdown-to-month') - 1, 
        day = $(node).data('countdown-to-day'), 
        hours = $(node).data('countdown-to-hour'), 
        minutes = $(node).data('countdown-to-minute'), 
        seconds = 0;

  // const countDownDate = new Date("Dec 31, 2021 00:00:00").getTime();
  const countDownDate = new Date(year, monthIndex, day, hours, minutes, seconds).getTime();

  const $dayWrapper = $(node).find('.time-unit--day .number'),
        $hourWrapper = $(node).find('.time-unit--hour .number'),
        $minuteWrapper = $(node).find('.time-unit--min .number'),
        $secondWrapper = $(node).find('.time-unit--sec .number');

  // Update the count down every 1 second
  const x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $dayWrapper.html(zeroPad(days, 2));
    $hourWrapper.html(zeroPad(hours, 2));
    $minuteWrapper.html(zeroPad(minutes, 2));
    $secondWrapper.html(zeroPad(seconds, 2));

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      node.innerHTML = "EXPIRED";
    }
  }, 1000);
})
