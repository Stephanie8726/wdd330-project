import { createElement } from "./utils";

function NewGoal() {
  const data = window.currentTrackingGoal;
  console.log(window.currentTrackingGoal);

  const title = createElement("h2", { textContent: "Tracking Goal Progress" });
  const titleWrapper = createElement("div", { className: "inputWrapper" }, [
    title,
  ]);

  const goalLabel = createElement("label", {
    className: "Label",
    textContent: "Goal Name:",
    for: "goalInput",
  });

  const goalInput = createElement("input", {
    id: "goalInput",
    type: "text",
    value: data.name,
    readOnly: true,
  });

  const goalWrapper = createElement("div", { className: "inputWrapper" }, [
    goalLabel,
    goalInput,
  ]);

  const descriptionLabel = createElement("label", {
    className: "descriptionLabel",
    textContent: "Task Accomplished: ",
  });
  const descriptionTextArea = createElement("textarea", {
    id: "goalDescription",
    placeholder: "I was able to perform the target goal which is...",
  });
  const descriptionWrapper = createElement(
    "div",
    { className: "inputWrapper" },
    [descriptionLabel, descriptionTextArea]
  );

  const startDateLabel = createElement("label", {
    className: "Label",
    textContent: "Start Date:",
    for: "startDateInput",
  });
  const startDateInput = createElement("input", {
    id: "startDateInput",
    type: "date",
  });
  const startDateWrapper = createElement("div", { className: "inputWrapper" }, [
    startDateLabel,
    startDateInput,
  ]);

  const endDateLabel = createElement("label", {
    className: "Label",
    textContent: "End Date:",
    for: "endDateInput",
  });
  const endDateInput = createElement("input", {
    id: "endDateInput",
    type: "date",
  });
  const endDateWrapper = createElement("div", { className: "inputWrapper" }, [
    endDateLabel,
    endDateInput,
  ]);

  const timesCompletedLabel = createElement("label", {
    className: "Label",
    textContent: "Number of Times Completed:",
    for: "timesCompletedInput",
  });
  const timesCompletedInput = createElement("input", {
    id: "timesCompletedInput",
    type: "number",
    min: "0",
    readOnly: true,
  });
  const timesCompletedWrapper = createElement(
    "div",
    { className: "inputWrapper" },
    [timesCompletedLabel, timesCompletedInput]
  );

  const saveButton = createElement("button", {
    id: "saveButton",
    textContent: "Save",
    className: "saveButton",
  });

  const cancelButton = createElement("button", {
    id: "cancelButton",
    textContent: "Cancel",
    className: "cancelButton",
  });

  const buttonWrapper = createElement(
    "div",
    { className: "buttonWrapperDiv" },
    [saveButton, cancelButton]
  );

  saveButton.addEventListener("click", () => {
    const goal = goalInput.value.trim();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const description = descriptionTextArea.value.trim();
    const timesCompleted = parseInt(timesCompletedInput.value);

    if (!goal || !startDate || !endDate || !description) {
      alert("Please fill in all fields correctly.");
      return;
    }

    // Increment the number of times completed for this goal
    let timesCompletedCount = parseInt(localStorage.getItem(goal)) || 0;
    timesCompletedCount++;
    localStorage.setItem(goal, timesCompletedCount);

    // Calculate the progress percentage based on the number of times completed
    const totalDays = Math.ceil(
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
    );
    const progressPercentage = Math.min(
      100,
      (timesCompletedCount / totalDays) * 100
    );

    let goals = JSON.parse(localStorage.getItem("goals")) || [];
    const existingGoalIndex = goals.findIndex((g) => g.goal === goal);
    if (existingGoalIndex !== -1) {
      // If goal already exists, update its progress
      goals[existingGoalIndex].progress = progressPercentage;
    } else {
      // If goal is new, add it to the list
      goals.push({
        goal,
        startDate,
        endDate,
        description,
        progress: progressPercentage,
      });
    }
    localStorage.setItem("goals", JSON.stringify(goals));

    let message = `${goal} \nProgress: ${progressPercentage.toFixed(1)}%\n`;
    message += `Number of Times Completed: ${timesCompletedCount}\n`;
    alert(message);

    goalInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
    descriptionTextArea.value = "";
    timesCompletedInput.value = "0";
    window.location.hash = "#/dashboard";
  });

  cancelButton.addEventListener("click", () => {
    alert("Changes not saved");
    // Reset input fields
    startDateInput.value = "";
    endDateInput.value = "";
    descriptionTextArea.value = "";
  });

  const dashboardLink = createElement("a", {
    href: "/#/dashboard",
    textContent: "Go to dashboard",
    className: "dashboardLink",
  });

  return createElement("div", { className: "newGoalsDiv" }, [
    titleWrapper,
    goalWrapper,
    descriptionWrapper,
    startDateWrapper,
    endDateWrapper,
    timesCompletedWrapper,
    buttonWrapper,
    dashboardLink,
  ]);
}

export default NewGoal;
