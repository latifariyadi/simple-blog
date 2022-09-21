window.handleLogout = () => {
    //clear local storage
    localStorage.clear();

    //kembalikan user ke login page
    window.location.href = "/login";
};

export default function Navbar() {
    let userData = localStorage.getItem("userData");

    return `
    <nav class="w-full h-16 flex bg-slate-300">
        <div class="w-full max-w-[1440px] flex items-center justify-start px-4">

            <img src="./logo.svg" href="./logo.svg"/>

            <h1 class="text-cyan-800 text-2xl font-semibold select-none cursor-pointer ml-2">Jvalley Blog</h1>

            ${
              userData
                ? `
            <menu class="flex gap-4 ml-auto items-center">
                <a href="/" class="text-cyan-800">Home</a>
                <a href="/addBlog" class="text-cyan-800">Add blog</a>
                <a class="text-cyan-800 cursor-pointer" onclick="handleLogout()">Logout</a>
                <span class="px-4 py-2 rounded-full bg-white">
                ${JSON.parse(userData).user.email}</span>
                </span>
            </menu>`
                : `
            <menu class="flex gap-4 ml-auto ">
                <a href="/" class="text-cyan-800">Home</a>
                <a href="/register" class="text-cyan-800">Register</a>
                <a href="/login" class="text-cyan-800">Login</a>
            </menu>
            `
            }
            
        </div>
    </nav>
    `;
}