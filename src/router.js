import { createElement } from "./utils";
import Landing from "./LandingPage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NewGoal from "./NewGoal";
import Tracking from "./Tracking";
import RemindersAndNotifications from "./remindersAndNotifications.js"; // Add .js extension

export function initRouter(mainView) {
  function updateView(newView) {
    mainView.innerHTML = "";
    mainView.appendChild(newView);
  }

  function hashToRoute(hash) {
    switch (hash) {
      case "#/landing":
        updateView(Landing());
        break;
      case "#/login":
        updateView(Login());
        break;
      case "#/dashboard":
        updateView(Dashboard());
        break;
      case "#/new-goal":
        updateView(NewGoal());
        break;
      case "#/tracking":
        updateView(Tracking());
        break;
      case "#/notifications":
        updateView(RemindersAndNotifications());
        break;
      default:
        updateView(createElement("h3", { textContent: "404 Page Not Found" }));
        break;
    }
  }
  const defaultHash = window.location.hash || "#/landing";

  hashToRoute(defaultHash);

  window.addEventListener("hashchange", (evt) => {
    const newUrl = new URL(evt.newURL);
    const hash = newUrl.hash;

    hashToRoute(hash.split('?')[0]);
  });
}