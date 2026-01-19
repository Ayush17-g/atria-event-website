/* FILTER EVENTS */
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

/* OPEN MODAL */
function openModal(eventName) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modalTitle').innerText =
    `Register for ${eventName}`;

  // Reset inputs & states
  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("usnInput").value = "";

  document
    .querySelectorAll(".modal-box input")
    .forEach(i => i.classList.remove("error", "success"));
}

/* CLOSE MODAL */
function closeModal() {
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

/* LOAD SAVED THEME + VIEW SCHEDULE */
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
  }

  const btn = document.getElementById("viewScheduleBtn");
  const section = document.getElementById("schedule");

  if (btn && section) {
    btn.addEventListener("click", () => {
      section.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* REGISTER VALIDATION */
  const registerBtn = document.getElementById("confirmRegisterBtn");

  registerBtn.addEventListener("click", () => {
    const name = document.getElementById("nameInput");
    const email = document.getElementById("emailInput");
    const usn = document.getElementById("usnInput");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    // Reset states
    [name, email, usn].forEach(i => i.classList.remove("error", "success"));

    if (!name.value.trim()) {
      name.classList.add("error");
      valid = false;
    } else {
      name.classList.add("success");
    }

    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("error");
      valid = false;
    } else {
      email.classList.add("success");
    }

    if (!usn.value.trim()) {
      usn.classList.add("error");
      valid = false;
    } else {
      usn.classList.add("success");
    }

    if (!valid) return;

    alert("✅ Registration Successful!");
    closeModal();
  });
};
