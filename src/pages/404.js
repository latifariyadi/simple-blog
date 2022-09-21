const app = document.getElementById('app');

export default function Error() {
    app.innerHTML = `
    <div class="h-screen min-w-screen max-w-[1440px]">
        <h1 class="text-cyan-200">Page Not Found</h1>
    </div>
    `
}