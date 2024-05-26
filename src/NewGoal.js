import { createElement } from './utils';

function NewGoal() {
  const title = createElement('h2', { textContent: 'create a new goal here' });

  const dashboardLink = createElement('a', {
    href: '/#/dashboard',
    textContent: 'go to dashboard',
  });

  return createElement('div', {}, [title, dashboardLink]);
}

export default NewGoal;