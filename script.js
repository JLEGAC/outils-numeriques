(function () {
  const input = document.getElementById('input');
  const linesEl = document.getElementById('lines');
  const nonEmptyLinesEl = document.getElementById('nonEmptyLines');
  const charsEl = document.getElementById('chars');
  const btnClear = document.getElementById('btnClear');
  const btnSample = document.getElementById('btnSample');
  const chkIgnoreEmpty = document.getElementById('chkIgnoreEmpty');

  function normalizeNewlines(text) {
    // Windows (\r\n) and old Mac (\r) to Unix (\n)
    return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  }

  function countLines(text) {
    if (!text) return 0;
    // Split preserves empty last line if text ends with \n (which is correct for line counting)
    return normalizeNewlines(text).split('\n').length;
  }

  function countNonEmptyLines(text) {
    if (!text) return 0;
    return normalizeNewlines(text)
      .split('\n')
      .filter(line => line.trim().length > 0)
      .length;
  }

  function update() {
    const text = input.value;
    const lines = countLines(text);
    const nonEmpty = countNonEmptyLines(text);

    linesEl.textContent = String(lines);
    nonEmptyLinesEl.textContent = String(nonEmpty);
    charsEl.textContent = String(text.length);

    // If user wants to ignore empty lines, visually emphasize that figure
    if (chkIgnoreEmpty.checked) {
      nonEmptyLinesEl.parentElement.style.opacity = '1';
    } else {
      nonEmptyLinesEl.parentElement.style.opacity = '0.65';
    }
  }

  btnClear.addEventListener('click', () => {
    input.value = '';
    update();
    input.focus();
  });

  btnSample.addEventListener('click', () => {
    input.value = [
      'Ligne 1',
      'Ligne 2',
      '',
      'Ligne 4 (après une ligne vide)',
      'Dernière ligne'
    ].join('\n');
    update();
    input.focus();
  });

  chkIgnoreEmpty.addEventListener('change', () => {
    // The checkbox doesn't change the computed values, it changes what you care about.
    // We still show both numbers; checkbox is there to match the common expectation.
    update();
  });

  input.addEventListener('input', update);

  // Initial render
  update();
})();
