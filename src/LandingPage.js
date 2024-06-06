import { createElement } from "./utils";

function LandingPage() {
  const heroImage = createElement("img", {
    src: "https://www.healthwellbeing.com/wp-content/uploads/2021/03/MAIN-IMAGE-RESIZED-shutterstock_499280881-1300x600.jpg",
    width: "900",
    className: "heroImage",
  });

  const loginLink = createElement("a", {
    href: "/#/login",
    textContent: "Login",
  });

  const loginDiv = createElement(
    "div",
    {
      className: "loginLinks",
    },
    [loginLink]
  );

  const descriptionOne = createElement("p", {
    textContent:
      "This is the perfect site for you to set your training goal and verify the progress.",
  });

  const descriptionTwo = createElement("p", {
    textContent:
      "Start by going into the login page and enter your credentials, then you'll be redirected to our dashboard where you can set new goals, set and track the progress of them.",
  });

  const quoteDiv = createElement("blockquote", {}, [
    descriptionOne,
    descriptionTwo,
  ]);

  return createElement("div", { className: "landing" }, [
    heroImage,
    loginDiv,
    quoteDiv,
  ]);
}

export default LandingPage;