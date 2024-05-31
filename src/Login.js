import { createElement } from "./utils";

function Login() {
  const title = createElement("h2", { textContent: "Login Page" });

  const labelOne = createElement("label", { textContent: "User Name" });

  const userName = createElement("input", { id: "userName" });

  const inputOne = createElement("div", { className: "inputDiv" }, [
    labelOne,
    userName,
  ]);

  const labelTwo = createElement("label", { textContent: "Password" });

  const password = createElement("input", { id: "password", type: "password" });

  const inputPassword = createElement("div", { className: "inputDiv" }, [
    labelTwo,
    password,
  ]);

  const dashboardLink = createElement("a", {
    href: "/#/dashboard",
    textContent: "go to dashboard",
  });

  const loginButton = createElement("button", {
    id: "loginButton",
    textContent: "Login",
    className: 'loginButton',
  });

  const buttonDiv = createElement("div", {}, [loginButton]);

  const errorP = createElement("p", {
    className: "loginError",
    id: "loginError",
  });

  // this is user
  // "Van15"

  // password
  // "fOMQgKBh2YCOczp"

  const message = createElement("span", { className: 'demoMessage', textContent: "Demo User: Van15, Demo Password: fOMQgKBh2YCOczp" });

  loginButton.addEventListener("click", async () => {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    console.log(userName, password);

    const response = await fetch(
      "https://665005a5ec9b4a4a60306b5e.mockapi.io/data-tracker/users"
    );

    const data = await response.json();
    const result = data.find(
      (d) => d.username === userName && d.password === password
    );
    if (result) {
      //  verify user exist in mock data
      window.location.hash = "#/dashboard";
    } else {
      errorP.innerText = "Login unsuccessfully";
    }

    console.log(data);
  });
  return createElement("div", { className: "loginDiv" }, [
    title,
    inputOne,
    inputPassword,
    buttonDiv,
    errorP,
    message
  ]);
}

export default Login;
