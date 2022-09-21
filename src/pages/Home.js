import axios from "axios";
import Navbar from "../components/Navbar";

const app = document.getElementById("app");

export default function Home() {
    //ubah document title
    document.title = "Home Page";

    axios.get("http://localhost:3000/blogs").then((res) => {
        app.innerHTML += Navbar();
        res.data.forEach((e) => {
            app.innerHTML += `
                <div class="flex flex-col w-[1200px] bg-slate-100 p-6 my-4 mx-auto">
                    <h1 class="font-bold text-2xl text-blue-600">${e.judul}</h1>
                    <small>${e.author}</small>
                    <img src="${e.img}" alt="${e.judul}" class="w-full h-[600px] object-cover my-4"/>
                    <p>${e.content}</p>
                </div>
            `;
        });
    });

    // app.innerHTML = `
    // ${Navbar()}
    // <div class="h-screen min-w-screen max-w-[1440px] mx-auto">
    //     <h1 class="text-cyan-600 px-4">Home Page</h1>
    // </div>
    // `;
}