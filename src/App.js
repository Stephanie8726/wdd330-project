import { createElement } from "./utils";
import { initRouter } from "./router";

function Header() {
  const img = createElement("img", {src: ("https://amfranquicias.mx/wp-content/uploads/2017/10/SMARTFIT-2023.jpg")})
  const appTitle = createElement("div", {
    textContent: "My Fitness Goal Tracker Project",
    className: "heading",
  });

  return createElement("header", {}, [img, appTitle]);
}

function Footer() {
  const copyright = createElement("div", {
    textContent: `Copyright © ${new Date().getFullYear()}`,
  });

  return createElement("footer", {}, [copyright]);
}

function App() {
  const main = createElement("main", {}, []);

  initRouter(main);

  return createElement("div", { className: 'mainDiv'}, [Header(), main, Footer()]);
}

export default App;













// import { createElement } from "./utils";
// import { initRouter } from "./router";

// function Header() {
//   const img = createElement("img", {
//     src: "https://amfranquicias.mx/wp-content/uploads/2017/10/SMARTFIT-2023.jpg",
//   });

//   const appTitle = createElement("div", {
//     textContent: "Fitness Goal Tracker",
//     className: "heading",
//   });

//   const loginLink = createElement("a", {
//     href: "/#/login",
//     textContent: "Login",
//   });

//   const dashboardLink = createElement("a", {
//     href: "/#/dashboard",
//     textContent: "Dashboard",
//   });

//   const newGoalLink = createElement("a", {
//     href: "/#/new-goal",
//     textContent: "Goal",
//   });

//   const trackingLink = createElement("a", {
//     href: "/#/tracking",
//     textContent: "Tracking",
//   });

//   const menuButton = createElement("button", {
//     textContent: "☰",
//     className: "menuButton",
//   });

//   const navDiv = createElement(
//     "nav",
//     { className: "navLinks" },
//     [loginLink, dashboardLink, newGoalLink, trackingLink]
//   );

//   menuButton.addEventListener('click', () => {
//     navDiv.classList.toggle('open');
//     menuButton.classList.toggle('open');
//   });

//   return createElement("header", {}, [img, appTitle, navDiv, menuButton]);
// }

// function Footer() {
//   const copyright = createElement("div", {
//     textContent: `Copyright © ${new Date().getFullYear()}`,
//   });

//   return createElement("footer", {}, [copyright]);
// }

// function App() {
//   const main = createElement("main", {}, []);

//   initRouter(main);

//   return createElement("div", { className: 'mainDiv' }, [Header(), main, Footer()]);
// }

// export default App;
