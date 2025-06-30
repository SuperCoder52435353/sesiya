const ADMIN_PASSWORD = "PASSWORDABDURAXMON";
let users = [
    { id: 1, name: "Ali", status: "active", activity: "AI bilan suhbat", lastActive: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }), messagesSent: 5, transactions: 2, tempBlockUntil: null },
    { id: 2, name: "Vali", status: "active", activity: "Buxgalteriya", lastActive: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }), messagesSent: 3, transactions: 1, tempBlockUntil: null }
];
let messages = [
    { id: 1, user: "Ali", text: "Sayt juda zo‘r!", timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) },
    { id: 2, user: "Vali", text: "Yangi funksiya qo‘shing.", timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) }
];
let logs = [
    { id: 1, user: "Ali", action: "AI savol berdi", timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) },
    { id: 2, user: "Vali", action: "Tranzaksiya qo‘shdi", timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) }
];

function loginAdmin() {
    const password = document.getElementById("adminPassword")?.value;
    if (!password) return;

    if (password === ADMIN_PASSWORD) {
        document.getElementById("adminLogin")?.classList.add("hidden");
        document.getElementById("adminContent")?.classList.remove("hidden");
        loadUsers();
        loadMessages();
        loadLogs();
        initStatsChart();
    } else {
        alert(localStorage.getItem("language") === "en" ? "Incorrect password!" : localStorage.getItem("language") === "ru" ? "Неверный пароль!" : "Noto‘g‘ri parol!");
    }
}

function loadUsers() {
    const userList = document.getElementById("userList");
    if (!userList) return;

    userList.innerHTML = users.map(user => `
        <div class="p-2 border rounded-lg fade-in">
            ID: ${user.id}, Ism: ${user.name}, Status: ${user.status}, Faoliyat: ${user.activity}, Oxirgi faol: ${user.lastActive}, Xabarlar: ${user.messagesSent}, Tranzaksiyalar: ${user.transactions}, Vaqtinchalik blok: ${user.tempBlockUntil || "Yo‘q"}
            <button onclick="blockUser(${user.id})" class="bg-red-600 text-white p-1 rounded-lg ml-2 hover:bg-red-700 transition">Bloklash</button>
            <button onclick="tempBlockUser(${user.id})" class="bg-yellow-600 text-white p-1 rounded-lg ml-2 hover:bg-yellow-700 transition">Vaqtincha Bloklash</button>
            <button onclick="resetUser(${user.id})" class="bg-blue-600 text-white p-1 rounded-lg ml-2 hover:bg-blue-700 transition">Qayta tiklash</button>
        </div>
    `).join("");
}

function blockUser(id) {
    users = users.map(user => user.id === id ? { ...user, status: "blocked", lastActive: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }), tempBlockUntil: null } : user);
    logs.push({ id: logs.length + 1, user: users.find(u => u.id === id).name, action: "Bloklandi", timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) });
    loadUsers();
    loadLogs();
    alert(localStorage.getItem("language") === "en" ? `User ${id} blocked!` : localStorage.getItem("language") === "ru" ? `Пользователь ${id} заблокирован!` : `Foydalanuvchi ${id} bloklandi!`);
}

function tempBlockUser(id) {
    const days = prompt(localStorage.getItem("language") === "en" ? "Enter days for temporary block:" : localStorage.getItem("language") === "ru" ? "Введите дни для временной блокировки:" : "Vaqtincha bloklash uchun kunlar sonini kiriting:");
    if (!days || isNaN(days)) return;

    const blockUntil = new Date();
    blockUntil.setDate(blockUntil.getDate() + parseInt(days));
    users = users.map(user => user.id === id ? { ...user, status: "temp_blocked", tempBlockUntil: blockUntil.toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }), lastActive: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) } : user);
    logs.push({ id: logs.length + 1, user: users.find(u => u.id === id).name, action: `Vaqtincha bloklandi (${days} kun)`, timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) });
    loadUsers();
    loadLogs();
    alert(localStorage.getItem("language") === "en" ? `User ${id} temporarily blocked for ${days} days!` : localStorage.getItem("language") === "ru" ? `Пользователь ${id} временно заблокирован на ${days} дней!` : `Foydalanuvchi ${id} ${days} kunga vaqtincha bloklandi!`);
}

function resetUser(id) {
    users = users.map(user => user.id === id ? { ...user, status: "active", tempBlockUntil: null, lastActive: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) } : user);
    logs.push({ id: logs.length + 1, user: users.find(u => u.id === id).name, action: "Qayta tiklandi", timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) });
    loadUsers();
    loadLogs();
    alert(localStorage.getItem("language") === "en" ? `User ${id} restored!` : localStorage.getItem("language") === "ru" ? `Пользователь ${id} восстановлен!` : `Foydalanuvchi ${id} qayta tiklandi!`);
}

function loadMessages() {
    const messageList = document.getElementById("adminMessages");
    if (!messageList) return;

    messageList.innerHTML = messages.map(msg => `
        <div class="p-2 border rounded-lg fade-in">
            ID: ${msg.id}, Foydalanuvchi: ${msg.user}, Xabar: ${msg.text}, Vaqt: ${msg.timestamp}
            <button onclick="deleteMessage(${msg.id})" class="bg-red-600 text-white p-1 rounded-lg ml-2 hover:bg-red-700 transition">O‘chirish</button>
        </div>
    `).join("");
}

function deleteMessage(id) {
    messages = messages.filter(msg => msg.id !== id);
    logs.push({ id: logs.length + 1, user: "Admin", action: `Xabar ${id} o‘chirildi`, timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) });
    loadMessages();
    loadLogs();
    alert(localStorage.getItem("language") === "en" ? `Message ${id} deleted!` : localStorage.getItem("language") === "ru" ? `Сообщение ${id} удалено!` : `Xabar ${id} o‘chirildi!`);
}

function loadLogs() {
    const logList = document.getElementById("userLogs");
    if (!logList) return;

    logList.innerHTML = logs.map(log => `
        <div class="p-2 border rounded-lg fade-in">
            ID: ${log.id}, Foydalanuvchi: ${log.user}, Harakat: ${log.action}, Vaqt: ${log.timestamp}
        </div>
    `).join("");
}

function initStatsChart() {
    const ctx = document.getElementById("userStatsChart")?.getContext("2d");
    if (!ctx) return;

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: users.map(u => u.name),
            datasets: [{
                label: "Xabarlar va tranzaksiyalar",
                data: users.map(u => u.messagesSent + u.transactions),
                backgroundColor: ["#4f46e5", "#22c55e", "#f59e0b", "#ef4444"],
                borderColor: ["#3b82f6", "#16a34a", "#d97706", "#dc2626"],
                borderWidth: 1
            }]
        },
        options: {
            animation: { duration: 1000, easing: "easeOutQuart" }
        }
    });
}

function setupAdminPanel() {
    const adminLoginBtn = document.getElementById("adminLoginBtn");
    const closeAdmin = document.getElementById("closeAdmin");
    if (adminLoginBtn) adminLoginBtn.addEventListener("click", loginAdmin);
    if (closeAdmin) {
        closeAdmin.textContent = localStorage.getItem("language") === "en" ? "Close" : localStorage.getItem("language") === "ru" ? "Закрыть" : "Yopish";
        closeAdmin.addEventListener("click", () => window.location.href = "index.html");
    }
    const contactAdminForm = document.getElementById("contactAdminForm");
    if (contactAdminForm) {
        contactAdminForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const message = document.getElementById("adminMessage")?.value;
            const user = JSON.parse(localStorage.getItem("user") || "{}").firstName || "Foydalanuvchi";
            if (!message) return;

            messages.push({ id: messages.length + 1, user, text: message, timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) });
            users = users.map(u => u.name === user ? { ...u, messagesSent: (u.messagesSent || 0) + 1 } : user);
            logs.push({ id: logs.length + 1, user, action: "Admin xabar yubordi", timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) });
            document.getElementById("contactAdminModal")?.classList.add("hidden");
            contactAdminForm.reset();
            alert(localStorage.getItem("language") === "en" ? "Message sent!" : localStorage.getItem("language") === "ru" ? "Сообщение отправлено!" : "Xabar yuborildi!");
        });
    }
    document.getElementById("exportAllDataBtn")?.addEventListener("click", () => {
        const data = { users, messages, logs, accounting: accountingData };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "abduraxmon_web_data.json";
        a.click();
        URL.revokeObjectURL(url);
    });
    document.getElementById("clearLogsBtn")?.addEventListener("click", () => {
        logs = [];
        loadLogs();
        alert(localStorage.getItem("language") === "en" ? "Logs cleared!" : localStorage.getItem("language") === "ru" ? "Журнал очищен!" : "Jurnal tozalandi!");
    });
}

document.addEventListener("DOMContentLoaded", setupAdminPanel);