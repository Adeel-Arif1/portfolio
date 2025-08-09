document.addEventListener('DOMContentLoaded', function () {
  // Sidebar toggle
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');
  const sidebar = document.querySelector('[data-sidebar]');
  sidebarBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });

  // Navigation
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const targetPage = this.getAttribute('data-nav-link');
      navLinks.forEach(nav => nav.classList.remove('active'));
      pages.forEach(page => page.classList.remove('active'));
      this.classList.add('active');
      const targetSection = document.querySelector(`[data-page="${targetPage}"]`);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });

  // Portfolio filter
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const filterSelectItems = document.querySelectorAll('[data-select-item]');
  const projectItems = document.querySelectorAll('[data-filter-item]');

  const filterProjects = (category) => {
    projectItems.forEach(item => {
      if (category === 'All' || item.getAttribute('data-category') === category) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      filterProjects(this.textContent);
    });
  });

  filterSelectItems.forEach(item => {
    item.addEventListener('click', function () {
      document.querySelector('[data-select-value]').textContent = this.textContent;
      filterProjects(this.textContent);
    });
  });

  // Project modals
  const projectLinks = document.querySelectorAll('[data-project-link]');
  const modalContainer = document.querySelector('[data-modal-container]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalText = document.querySelector('[data-modal-text] p');
  const modalLink = document.querySelector('[data-modal-link]');
  const overlay = document.querySelector('[data-overlay]');

  const projectDetails = {
    'Quick QR App': {
      description: 'Developed a feature-rich QR code scanner and generator app using Flutter and Dart. The app enables users to seamlessly scan and create QR codes, integrated with Git for version control.',
      github: 'https://github.com/Adeel-Arif1/Quick-Qr-App'
    },
    'Lazeez Food Delivery App': {
      description: 'Contributed to a feature-rich food delivery app as a team member. Responsibilities included developing and optimizing UI screens, integrating RESTful APIs, implementing Firebase Cloud Messaging (FCM), and using Shared Preferences for local storage.',
      github: 'https://github.com/Adeel-Arif1/Lazeez-Food-Delivery-App'
    },
    'Weather App': {
      description: 'Developed a user-friendly weather app using Flutter and Dart, integrated with the OpenWeatherMap API to provide real-time weather updates and forecasts.',
      github: 'https://github.com/Adeel-Arif1/Weather-App'
    },
    'Med Sync App': {
      description: 'Built a medication management app with Firebase, Provider, and Hive for local storage. Features include intuitive UI for scheduling and tracking medication reminders and secure storage for prescription data with offline access.',
      github: 'https://github.com/Adeel-Arif1/Med-Sync-App'
    }
  };

  projectLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const projectTitle = this.querySelector('.project-title').textContent;
      const details = projectDetails[projectTitle];
      modalTitle.textContent = projectTitle;
      modalText.textContent = details.description;
      modalLink.href = details.github;
      modalContainer.classList.add('active');
    });
  });

  modalCloseBtn.addEventListener('click', function () {
    modalContainer.classList.remove('active');
  });

  overlay.addEventListener('click', function () {
    modalContainer.classList.remove('active');
  });
});