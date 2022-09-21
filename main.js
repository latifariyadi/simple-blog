import Home from "./src/pages/Home";
import Error from "./src/pages/404";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import AddBlog from "./src/pages/AddBlog";
import "./style.css";

const page = window.location.pathname;
const userData = localStorage.getItem("userData");

switch (page) {
    case "/":
        Home();
        break;

    case "/login":
        userData ? (window.location.href = "/") : Login();
        break;

    case "/register":
        userData ? (window.location.href = "/") : Register();
        break;

    case "/addBlog":
        userData ? AddBlog() : (window.location.href = "/login");
        break;

    default:
        Error();
}