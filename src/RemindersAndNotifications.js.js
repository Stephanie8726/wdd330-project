// import { createElement } from './utils';

// function RemindersAndNotifications() {
//   const title = createElement('h2', { textContent: 'Notifications & Reminders' });

//   const notificationList = createElement('ul', { className: 'notificationList' }, [
//     createElement('li', { textContent: 'Reminder: Time for your daily workout!' }),
//     createElement('li', { textContent: 'Notification: You have achieved 50% of your weekly goal!' }),
//     createElement('li', { textContent: 'Reminder: Don\'t forget to log your progress today!' })
//   ]);

//   const backButton = createElement('a', {
//     href: '/#/tracking',
//     textContent: 'Back to Tracking',
//     className: 'backButton'
//   });

//   return createElement('div', {}, [title, notificationList, backButton]);
// }

// export default RemindersAndNotifications;




// import { createElement } from './utils';

// function RemindersAndNotifications() {
//   const title = createElement('h2', { textContent: 'Notifications & Reminders' });

//   const possibleNotifications = [
//     'Time for your daily workout!',
//     'You have achieved 50% of your weekly goal!',
//     'Don\'t forget to log your progress today!',
//     'Great job on completing yesterday\'s workout!',
//     'Drink at least 8 glasses of water today!',
//     'You\'re on a 3-day workout streak!',
//     'Take a rest day if you feel too sore!',
//     'You burned 500 calories yesterday!',
//     'Set your goals for the upcoming week!',
//     'Check out new exercises added to your routine!'
//   ];

//   function getRandomNotifications(count) {
//     const shuffled = possibleNotifications.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
//   }

//   const randomNotifications = getRandomNotifications(3);

//   const notificationList = createElement('ul', { className: 'notificationList' }, 
//     randomNotifications.map(notification => createElement('li', { textContent: notification }))
//   );

//   const backButton = createElement('a', {
//     href: '/#/tracking',
//     textContent: 'Back to Tracking',
//     className: 'backButton'
//   });

//   return createElement('div', {}, [title, notificationList, backButton]);
// }

// export default RemindersAndNotifications;




// import { createElement } from './utils';

// function RemindersAndNotifications() {
//   const title = createElement('h2', { textContent: 'Notifications & Reminders' });


//   const possibleNotifications = [
//     'Take a rest day if you feel too sore!',
//     'You burned 500 calories yesterday!',
//     'Set your goals for the upcoming week!',
//     'Check out new exercises added to your routine!',
//     'Time for your daily workout!',
//     'You have achieved 50% of your weekly goal!',
//     'Don\'t forget to log your progress today!',
//     'Great job on completing yesterday\'s workout!',
//     'Drink at least 8 glasses of water today!',
//     'You\'re on a 3-day workout streak!'
//   ];

//   function getRandomNotifications(count) {
//     const shuffled = possibleNotifications.slice(); 
//     for (let i = shuffled.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }
//     return shuffled.slice(0, count);
//   }

//   const randomNotifications = getRandomNotifications(3);

//   console.log('Selected Notifications:', randomNotifications);

//   const notificationList = createElement('ul', { className: 'notificationList' }, 
//     randomNotifications.map(notification => createElement('li', { textContent: notification }))
//   );

//   const backButton = createElement('a', {
//     href: '/#/tracking',
//     textContent: 'Back to Tracking',
//     className: 'backButton'
//   });

//   return createElement('div', {className: 'remindersAndNotificationsDiv'}, [title, notificationList, backButton]);
// }

// export default RemindersAndNotifications;

