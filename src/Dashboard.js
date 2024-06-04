import { createElement } from "./utils";

function createTable(data, refreshDashboard) {
  const goalsTable = [];

  for (let i = 0; i < data.length; i++) {
    const numberRow = createElement("div", { textContent: i + 1 }, []);
    const goalRow = createElement("div", { textContent: data[i].name }, []);
    const statusRow = createElement("div", { textContent: data[i].progress }, []);

    const editButton = createElement("button", { className: "editButton", textContent: "Edit" }, []);
    const editRow = createElement("div", {}, [editButton]);
    editRow.addEventListener("click", async () => {
      window.currentTrackingGoal = data[i];
      window.location.hash = `#/tracking?goalId=${data[i].id}&goalName=${encodeURIComponent(data[i].name)}`;
    });

    const deleteButton = createElement("button", { className: "delete", textContent: "Delete" }, []);
    const deleteRow = createElement("div", {}, [deleteButton]);
    deleteRow.addEventListener("click", async () => {
      const confirmDelete = confirm(`Are you sure you want to delete the goal "${data[i].name}"?`);
      if (confirmDelete) {
        try {
          await fetch(`https://664d5b4fede9a2b556534a27.mockapi.io/api/fit/activities/${data[i].id}`, {
            method: 'DELETE'
          });
          alert(`Successfully deleted the goal "${data[i].name}".`);
          refreshDashboard(); // Refresh the dashboard to reflect the deletion
        } catch (error) {
          console.error("Error deleting goal:", error);
        }
      }
    });

    goalsTable.push(...[numberRow, goalRow, statusRow, editRow, deleteRow]);
  }
  return goalsTable;
}

function Dashboard() {
  console.log(window.userIdSession);

  const title = createElement("h2", {
    className: "goalList",
    textContent: "List of current goals",
  });

  const addButton = createElement("button", {
    id: "addButton",
    textContent: "Add Personalized Goal",
    className: "addButton",
  });
  const actionWrapper = createElement("div", { className: "addGoalButton" }, [addButton]);

  const columnNumberHeader = createElement("div", { textContent: "#" }, []);
  const GoalName = createElement("div", { textContent: "Goal Name" }, []);
  const statusHeader = createElement("div", { textContent: "Progress %" }, []);
  const editHeader = createElement("div", { textContent: "Edit" }, []);
  const deleteHeader = createElement("div", { textContent: "Delete" }, []);
  const headerWrapper = createElement("div", { className: "goalsGrid goalHeader" }, [columnNumberHeader, GoalName, statusHeader, editHeader, deleteHeader]);

  const bodyWrapper = createElement("div", { className: "goalsGrid goalBody" }, []);

  const refreshDashboard = () => {
    bodyWrapper.innerHTML = ""; // Clear the current content
    fetch("https://664d5b4fede9a2b556534a27.mockapi.io/api/fit/activities")
      .then((r) => r.json())
      .then((activities) => {
        const userId = parseInt(window.userIdSession);
        const userActivities = activities.filter(
          (a) => a.userId === userId || a.userId === 7 || a.userId === 1
        );
        const bodyTable = createTable(userActivities, refreshDashboard);

        bodyTable.map((bt) => bodyWrapper.appendChild(bt));
      });
  };

  refreshDashboard(); // Initial load

  const goalTableWrapper = createElement("div", {}, [
    headerWrapper,
    bodyWrapper,
  ]);

  addButton.addEventListener("click", async () => {
    window.location.hash = "#/new-goal"; // Route to the new goal page
  });

  return createElement("div", { className: "dashboardDiv" }, [
    title,
    actionWrapper,
    goalTableWrapper,
  ]);
}

export default Dashboard;

