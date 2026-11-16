/* Regional Transit Funding Model, passphrase gate.
   Adapted from the TRPA Tools QA gate (trpa-agency/tools, assets/qa-gate.js).
   The editions build inlines this script at the top of the full page's <head> and fills in the
   settings object below from pipeline/editions/config.yaml (full.gate block).

   It hides the page until the visitor enters the shared passphrase, then remembers the unlock in
   this browser for ttlDays. The passphrase is not in the repo: only the SHA-256 of salt + passphrase
   is. This keeps casual visitors out. It is not security: the page and its data still download to
   the browser, and the repo is public.

   To set or change the passphrase, run pipeline/set_passphrase.bat, then pipeline/build_editions.bat.
   Everyone is asked for the new passphrase on their next visit, because the stored unlock carries the hash. */
(function () {
  'use strict';

  var CFG = __SETTINGS__;
  var HASH = CFG.hash, SALT = CFG.salt, KEY = CFG.key, TTL_DAYS = CFG.ttlDays;
  var REQUEST_MAILTO = 'mailto:' + CFG.requestEmail + '?subject=' + encodeURIComponent(CFG.requestSubject) +
    '&body=' + encodeURIComponent('Hi,\n\nCould you send me the passphrase for the Regional Transit Funding Model?\n\nPage: ') + encodeURIComponent(location.href);

  function unlocked() {
    try {
      var saved = JSON.parse(localStorage.getItem(KEY) || 'null');
      return !!saved && saved.hash === HASH && saved.until > Date.now();
    } catch (e) { return false; }
  }

  function remember() {
    try {
      localStorage.setItem(KEY, JSON.stringify({ hash: HASH, until: Date.now() + TTL_DAYS * 86400000 }));
    } catch (e) { /* private mode: the unlock lasts for this page only */ }
  }

  function sha256(text) {
    var bytes = new TextEncoder().encode(text);
    return crypto.subtle.digest('SHA-256', bytes).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
    });
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // Relock from the browser console: fundingGate.lock()
  window.fundingGate = {
    lock: function () { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); }
  };

  if (unlocked()) return;

  var root = document.documentElement;
  root.classList.add('fm-locked');

  var style = document.createElement('style');
  style.textContent = [
    'html.fm-locked { overflow: hidden !important; }',
    'html.fm-locked body > :not(.fm-gate) { visibility: hidden !important; }',
    '.fm-gate { position: fixed; inset: 0; z-index: 2147483647; display: flex; align-items: center; justify-content: center;',
    '  padding: 1.5rem; box-sizing: border-box; background: #003B71; visibility: visible !important;',
    '  font-family: "Open Sans", "Segoe UI", Calibri, system-ui, sans-serif; color: #003B71; }',
    '.fm-gate * { box-sizing: border-box; }',
    '.fm-gate .fm-gate-card { width: 100%; max-width: 440px; background: #fff; border-radius: 10px; padding: 2rem 2rem 1.5rem;',
    '  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35); border-top: 6px solid #E87722; }',
    '.fm-gate .fm-gate-logo { display: block; height: 44px; width: auto; margin: 0 0 1.25rem; }',
    '.fm-gate h1 { font-size: 1.25rem; font-weight: 600; margin: 0 0 0.35rem; line-height: 1.3; }',
    '.fm-gate p { margin: 0 0 1.25rem; font-size: 0.95rem; line-height: 1.5; color: #3d5a7a; }',
    '.fm-gate label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem; }',
    '.fm-gate .fm-gate-row { display: flex; gap: 0.5rem; }',
    '.fm-gate input { flex: 1; min-width: 0; font: inherit; font-size: 1rem; padding: 0.6rem 0.75rem; border: 1px solid #9fb6cf; border-radius: 6px;',
    '  color: #003B71; background: #fff; color-scheme: light; -webkit-appearance: none; appearance: none; box-shadow: none; }',
    '.fm-gate input:focus { outline: 2px solid #0072CE; outline-offset: 1px; border-color: #0072CE; }',
    '.fm-gate button { font: inherit; font-size: 1rem; font-weight: 600; padding: 0.6rem 1.1rem; border: 0; border-radius: 6px; background: #0072CE; color: #fff; cursor: pointer; }',
    '.fm-gate button:hover { background: #005ea8; }',
    '.fm-gate button:disabled { opacity: 0.6; cursor: default; }',
    '.fm-gate .fm-gate-error { min-height: 1.3em; margin: 0.6rem 0 0; font-size: 0.875rem; color: #9C3E27; }',
    '.fm-gate .fm-gate-request { display: inline-flex; align-items: center; gap: 0.4rem; margin: 0.9rem 0 0; padding: 0.5rem 0.9rem; border: 1px solid #0072CE; border-radius: 6px;',
    '  background: #fff; color: #0072CE; font-size: 0.9rem; font-weight: 600; text-decoration: none; }',
    '.fm-gate .fm-gate-request:hover { background: #eaf3fc; }',
    '.fm-gate .fm-gate-request svg { width: 16px; height: 16px; flex: none; }',
    '.fm-gate .fm-gate-foot { margin: 1.25rem 0 0; padding-top: 0.9rem; border-top: 1px solid #e3ebf4; font-size: 0.8rem; color: #5f7893; }',
    '.fm-gate .fm-gate-foot a { color: #0072CE; }',
    '@media (prefers-reduced-motion: no-preference) { .fm-gate .fm-gate-card.shake { animation: fm-gate-shake 0.35s; } }',
    '@keyframes fm-gate-shake { 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }'
  ].join('\n');
  document.head.appendChild(style);

  function render() {
    var gate = document.createElement('div');
    gate.className = 'fm-gate';
    gate.setAttribute('role', 'dialog');
    gate.setAttribute('aria-labelledby', 'fm-gate-title');
    gate.innerHTML =
      '<form class="fm-gate-card" autocomplete="off">' +
        '<img class="fm-gate-logo" src="' + esc(CFG.logo) + '" alt="Tahoe Regional Planning Agency" />' +
        '<h1 id="fm-gate-title">' + esc(CFG.title) + '</h1>' +
        '<p>' + esc(CFG.message) + '</p>' +
        '<label for="fm-gate-input">Passphrase</label>' +
        '<div class="fm-gate-row">' +
          '<input id="fm-gate-input" type="password" autocapitalize="off" spellcheck="false" required />' +
          '<button type="submit">Enter</button>' +
        '</div>' +
        '<p class="fm-gate-error" role="alert" aria-live="polite"></p>' +
        '<a class="fm-gate-request" href="' + REQUEST_MAILTO + '">' +
          '<svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="3" width="13" height="10" rx="1.5"/><path d="M2 4l6 5 6-5"/></svg>' +
          'Request the passphrase' +
        '</a>' +
        (CFG.publicPage ? '<p class="fm-gate-foot">Looking for the public version? <a href="' + esc(CFG.publicPage) + '">' + esc(CFG.publicLinkText) + '</a></p>' : '') +
      '</form>';
    document.body.appendChild(gate);

    var form = gate.querySelector('form');
    var input = gate.querySelector('input');
    var button = gate.querySelector('button');
    var error = gate.querySelector('.fm-gate-error');

    if (!HASH) {
      error.textContent = 'No passphrase has been set for this page yet.';
      input.disabled = button.disabled = true;
      return;
    }
    if (!(window.crypto && crypto.subtle)) {
      error.textContent = 'This page has to be opened over https or localhost to unlock.';
      input.disabled = button.disabled = true;
      return;
    }

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var value = input.value;
      if (!value) return;
      button.disabled = true;
      sha256(SALT + value).then(function (hex) {
        if (hex === HASH) {
          remember();
          root.classList.remove('fm-locked');
          gate.remove();
          style.remove();
          // Charts drawn while the page was hidden may need to resize to the now-visible layout.
          try { window.dispatchEvent(new Event('resize')); } catch (e) {}
          return;
        }
        error.textContent = 'That passphrase did not match.';
        form.classList.remove('shake');
        void form.offsetWidth;
        form.classList.add('shake');
        input.select();
        button.disabled = false;
      });
    });

    input.focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
