import Countdown from './modules/countdown.js';

const tempoParaONatal = new Countdown('25 December 2022 23:59:59 GMT-0300');


setInterval(() => {
  console.log(tempoParaONatal.total);
}, 1000);