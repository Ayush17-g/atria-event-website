function filterEvents(category, btn) {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.event-card').forEach(card => {
    card.style.display =
      category === 'all' || card.dataset.category === category
        ? 'block'
        : 'none';
  });
}

function openModal(eventName) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modalTitle').innerText =
    `Register for ${eventName}`;
}

function closeModal() {
  alert('🎉 Registration Successful!');
  document.getElementById('modal').style.display = 'none';
}

/* THEME TOGGLE */
function toggleTheme() {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');

  localStorage.setItem(
    'theme',
    document.body.classList.contains('light') ? 'light' : 'dark'
  );
}

/* LOAD SAVED THEME */
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
  }

  /* VIEW SCHEDULE BUTTON */
  const btn = document.getElementById("viewScheduleBtn");
  const section = document.getElementById("schedule");

  if (btn && section) {
    btn.addEventListener("click", () => {
      section.scrollIntoView({ behavior: "smooth" });
    });
  }
};
