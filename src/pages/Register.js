import axios from "axios";
import Navbar from "../components/Navbar";

const app = document.getElementById("app");

window.handleRegister = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    let password2 = event.target.password2.value;

    //validator
    if (!email || !password || !password2) {
        return alert("Silahkan masukkan data yang lengkap!");
    }

    if (password !== password2) {
        return alert("Password harus sama!");
    }

    axios
        .post("http://localhost:3000/register", {
            email: email,
            password: password,
        })
        .then((res) => {
            alert("Register Berhasil");
            window.location.href = "/login";
        })
        .catch((err) => {
            alert("Terjadi kesalahan");
        });
};

export default function Home() {
    document.title = "Register Page";

    app.innerHTML = `
    ${Navbar()}
    <div class="h-screen min-w-screen max-w-[1440px] mx-auto ">
    
        <form class="w-[320px] flex flex-col gap-4 mx-auto mt-10" onsubmit="handleRegister(event)">
            <h1 class="text-black text-4xl text-center font-bold">Register Page</h1>
            
            <div class="flex flex-col gap-2 text-light">
                <label for="email">Email</label>
                <input type="email" id="email" class="h-10 px-3 font-light outline-blue-600 outline-[2px] border-gray-300 border-[2px] rounded"/>
            </div>

            <div class="flex flex-col gap-2 text-light">
                <label for="password">Password</label>
                <input type="password" id="password" class="h-10 px-3 font-light outline-blue-600 outline-[2px] border-gray-300 border-[2px] rounded"/>
            </div>

            <div class="flex flex-col gap-2 text-light">
                <label for="password"2>Ulangi Password</label>
                <input type="password" id="password2" class="h-10 px-3 font-light outline-blue-600 outline-[2px] border-gray-300 border-[2px] rounded"/>
            </div>
            <button type="submit" class="h-10 w-[30%] bg-blue-800 text-white ml-auto rounded">Register</button>
        </form>
    </div>
    `;
}