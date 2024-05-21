function createNavBar() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    const navItems = ['Home', 'Log Exercise', 'Goals', 'Planner', 'Progress'];
    navItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${item.toLowerCase().replace(' ', '-')}`;
      a.textContent = item;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    nav.appendChild(ul);
    return nav;
  }
  
  // create and append main
  function createMainContent() {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Your Fitness Tracker and Planner!';
  
    const p = document.createElement('p');
    p.textContent = 'Achieve Your Health Goals with Ease and Precision!';
  
    main.appendChild(h1);
    main.appendChild(p);
    return main;
  }
  
  // initialize the app
  function init() {
    const app = document.getElementById('app');
  
    const navBar = createNavBar();
    const mainContent = createMainContent();
  
    app.appendChild(navBar);
    app.appendChild(mainContent);
  }
  
  // page load
  document.addEventListener('DOMContentLoaded', init);