import { createElement } from "./utils";

function NewGoal() {
  const title = createElement("h2", { textContent: "Add a new goal here" });
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
    placeholder: "e.g. siwmming 5 km in 1 hour",
  });
  const goalWrapper = createElement("div", { className: "inputWrapper" }, [
    goalLabel,
    goalInput,
  ]);

  const descriptionLabel = createElement("label", {
    className: "descriptionLabel",
    textContent: "Goal Description: ",
  });
  const descriptionTextArea = createElement("textarea", {id: "goalDescription", placeholder: "In order to swim 5 km I will..."});
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

  const buttonWrapper = createElement("div", {className: "buttonWrapperDiv"}, [saveButton, cancelButton]);

  saveButton.addEventListener("click", () => {
    const goal = goalInput.value.trim();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const description = descriptionTextArea.value.trim();

    if (
      !goal ||
      !startDate ||
      !endDate ||
      !description
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }

    let goals = JSON.parse(localStorage.getItem("goals")) || [];
    goals.push({
      goal,
      startDate,
      endDate,
      description,
      progress: 0,
    });
    localStorage.setItem("goals", JSON.stringify(goals));
    alert("Goal added successfully!");
    goalInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
    description.value = "";
    window.location.hash = "#/dashboard";
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
    buttonWrapper,
    dashboardLink,
  ]);
}

export default NewGoal;