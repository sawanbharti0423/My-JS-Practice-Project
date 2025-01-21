setInterval(() => {
  let h1 = document.querySelector("h1")
  d = new Date();
  hTime = d.getHours();
  mTime = d.getMinutes();
  sTime = d.getSeconds();


  let hRotation = 30 * hTime + mTime / 2;
  let mRotation = 6 * mTime;
  let sRotation = 6 * sTime;

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;

  let day = new Date();
  let newDay = day.toDateString()
  let newTime = day.toTimeString()
  let nextTime = newTime.split(' ').slice(0, -4).join(' ')
  h1.innerText = `${newDay} ${nextTime} `;

}, 1000);