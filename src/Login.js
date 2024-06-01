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

  // const dashboardLink = createElement("a", {
  //   href: "/#/dashboard",
  //   textContent: "go to dashboard",
  // });

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


  const message = createElement("span", { className: 'demoMessage', textContent: "Demo User: stephanie, Demo Password: 12345678" });

  loginButton.addEventListener("click", async () => {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    console.log(userName, password);

    const response = await fetch(
      "https://664d5b4fede9a2b556534a27.mockapi.io/api/fit/user"
    );

    const data = await response.json();
    const result = data.find(
      (d) => d.userName === userName && d.password === password
    );
    if (result) {
      //  verify user exist in mock data
      window.location.hash = "#/dashboard?userId";
      window.userIdSession = result.id;
  
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
