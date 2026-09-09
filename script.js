// ঢেউ — small enhancements

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('today');
  if (el) {
    const d = new Date();
    try {
      el.textContent = new Intl.DateTimeFormat('bn-BD', {
        year: 'numeric', month: 'long', day: 'numeric'
      }).format(d);
    } catch (e) {
      el.textContent = d.toDateString();
    }
  }
});
