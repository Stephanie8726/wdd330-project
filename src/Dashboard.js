import { createElement } from './utils';

function Page1() {
  const title = createElement('h2', { textContent: 'List of current goals' });

  const actionLink = createElement('a', {
    href: '/#/tracking',
    textContent: 'Go to the tracking page',
  });

  const newGoalLink = createElement('a', {
    href: '/#/new-goal',
    textContent: 'Go to new goal page',
  });


  return createElement('div', {}, [title, actionLink, newGoalLink]);
}

export default Page1;