const accountingData = {
    assets: 1000000,
    liabilities: 500000,
    income: 200000,
    expenses: 150000,
    debit: 0,
    credit: 0,
    interestRate: 5,
    debt: 100000,
    transactions: []
};

function calculateCompoundInterest(principal, rate, time) {
    return principal * Math.pow(1 + rate / 100, time);
}

function calculateSimpleInterest(principal, rate, time) {
    return principal * (1 + (rate / 100) * time);
}

function calculateDebtRepayment(principal, rate, time) {
    const monthlyRate = rate / 100 / 12;
    const n = time * 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
}

function updateBalanceTable() {
    const balanceTable = document.getElementById("balanceTable");
    if (!balanceTable) return;

    balanceTable.innerHTML = `
        <tr class="fade-in"><td class="p-2 border">Aktivlar</td><td class="p-2 border">${accountingData.assets.toLocaleString("uz-UZ")} USD</td></tr>
        <tr class="fade-in"><td class="p-2 border">Passivlar</td><td class="p-2 border">${accountingData.liabilities.toLocaleString("uz-UZ")} USD</td></tr>
        <tr class="fade-in"><td class="p-2 border">Daromad</td><td class="p-2 border">${accountingData.income.toLocaleString("uz-UZ")} USD</td></tr>
        <tr class="fade-in"><td class="p-2 border">Xarajatlar</td><td class="p-2 border">${accountingData.expenses.toLocaleString("uz-UZ")} USD</td></tr>
        <tr class="fade-in"><td class="p-2 border">Debet</td><td class="p-2 border">${accountingData.debit.toLocaleString("uz-UZ")} USD</td></tr>
        <tr class="fade-in"><td class="p-2 border">Kredit</td><td class="p-2 border">${accountingData.credit.toLocaleString("uz-UZ")} USD</td></tr>
        <tr class="fade-in"><td class="p-2 border">Qarz</td><td class="p-2 border">${accountingData.debt.toLocaleString("uz-UZ")} USD</td></tr>
        <tr class="fade-in"><td class="p-2 border">Foiz (yillik)</td><td class="p-2 border">${calculateCompoundInterest(accountingData.assets, accountingData.interestRate, 1).toLocaleString("uz-UZ")} USD</td></tr>
    `;
}

function updateReports() {
    const reportContent = document.getElementById("reportContent");
    if (!reportContent) return;

    const netWorth = accountingData.assets - accountingData.liabilities;
    const profit = accountingData.income - accountingData.expenses;
    const debitCreditBalance = accountingData.debit - accountingData.credit;
    reportContent.innerHTML = `
        <p class="fade-in">Sof boylik: ${netWorth.toLocaleString("uz-UZ")} USD</p>
        <p class="fade-in">Foyda: ${profit.toLocaleString("uz-UZ")} USD</p>
        <p class="fade-in">Debet/Kredit balansi: ${debitCreditBalance.toLocaleString("uz-UZ")} USD</p>
        <p class="fade-in">Qarzni to‘lash (oylik, 5 yil, ${accountingData.interestRate}%): ${calculateDebtRepayment(accountingData.debt, accountingData.interestRate, 5).toLocaleString("uz-UZ")} USD</p>
    `;
}

function addTransaction(e) {
    e.preventDefault();
    const desc = document.getElementById("transactionDesc")?.value;
    const amount = parseFloat(document.getElementById("transactionAmount")?.value);
    const type = document.getElementById("transactionType")?.value;

    if (!desc || isNaN(amount) || !type) return;

    accountingData[type] += amount;
    accountingData.transactions.push({ desc, amount, type, timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) });
    const transactionList = document.getElementById("transactionList");
    if (transactionList) {
        transactionList.innerHTML += `<p class="fade-in">${desc}: ${amount.toLocaleString("uz-UZ")} USD (${type}) - ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}</p>`;
    }
    updateBalanceTable();
    updateReports();
    document.getElementById("transactionForm").reset();
}

function calculateCustom(e) {
    e.preventDefault();
    const principal = parseFloat(document.getElementById("principal")?.value);
    const rate = parseFloat(document.getElementById("rate")?.value);
    const time = parseInt(document.getElementById("time")?.value);
    const calcType = document.getElementById("calcType")?.value;
    const resultDiv = document.getElementById("calculationResult");

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || !resultDiv) return;

    let result;
    if (calcType === "compound") {
        result = calculateCompoundInterest(principal, rate, time);
    } else if (calcType === "simple") {
        result = calculateSimpleInterest(principal, rate, time);
    } else {
        result = calculateDebtRepayment(principal, rate, time);
    }
    resultDiv.innerHTML = `<p class="fade-in">Natija: ${principal.toLocaleString("uz-UZ")} USD, ${rate}% ${calcType === "debt" ? "qarz to'lash" : "foiz"} bilan ${time} yilda ${result.toLocaleString("uz-UZ")} USD bo‘ladi!</p>`;
}

function initChart() {
    const ctx = document.getElementById("analyticsChart")?.getContext("2d");
    if (!ctx) return;

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Aktivlar", "Passivlar", "Daromad", "Xarajatlar", "Debet", "Kredit", "Qarz"],
            datasets: [{
                label: "Buxgalteriya ma'lumotlari",
                data: [
                    accountingData.assets,
                    accountingData.liabilities,
                    accountingData.income,
                    accountingData.expenses,
                    accountingData.debit,
                    accountingData.credit,
                    accountingData.debt
                ],
                backgroundColor: ["#4f46e5", "#ef4444", "#22c55e", "#f59e0b", "#8b5cf6", "#ec4899", "#6b7280"],
                borderColor: ["#3b82f6", "#dc2626", "#16a34a", "#d97706", "#7c3aed", "#db2777", "#4b5563"],
                borderWidth: 1
            }]
        },
        options: {
            animation: { duration: 1000, easing: "easeOutQuart" },
            scales: { y: { beginAtZero: true } }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateBalanceTable();
    updateReports();
    initChart();
    const transactionForm = document.getElementById("transactionForm");
    const calculationForm = document.getElementById("calculationForm");
    if (transactionForm) transactionForm.addEventListener("submit", addTransaction);
    if (calculationForm) calculationForm.addEventListener("submit", calculateCustom);
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-content").forEach(content => content.classList.add("hidden"));
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.getElementById(btn.dataset.tab).classList.remove("hidden");
            btn.classList.add("active");
        });
    });
});