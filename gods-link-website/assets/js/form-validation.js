document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#e05555';
        valid = false;
      }
    });

    const emailField = form.querySelector('[type="email"]');
    if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.style.borderColor = '#e05555';
      valid = false;
    }

    if (!valid) return;

    const btn = form.querySelector('.submit-btn');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate sending
    await new Promise(r => setTimeout(r, 1800));

    form.style.display = 'none';
    const success = document.querySelector('.form-success');
    if (success) {
      success.style.display = 'block';
      success.innerHTML = `
        <div style="font-size:2.5rem;margin-bottom:1rem;">✦</div>
        <h3 style="font-family:var(--font-display);font-size:2rem;letter-spacing:0.04em;margin-bottom:0.8rem;">Message Received</h3>
        <p>We'll get back to you within 24 hours.</p>
      `;
    }
  });
});
