const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeBgColor = () => {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
};

let startIsActive = false;

startBtnRef.addEventListener('click', () => {
  if (startIsActive) {
    return;
  }
  startIsActive = true;
  const intervalOne = setInterval(changeBgColor, 1000);
  startBtnRef.removeEventListener;

  stopBtnRef.addEventListener('click', () => {
    startIsActive = false;
    clearInterval(intervalOne);
  });
});
