(function () {
  // Active tab highlighting across pages
  const tabs = Array.from(document.querySelectorAll('.tab[data-route]'));
  if (tabs.length) {
    const path = location.pathname.replace(/\/+/g, '/');
    tabs.forEach(t => {
      const route = t.getAttribute('data-route');
      const isActive = route && path.endsWith(route);
      t.classList.toggle('active', isActive);
    });
  }

  // Small clipboard helper exposed globally
  window.App = window.App || {};
  window.App.copyText = async function copyText(text, toastEl) {
    const msg = (s) => {
      if (!toastEl) return;
      toastEl.textContent = s || '';
      if (!s) return;
      window.clearTimeout(msg._t);
      msg._t = window.setTimeout(() => { toastEl.textContent = ''; }, 1600);
    };

    try {
      await navigator.clipboard.writeText(text || '');
      msg('Copié ✅');
      return true;
    } catch {
      // fallback
      try {
        const tmp = document.createElement('textarea');
        tmp.value = text || '';
        tmp.setAttribute('readonly', '');
        tmp.style.position = 'fixed';
        tmp.style.left = '-9999px';
        document.body.appendChild(tmp);
        tmp.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(tmp);
        msg(ok ? 'Copié ✅' : 'Copie impossible');
        return ok;
      } catch {
        msg('Copie impossible');
        return false;
      }
    }
  };
})();
