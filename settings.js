const form = document.getElementById('settingsForm');
const saveButton = document.getElementById('saveButton');
const saveNotice = document.getElementById('saveNotice');
const fields = ['fullName', 'email', 'username', 'notifications', 'darkMode', 'weeklyReports'];

const loadSettings = () => {
  fields.forEach((field) => {
    const element = document.getElementById(field);
    if (!element) return;

    const storedValue = localStorage.getItem(`flyrank-${field}`);
    if (storedValue === null) return;

    if (element.type === 'checkbox') {
      element.checked = storedValue === 'true';
    } else {
      element.value = storedValue;
    }
  });
};

const saveSettings = () => {
  fields.forEach((field) => {
    const element = document.getElementById(field);
    if (!element) return;

    const value = element.type === 'checkbox' ? element.checked : element.value;
    localStorage.setItem(`flyrank-${field}`, value);
  });
};

const showSavedNotice = () => {
  saveNotice.style.display = 'block';
  setTimeout(() => {
    saveNotice.style.display = 'none';
  }, 2200);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveSettings();
  showSavedNotice();
});

saveButton.addEventListener('click', () => {
  saveSettings();
  showSavedNotice();
});

loadSettings();
