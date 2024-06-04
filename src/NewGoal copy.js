// import { createElement } from './utils';

// function NewGoal() {
//   const title = createElement('h2', { textContent: 'Create a new goal here' });
//   const titleWrapper = createElement("div", {className: 'inputWrapper'}, [title])

//   const goalLabel = createElement('label', { className: 'Label', textContent: 'Goal:', for: 'goalInput' });
//   const goalInput = createElement('input', { id: 'goalInput', type: 'text' });
//   const goalWrapper = createElement('div', { className: 'inputWrapper' }, [goalLabel, goalInput]);

//   const startDateLabel = createElement('label', { className: 'Label', textContent: 'Start Date:', for: 'startDateInput' });
//   const startDateInput = createElement('input', { id: 'startDateInput', type: 'date' });
//   const startDateWrapper = createElement('div', {className: 'inputWrapper'}, [startDateLabel, startDateInput])

//   const endDateLabel = createElement('label', { className: 'Label', textContent: 'End Date:', for: 'endDateInput' });
//   const endDateInput = createElement('input', { id: 'endDateInput', type: 'date' });
//   const endDateWrapper = createElement('div', { className: 'inputWrapper'}, [endDateLabel, endDateInput])

//   const startingWeightLabel = createElement('label', { className: 'Label', textContent: 'Starting Weight (kg):', for: 'startingWeightInput'});
//   const startingWeightInput = createElement('input', { id: 'startingWeightInput', type: 'number', step: '0.1' });
//   const startingWeightWrapper = createElement('div', {className: 'inputWrapper'}, [startingWeightLabel, startingWeightInput])

//   const goalWeightLabel = createElement('label', { className: 'Label', textContent: 'Goal Weight (kg):', for: 'goalWeightInput' });
//   const goalWeightInput = createElement('input', { id: 'goalWeightInput', type: 'number', step: '0.1' });
//   const goalWeightWrapper = createElement('div', {className: 'inputWrapper'}, [goalWeightLabel, goalWeightInput])

//   const submitButton = createElement('button', { className: 'submitButton', textContent: 'Add Goal' });

//   submitButton.addEventListener('click', () => {
//     const goal = goalInput.value.trim();
//     const startDate = startDateInput.value;
//     const endDate = endDateInput.value;
//     const startingWeight = parseFloat(startingWeightInput.value);
//     const goalWeight = parseFloat(goalWeightInput.value);

//     if (!goal || !startDate || !endDate || isNaN(startingWeight) || isNaN(goalWeight)) {
//       alert('Please fill in all fields correctly.');
//       return;
//     }

//     let goals = JSON.parse(localStorage.getItem('goals')) || [];
//     goals.push({ goal, startDate, endDate, startingWeight, goalWeight, progress: 0 });
//     localStorage.setItem('goals', JSON.stringify(goals));
//     alert('Goal added successfully!');
//     goalInput.value = '';
//     startDateInput.value = '';
//     endDateInput.value = '';
//     startingWeightInput.value = '';
//     goalWeightInput.value = '';
//   });

//   const dashboardLink = createElement('a', {
//     href: '/#/dashboard',
//     textContent: 'Go to dashboard',
//     className: 'dashboardLink'
//   });

//   return createElement('div', {className: 'newGoalsDiv'}, [
//     titleWrapper,
//     goalWrapper,
//     startDateWrapper,
//     endDateWrapper,
//     startingWeightWrapper,
//     goalWeightWrapper,
//     submitButton,
//     dashboardLink,
//   ]);
// }

// export default NewGoal;





// import { createElement } from './utils';

// function NewGoal() {
//   const title = createElement('h2', { textContent: 'Create a new goal here' });
//   const titleWrapper = createElement("div", {className: 'inputWrapper'}, [title])

//   const goalLabel = createElement('label', { className: 'Label', textContent: 'Goal:', for: 'goalInput' });
//   const goalInput = createElement('input', { id: 'goalInput', type: 'text' });
//   const goalWrapper = createElement('div', { className: 'inputWrapper' }, [goalLabel, goalInput]);

//   const startDateLabel = createElement('label', { className: 'Label', textContent: 'Start Date:', for: 'startDateInput' });
//   const startDateInput = createElement('input', { id: 'startDateInput', type: 'date' });
//   const startDateWrapper = createElement('div', {className: 'inputWrapper'}, [startDateLabel, startDateInput])

//   const endDateLabel = createElement('label', { className: 'Label', textContent: 'End Date:', for: 'endDateInput' });
//   const endDateInput = createElement('input', { id: 'endDateInput', type: 'date' });
//   const endDateWrapper = createElement('div', { className: 'inputWrapper'}, [endDateLabel, endDateInput])

//   const startingWeightLabel = createElement('label', { className: 'Label', textContent: 'Starting Weight (kg):', for: 'startingWeightInput'});
//   const startingWeightInput = createElement('input', { id: 'startingWeightInput', type: 'number', step: '0.1' });
//   const startingWeightWrapper = createElement('div', {className: 'inputWrapper'}, [startingWeightLabel, startingWeightInput])

//   const goalWeightLabel = createElement('label', { className: 'Label', textContent: 'Goal Weight (kg):', for: 'goalWeightInput' });
//   const goalWeightInput = createElement('input', { id: 'goalWeightInput', type: 'number', step: '0.1' });
//   const goalWeightWrapper = createElement('div', {className: 'inputWrapper'}, [goalWeightLabel, goalWeightInput])

//   const submitButton = createElement('button', { className: 'submitButton', textContent: 'Add Goal' });
//   const cancelButton = createElement('button', { className: 'cancelButton', textContent: 'Cancel' });

//   submitButton.addEventListener('click', () => {
//     const goal = goalInput.value.trim();
//     const startDate = startDateInput.value;
//     const endDate = endDateInput.value;
//     const startingWeight = parseFloat(startingWeightInput.value);
//     const goalWeight = parseFloat(goalWeightInput.value);

//     if (!goal || !startDate || !endDate || isNaN(startingWeight) || isNaN(goalWeight)) {
//       alert('Please fill in all fields correctly.');
//       return;
//     }

//     let goals = JSON.parse(localStorage.getItem('goals')) || [];
//     goals.push({ goal, startDate, endDate, startingWeight, goalWeight, progress: 0 });
//     localStorage.setItem('goals', JSON.stringify(goals));
//     alert('Goal added successfully!');
//     goalInput.value = '';
//     startDateInput.value = '';
//     endDateInput.value = '';
//     startingWeightInput.value = '';
//     goalWeightInput.value = '';
//   });

//   cancelButton.addEventListener('click', () => {
//     alert('Cancelled');
//   });

//   const dashboardLink = createElement('a', {
//     href: '/#/dashboard',
//     textContent: 'Go to dashboard',
//     className: 'dashboardLink'
//   });

//   return createElement('div', {className: 'newGoalsDiv'}, [
//     titleWrapper,
//     goalWrapper,
//     startDateWrapper,
//     endDateWrapper,
//     startingWeightWrapper,
//     goalWeightWrapper,
//     submitButton,
//     cancelButton,
//     dashboardLink,
//   ]);
// }

// export default NewGoal;







import { createElement } from './utils';

function NewGoal() {
  const title = createElement('h2', { textContent: 'Create a new goal here' });
  const titleWrapper = createElement("div", {className: 'inputWrapper'}, [title])

  const goalLabel = createElement('label', { className: 'Label', textContent: 'Goal:', for: 'goalInput' });
  const goalInput = createElement('input', { id: 'goalInput', type: 'text' });
  const goalWrapper = createElement('div', { className: 'inputWrapper' }, [goalLabel, goalInput]);

  const startDateLabel = createElement('label', { className: 'Label', textContent: 'Start Date:', for: 'startDateInput' });
  const startDateInput = createElement('input', { id: 'startDateInput', type: 'date' });
  const startDateWrapper = createElement('div', {className: 'inputWrapper'}, [startDateLabel, startDateInput])

  const endDateLabel = createElement('label', { className: 'Label', textContent: 'End Date:', for: 'endDateInput' });
  const endDateInput = createElement('input', { id: 'endDateInput', type: 'date' });
  const endDateWrapper = createElement('div', { className: 'inputWrapper'}, [endDateLabel, endDateInput])

  const startingWeightLabel = createElement('label', { className: 'Label', textContent: 'Starting Weight (kg):', for: 'startingWeightInput'});
  const startingWeightInput = createElement('input', { id: 'startingWeightInput', type: 'number', step: '0.1' });
  const startingWeightWrapper = createElement('div', {className: 'inputWrapper'}, [startingWeightLabel, startingWeightInput])

  const goalWeightLabel = createElement('label', { className: 'Label', textContent: 'Goal Weight (kg):', for: 'goalWeightInput' });
  const goalWeightInput = createElement('input', { id: 'goalWeightInput', type: 'number', step: '0.1' });
  const goalWeightWrapper = createElement('div', {className: 'inputWrapper'}, [goalWeightLabel, goalWeightInput])

  const submitButton = createElement('button', { className: 'submitButton', textContent: 'Add Goal' });
  const cancelButton = createElement('button', { className: 'cancelButton', textContent: 'Cancel' });

  submitButton.addEventListener('click', () => {
    const goal = goalInput.value.trim();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const startingWeight = parseFloat(startingWeightInput.value);
    const goalWeight = parseFloat(goalWeightInput.value);

    if (!goal || !startDate || !endDate || isNaN(startingWeight) || isNaN(goalWeight)) {
      alert('Please fill in all fields correctly.');
      return;
    }

    let goals = JSON.parse(localStorage.getItem('goals')) || [];
    goals.push({ goal, startDate, endDate, startingWeight, goalWeight, progress: 0 });
    localStorage.setItem('goals', JSON.stringify(goals));
    alert('Goal added successfully!');
    goalInput.value = '';
    startDateInput.value = '';
    endDateInput.value = '';
    startingWeightInput.value = '';
    goalWeightInput.value = '';
  });

  cancelButton.addEventListener('click', () => {
    console.log('Cancelled');
    alert('Cancelled');
  });

  const dashboardLink = createElement('a', {
    href: '/#/dashboard',
    textContent: 'Go to dashboard',
    className: 'dashboardLink'
  });

  return createElement('div', {className: 'newGoalsDiv'}, [
    titleWrapper,
    goalWrapper,
    startDateWrapper,
    endDateWrapper,
    startingWeightWrapper,
    goalWeightWrapper,
    submitButton,
    cancelButton,
    dashboardLink,
  ]);
}

export default NewGoal;