(() => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const year = document.querySelector('#copyright-year');
  const projectForm = document.querySelector('#project-form');
  const formStatus = document.querySelector('#form-status');

  if (year) year.textContent = String(new Date().getFullYear());

  if (toggle && navigation) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      navigation.dataset.collapsed = 'true';
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      navigation.dataset.collapsed = String(isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('a[href]')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
  }

  if (projectForm) {
    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const values = new FormData(projectForm);
      const subject = `Project inquiry: ${values.get('Subject')}`;
      const body = [
        `Name: ${values.get('Name')}`,
        `Email: ${values.get('Email')}`,
        `Company: ${values.get('Company') || 'Not provided'}`,
        '',
        String(values.get('Project description') || '')
      ].join('\n');

      if (formStatus) {
        formStatus.textContent = 'Your email app should open with a draft. Review it and send it there; this site has not sent your message.';
      }

      window.location.href = `mailto:fidanabdiu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
