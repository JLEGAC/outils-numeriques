(function () {
  const counterInput = document.getElementById('counterInput');
  const statLines = document.getElementById('statLines');
  const statNonEmpty = document.getElementById('statNonEmpty');
  const statChars = document.getElementById('statChars');
  const btnClearCounter = document.getElementById('btnClearCounter');
  const btnSampleCounter = document.getElementById('btnSampleCounter');

  function normalizeNewlines(s) {
    return (s || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  }

  function updateCounter() {
    const text = counterInput.value || '';
    const n = normalizeNewlines(text);

    if (!text) {
      statLines.textContent = '0';
      statNonEmpty.textContent = '0';
      statChars.textContent = '0';
      return;
    }

    const lines = n.split('\n');
    const nonEmpty = lines.filter(l => l.trim().length > 0).length;

    statLines.textContent = String(lines.length);
    statNonEmpty.textContent = String(nonEmpty);
    statChars.textContent = String(text.length);
  }

  btnClearCounter.addEventListener('click', () => {
    counterInput.value = '';
    updateCounter();
    counterInput.focus();
  });

  btnSampleCounter.addEventListener('click', () => {
    counterInput.value = [
      'Ligne 1',
      'Ligne 2',
      '',
      'Ligne 4 (après une ligne vide)',
      'Dernière ligne'
    ].join('\n');
    updateCounter();
    counterInput.focus();
  });

  counterInput.addEventListener('input', updateCounter);
  updateCounter();
})();
