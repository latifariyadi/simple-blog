import Navbar from "../components/Navbar";
import axios from "axios";
const app = document.getElementById("app");

window.handleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    axios
        .post("http://localhost:3000/login", {
            email: email,
            password: password,
        })
        .then((res) => {
            localStorage.setItem("userData", JSON.stringify(res.data));
            window.location.href = "/";
        })
        .catch((err) => {
            alert("Terjadi kesalahan!");
            console.error(err);
        });
};

export default function Home() {
    document.title = "Login Page";

    app.innerHTML = `
    ${Navbar()}
    <div class="h-screen min-w-screen max-w-[1440px] mx-auto ">
        <form class="w-[320px] flex flex-col gap-4 mx-auto mt-10 rounded" onsubmit="handleLogin(event)">

            <h1 class="text-black text-4xl text-center font-bold">Login Page</h1>
            
            <div class="flex flex-col gap-2 text-light">
                <label for="email">Email</label>
                <input type="email" id="email" class="h-10 px-3 font-light outline-blue-600 outline-[2px] border-gray-300 border-[2px] rounded"/>
            </div>

            <div class="flex flex-col gap-2 text-light">
                <label for="password">Password</label>
                <input type="password" id="password" class="h-10 px-3 font-light outline-blue-600 outline-[2px] border-gray-300 border-[2px] rounded"/>
            </div>

            <button type="submit" class="h-10 w-[30%] bg-blue-800 text-white ml-auto rounded">Login</button>
            
        </form>
    </div>
    `;
}