(function () {
  const lowerArea = document.getElementById('lowerArea');
  const upperArea = document.getElementById('upperArea');

  const btnSentenceCase = document.getElementById('btnSentenceCase');
  const btnWordCase = document.getElementById('btnWordCase');
  const btnCopyLower = document.getElementById('btnCopyLower');
  const btnCopyUpper = document.getElementById('btnCopyUpper');
  const btnClearCase = document.getElementById('btnClearCase');

  const caseToast = document.getElementById('caseToast');

  let syncLock = false;

  function syncFromLower() {
    if (syncLock) return;
    syncLock = true;
    upperArea.value = (lowerArea.value || '').toUpperCase();
    syncLock = false;
  }

  function syncFromUpper() {
    if (syncLock) return;
    syncLock = true;
    lowerArea.value = (upperArea.value || '').toLowerCase();
    syncLock = false;
  }

  // Majuscule en tête de phrases (simple & efficace)
  function sentenceCase(text) {
    const t = (text || '').toLowerCase();
    return t.replace(/(^|[.!?…]+|\n)\s*(\p{L})/gu, (m, prefix) => {
      const rest = m.slice(prefix.length);
      const idx = rest.search(/\p{L}/u);
      if (idx === -1) return m;
      return prefix + rest.slice(0, idx) + rest[idx].toUpperCase() + rest.slice(idx + 1);
    });
  }

  // Majuscule en tête de mots
  function wordCase(text) {
    const t = (text || '').toLowerCase();
    return t.replace(/(^|[^\p{L}])(\p{L})/gu, (m, sep, letter) => `${sep}${letter.toUpperCase()}`);
  }

  lowerArea.addEventListener('input', () => { syncFromLower(); });
  upperArea.addEventListener('input', () => { syncFromUpper(); });

  btnSentenceCase.addEventListener('click', () => {
    lowerArea.value = sentenceCase(lowerArea.value || '');
    syncFromLower();
    lowerArea.focus();
  });

  btnWordCase.addEventListener('click', () => {
    lowerArea.value = wordCase(lowerArea.value || '');
    syncFromLower();
    lowerArea.focus();
  });

  btnCopyLower.addEventListener('click', () => window.App.copyText(lowerArea.value, caseToast));
  btnCopyUpper.addEventListener('click', () => window.App.copyText(upperArea.value, caseToast));

  btnClearCase.addEventListener('click', () => {
    lowerArea.value = '';
    upperArea.value = '';
    caseToast.textContent = '';
    lowerArea.focus();
  });
})();
