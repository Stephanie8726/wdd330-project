import { createElement } from './utils';

function Tracking() {
  const title = createElement('h2', { textContent: 'Tracking Goal Page' });

  const dashboardLink = createElement('a', {
    href: '/#/dashboard',
    textContent: 'go back to dashboard',
  });

  return createElement('div', {}, [title, dashboardLink]);
}

export default Tracking;