// Bulb On/Off demo — vanilla JS (moved to assets/bulbprj.js)
(function () {
  const bulb = document.getElementById('bulb');
  const toggleBtn = document.getElementById('toggleBtn');
  const flashBtn = document.getElementById('flashBtn');

  if (!bulb || !toggleBtn) return;

  let isOn = false;
  let flashTimer = null;

  function setState(on) {
    isOn = Boolean(on);
    bulb.classList.toggle('on', isOn);
    toggleBtn.textContent = isOn ? 'Turn Off' : 'Turn On';
    bulb.setAttribute('aria-label', isOn ? 'Light bulb on' : 'Light bulb off');
    bulb.setAttribute('aria-pressed', String(isOn));
  }

  function toggle() {
    setState(!isOn);
  }

  function flash(times = 4, interval = 180) {
    if (flashTimer) clearInterval(flashTimer);
    let count = 0;
    const orig = isOn;
    flashTimer = setInterval(() => {
      setState(!isOn);
      count++;
      if (count >= times) {
        clearInterval(flashTimer);
        flashTimer = null;
        setState(orig);
      }
    }, interval);
  }

  // wire controls
  toggleBtn.addEventListener('click', toggle);
  flashBtn.addEventListener('click', () => flash(6, 120));

  // keyboard accessibility: space toggles when focus is on button or anywhere
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      // prevent page scroll when toggling
      e.preventDefault();
      toggle();
    }
  });

  // init
  setState(false);
})();
