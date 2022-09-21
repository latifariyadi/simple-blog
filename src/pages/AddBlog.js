import Navbar from "../components/Navbar";
import axios from "axios";

const app = document.getElementById("app");

window.handleBlog = (event) => {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData"));
    const judul = event.target.judul.value;
    const img = event.target.img.value;
    const content = event.target.content.value;

    axios
        .post("http://localhost:3000/blogs", {
            userId: userData.user.id,
            author: userData.user.email,
            judul: judul,
            img: img,
            content: content,
            createDate: new Date().toLocaleDateString(),
        })
        .then((res) => {
            alert("Berhasil tambah blog");
            window.location.href = "/";
        })
        .catch((err) => {
            alert("Terjadi kesalahan");
            console.info(err);
        });
};

export default function addBlog() {
    app.innerHTML = `
    ${Navbar()}
    <div class="h-screen min-w-screen max-w-[1440px] mx-auto bg-slate-100">
        
        <form class="w-[500px] flex flex-col gap-4 mx-auto pt-8" onsubmit="handleBlog(event)">

            <div class="flex flex-col gap-2">
                <label for="judul">Judul</label>
                <input type="text" class="w-full px-3 h-10 outline-blue-600 outline-[2px] border-gray-300 border-[2px] rounded" id="judul"/>
            </div>

            <div class="flex flex-col gap-2">
                <label for="img">Link Gambar</label>
                <input type="text" class="w-full px-3 h-10 outline-blue-600 outline-[2px] border-gray-300 border-[2px] rounded" id="img"/>
            </div>

            <div class="flex flex-col gap-2">
                <label for="content">Konten</label>
                <textarea class="w-full p-3 h-[200px] outline-blue-600 outline-[2px] border-gray-300 border-[2px] rounded" id="content"></textarea>
            </div>

            <button type="submit" class="h-10 w-[30%] ml-auto bg-blue-500 text-white">Submit</button>

        </form>

    </div>
    `;
}