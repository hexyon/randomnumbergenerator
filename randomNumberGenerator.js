function generateRandomNumber() {
  const min = Math.ceil(1e11);
  const max = Math.floor(1e12);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleGenerate() {
  const numEl = document.getElementById('randomNumber');
  const placeholder = document.getElementById('placeholder');

  // Flash transition
  numEl.classList.add('flash');

  setTimeout(() => {
    const number = generateRandomNumber();
    numEl.textContent = number;
    numEl.style.display = 'block';
    placeholder.style.display = 'none';
    numEl.classList.remove('flash');
  }, 150);

  // Clear copied label on new generation
  const label = document.getElementById('copiedLabel');
  label.classList.remove('visible');
}

function handleCopy() {
  const numEl = document.getElementById('randomNumber');
  const text = numEl.textContent.trim();
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const label = document.getElementById('copiedLabel');
    label.classList.add('visible');
    setTimeout(() => label.classList.remove('visible'), 2000);
  }).catch(() => {
    // Fallback for older browsers
    const tmp = document.createElement('textarea');
    tmp.value = text;
    tmp.style.cssText = 'position:fixed;left:-9999px;top:-9999px';
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);

    const label = document.getElementById('copiedLabel');
    label.classList.add('visible');
    setTimeout(() => label.classList.remove('visible'), 2000);
  });
}
