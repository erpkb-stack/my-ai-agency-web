// Ledgerlight site behaviour: mobile nav, footer year, contact form.
(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form
  // Set data-endpoint on the <form> to a form service URL (e.g. Formspree or Web3Forms)
  // to receive submissions directly. With no endpoint, the form opens the visitor's
  // email app with the message pre-filled, addressed to data-email.
  var form = document.querySelector('form.contact');
  if (!form) return;
  var status = form.querySelector('.form-status');

  function show(kind, msg) {
    status.className = 'form-status show ' + kind;
    status.textContent = msg;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.querySelector('.hp input').value) return; // spam trap

    var ok = true;
    form.querySelectorAll('[required]').forEach(function (f) {
      var bad = !f.value.trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
      f.setAttribute('aria-invalid', bad ? 'true' : 'false');
      if (bad && ok) { f.focus(); ok = false; }
    });
    if (!ok) { show('err', 'Please fill in your name, a valid work email and a short description.'); return; }

    var data = new FormData(form);
    var endpoint = form.getAttribute('data-endpoint');

    if (endpoint) {
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error();
          form.reset();
          show('ok', 'Thanks. Your message is in, and we will reply within one business day.');
        })
        .catch(function () {
          show('err', 'Something went wrong sending your message. Please email us directly instead.');
        })
        .finally(function () { btn.disabled = false; });
      return;
    }

    var to = form.getAttribute('data-email');
    var lines = [];
    data.forEach(function (v, k) { if (k !== 'website' && v) lines.push(k + ': ' + v); });
    var subject = 'Project enquiry from ' + (data.get('name') || 'website');
    window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n\n'));
    show('ok', 'Your email app should open with the message ready to send. If it does not, email us directly.');
  });
})();
