const city = document.querySelector('.city');
const city_copy = document.querySelector('.city_copy');
const trees = document.querySelector('.trees');
const trees_copy = document.querySelector('.trees_copy');
const road = document.querySelector('.road');
const road_copy = document.querySelector('.road_copy');
const sidewalk = document.querySelector('.sidewalk');
const sidewalk_copy = document.querySelector('.sidewalk_copy');
const frontWheel = document.querySelector('.front-wheel');
const backWheel = document.querySelector('.back-wheel');
const btnStart = document.querySelector('.start-btn');
const btnAudio = document.querySelector('.audio-btn');
const audio = document.querySelector('audio');
const watch = document.querySelector('#timer');

const screenWidth = document.documentElement.clientWidth;
const arrayElemnts = [
  city,
  city_copy,
  trees,
  trees_copy,
  road,
  road_copy,
  sidewalk,
  sidewalk_copy,
  frontWheel,
  backWheel,
];

let milliseconds = 0;
let timer;

const definesStyles = (obj, obj_copy, width) => {
  obj.style.width = `${width}px`;

  obj_copy.style.cssText = `
      width: ${width}px;
      left: ${width - 1}px;`;
};

const startTimer = () => {
  clearInterval(timer);

  timer = setInterval(() => {
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);
    watch.innerHTML =
      ('0' + dateTimer.getUTCMinutes()).slice(-1) +
      ':' +
      ('0' + dateTimer.getUTCSeconds()).slice(-2) +
      '.' +
      ('0' + dateTimer.getUTCMilliseconds()).slice(-2, -1);
  }, 10);
};

const pausedWatch = () => {
  clearInterval(timer);
};

const playAudio = () => {
  audio.play();
};

const pauseAudio = () => {
  audio.pause();
};

const cityStyles = definesStyles(city, city_copy, screenWidth);
const treesStyles = definesStyles(trees, trees_copy, screenWidth);
const roadStyles = definesStyles(road, road_copy, screenWidth);
const sidewalkStyles = definesStyles(sidewalk, sidewalk_copy, screenWidth);

btnStart.addEventListener('click', () => {
  arrayElemnts.forEach((item) => {
    if (item.classList.contains('stop-animate')) {
      item.classList.remove('stop-animate');
      startTimer();
    } else {
      item.classList.add('stop-animate');
      pausedWatch();
    }
  });

  btnStart.classList.contains('start-race')
    ? btnStart.classList.remove('start-race')
    : btnStart.classList.add('start-race');
});

btnAudio.addEventListener('click', () => {
  if (btnAudio.classList.contains('start-audio')) {
    btnAudio.classList.remove('start-audio');
    pauseAudio();
  } else {
    btnAudio.classList.add('start-audio');
    playAudio();
  }
});
