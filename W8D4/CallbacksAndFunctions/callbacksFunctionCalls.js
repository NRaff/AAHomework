function timeout(seconds, cb) {
  ms = seconds * 1000;
  window.setTimeout(cb, ms);
}

timeout(10, function hammer() {
  alert('HAMMERTIME');
});

function hammerTime(time) {
  window.setTimeout( () => {
    alert(`${time} is hammertime!`);
  }, 5000);
};