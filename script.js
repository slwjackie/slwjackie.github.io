'use strict';
const copyButton = document.getElementById('copy-email');
const feedback = document.getElementById('copy-feedback');
let feedbackTimer;
copyButton.addEventListener('click', async () => {
  clearTimeout(feedbackTimer);
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('slwjackie@snu.ac.kr');
    feedback.textContent = 'Email address copied.';
  } catch {
    feedback.textContent = 'Please select and copy slwjackie@snu.ac.kr, or use the email link.';
  }
  feedbackTimer = setTimeout(() => { feedback.textContent = ''; }, 7000);
});
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-12% 0px -65% 0px', threshold: 0 });
  for (const id of ['top', 'research', 'about', 'contact']) observer.observe(document.getElementById(id));
}
