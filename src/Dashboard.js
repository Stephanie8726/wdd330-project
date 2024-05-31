// import { createElement } from "./utils";

// function Dashboard() {
//   const title = createElement("h2", { textContent: "List of current goals" });
//   const titleWrapper = createElement("div", {className: 'goalList'}, [title]);
//   const addButton = createElement("button", {
//     id: "addButton",
//     textContent: "Add Goal",
//   });
//   const actionWrapper = createElement("div", { className: "addGoalButton" }, [
//     addButton,
//   ]);


//   const columnNumberHeader = createElement("div", { textContent: "#" }, []);
//   const GoalName = createElement("div", { textContent: "Goal Name" }, []);
//   const statusHeader = createElement("div", { textContent: "Progress %" }, []);
//   const editHeader = createElement("div", { textContent: "Edit" }, []);
//   const deleteHeader = createElement("div", { textContent: "Delete" }, []);
//   const headerWrapper = createElement(
//     "div",
//     { className: "goalsGrid goalHeader" },
//     [columnNumberHeader, GoalName, statusHeader, editHeader, deleteHeader]
//   );

//   const data = [
//     [1, "abs excercise", 25],
//     [2, "butt excercise", 20],
//     [3, "back excercise", 30],
//     [4, "Personalized", 35]
//   ];
//   const goalsTable = [];

//   for (let i = 0; i < data.length; i++) {
//     const numberRow = createElement("div", { textContent: i + 1 }, []);
//     const goalRow = createElement("div", { textContent: data[i][1] }, []);
//     const statusRow = createElement("div", { textContent: data[i][2] }, []);
//     const editButton = createElement("button", { textContent: "Edit" }, []);
//     const editRow = createElement("div", {}, [editButton]);
//     editRow.addEventListener("click", async () => {
//       window.location.hash = "#/tracking?id=" + data[i][0];
//     });

//     const deleteButton = createElement("button", { textContent: "Delete" }, []);
//     const deleteRow = createElement("div", {}, [deleteButton]);

//     goalsTable.push(...[numberRow, goalRow, statusRow, editRow, deleteRow]);
//   }

//   const bodyWrapper = createElement(
//     "div",
//     { className: "goalsGrid goalBody" },
//     goalsTable
//   );

//   const goalTableWrapper = createElement("div", {}, [
//     headerWrapper,
//     bodyWrapper,
//   ]);

//   addButton.addEventListener("click", async () => {
//     window.location.hash = "#/new-goal";
//   });

//   return createElement("div", { className: "dashboardDiv" }, [
//     titleWrapper,
//     actionWrapper,
//     goalTableWrapper,
//   ]);
// }

// export default Dashboard;






import { createElement } from "./utils";

function Dashboard() {
  const title = createElement("h2", { className: 'goalList', textContent: "List of current goals" });
  // const titleWrapper = createElement("div", { className: 'goalList' }, [title]);
  
  const addButton = createElement("button", {
    id: "addButton",
    textContent: "Add Goal",
    className: "addButton"
  });
  const actionWrapper = createElement("div", { className: "addGoalButton" }, [addButton]);

  const columnNumberHeader = createElement("div", { textContent: "#" }, []);
  const GoalName = createElement("div", { textContent: "Goal Name" }, []);
  const statusHeader = createElement("div", { textContent: "Progress %" }, []);
  const editHeader = createElement("div", { textContent: "Edit" }, []);
  const deleteHeader = createElement("div", { textContent: "Delete" }, []);
  const headerWrapper = createElement("div", { className: "goalsGrid goalHeader" }, [
    columnNumberHeader, GoalName, statusHeader, editHeader, deleteHeader
  ]);

  const data = [
    [1, "Abs Workout", 25],
    [2, "Butt Workout", 20],
    [3, "Back Workout", 30],
    [4, "Arms Workout", 35],
    [5, "Personalized", 40]
  ];
  const goalsTable = [];

  for (let i = 0; i < data.length; i++) {
    const numberRow = createElement("div", { textContent: i + 1 }, []);
    const goalRow = createElement("div", { textContent: data[i][1] }, []);
    const statusRow = createElement("div", { textContent: data[i][2] }, []);
    
    const editButton = createElement("button", { className: 'editButton', textContent: "Edit" }, []);
    const editRow = createElement("div", {}, [editButton]);
    editRow.addEventListener("click", async () => {
      window.location.hash = `#/tracking?goalId=${data[i][0]}&goalName=${encodeURIComponent(data[i][1])}`;
    });

    const deleteButton = createElement("button", { className: 'delete', textContent: "Delete" }, []);
    const deleteRow = createElement("div", {}, [deleteButton]);

    goalsTable.push(...[numberRow, goalRow, statusRow, editRow, deleteRow]);
  }

  const bodyWrapper = createElement("div", { className: "goalsGrid goalBody" }, goalsTable);
  const goalTableWrapper = createElement("div", {}, [headerWrapper, bodyWrapper]);

  addButton.addEventListener("click", async () => {
    window.location.hash = "#/new-goal";
  });

  return createElement("div", { className: "dashboardDiv" }, [
    title,
    actionWrapper,
    goalTableWrapper,
  ]);
}

export default Dashboard;
