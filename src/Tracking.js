// import { createElement } from './utils';

// function Tracking() {
//   const title = createElement('h2', { textContent: 'Tracking Goal Page' });

//   const dashboardLink = createElement('a', {
//     href: '/#/dashboard',
//     textContent: 'go back to dashboard',
//   });

//   const notificationsLink = createElement('a', {
//     href: '/#/notifications',
//     textContent: 'Notifications & Reminders',
//   });

//   const remindersLink = createElement('a', {
//     hrer: '/#/reminders',
//     textContent: 'go back to dashboard',
//   });

//   const reminderMessage = createElement('p', {
//     textContent: 'Don\'t forget to track your progreass daily!',
//     className: 'reminderMessage',
//   });

//   const tipOfTheDay = createElement('p', {
//     textContent: 'Tip of the day: Stay hydrated and get enough sleep for better results!',
//     className: 'tipOfTheDay',
//   })

//   const actionItems = createElement('div', { className: 'actionItems'}, [dashboardLink, notificationsLink]);

//   return createElement('div', {}, [title, dashboardLink, reminderMessage, actionItems]);
// }

// export default Tracking;





import { createElement } from './utils';

function Tracking() {
  const params = new URLSearchParams(window.location.hash.split('?')[1]);
  const goalId = params.get('goalId');
  const goalName = params.get('goalName');

  const title = createElement('h2', { className: 'goalNameTracking', textContent: `${goalName} Goal` });

  const dashboardLink = createElement('a', {
    href: '/#/dashboard',
    textContent: 'Go back to dashboard page',
    className: 'dashboardLink'
  });

  const notificationsLink = createElement('a', {
    href: '/#/notifications',
    textContent: 'Go back to notifications & reminders page',
    className: 'notificationsLink'
  });

  const timeLabel = createElement('label', { textContent: 'Time Duration (minutes):', for: 'timeInput' });
  const timeInput = createElement('input', { id: 'timeInput', type: 'number' });

  const caloriesLabel = createElement('label', { textContent: 'Calories Burned:', for: 'caloriesInput' });
  const caloriesInput = createElement('input', { id: 'caloriesInput', type: 'number' });

  const submitButton = createElement('button', { className: 'progressButton', textContent: 'Save Progress' });

  submitButton.addEventListener('click', () => {
    const timeDuration = timeInput.value.trim();
    const caloriesBurned = caloriesInput.value.trim();
    if (timeDuration && caloriesBurned) {
      let progress = JSON.parse(localStorage.getItem('progress')) || [];
      progress.push({ goalId, goalName, timeDuration, caloriesBurned });
      localStorage.setItem('progress', JSON.stringify(progress));
      alert('Progress saved successfully!');
      timeInput.value = '';
      caloriesInput.value = '';
    } else {
      alert('Please enter both time duration and calories burned.');
    }
  });

  const actionItems = createElement('div', { className: 'actionItems' }, [dashboardLink, notificationsLink]);

  return createElement('div', {className: 'trackingDiv'}, [
    title,
    actionItems,
    timeLabel,
    timeInput,
    caloriesLabel,
    caloriesInput,
    submitButton
  ]);
}

export default Tracking;
