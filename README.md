# 📊 Dynamic Portfolio Dashboard

A full-stack web application that provides **real-time portfolio insights** for investors.  
Built with **Next.js (React + TypeScript + Tailwind)** on the frontend and **Node.js** on the backend.

The dashboard fetches **live stock data** from financial APIs (Yahoo Finance & Google Finance via unofficial APIs or scraping) and displays portfolio performance with **dynamic updates, visualizations, and sector grouping**.

---

## 🚀 Features

- 📈 **Real-time Stock Data**

  - Fetch Current Market Price (CMP) from **Yahoo Finance**
  - Fetch P/E Ratio & Latest Earnings from **Google Finance**

- 📊 **Portfolio Table**

  - Displays stock holdings with:
    - Stock Name, Purchase Price, Qty, Investment
    - CMP, Present Value, Gain/Loss
    - P/E Ratio & Latest Earnings
  - Color-coded Gain/Loss (Green = profit, Red = loss)

- 🔄 **Dynamic Updates**

  - Live refresh every **15 seconds**
  - (Optional) WebSocket-based real-time updates

- 🏦 **Sector Grouping**

  - Group holdings by sector (e.g., Technology, Financials)
  - Show sector-level totals: Investment, Present Value, Gain/Loss

- 🎨 **Modern UI**

  - Built with **TailwindCSS + shadcn/ui**
  - Responsive design for desktop & mobile
  - Interactive tables & charts

- 📉 **Visualizations** (via Recharts)

  - Pie chart → Sector allocation
  - Line chart → Portfolio value trend

- ⚡ **Performance Optimizations**
  - Caching to reduce API calls
  - Memoization to avoid unnecessary re-renders

---

## 🛠️ Tech Stack

### Frontend

- [Next.js](https://nextjs.org/) (React framework)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [React Table](https://tanstack.com/table) – Portfolio table
- [Recharts](https://recharts.org/) – Charts

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

---

## 📂 Project Structure

```
octa-byte-dashboard/
│── src/
│   ├── app/
│   ├── lib/
├── components/
│── package.json
│── README.md
```

---

## ⚙️ Setup & Installation

### 1. Clone Repository

```bash
git clone https://github.com/ashvinck/octa-byte-dashboard.git
cd octa-byte-dashboard
```

### 2. Install Dependencies

```bash
# Install frontend
npm install
```

### 3. Run Development Servers

```bash
# Start frontend (Next.js)
npm run dev
```

- Frontend runs on → `http://localhost:3000`

---

## 🧪 Future Improvements

- WebSocket-based real-time updates
- User authentication (to save personal portfolios)
- More visualizations (heatmaps, trend comparisons)
- Export portfolio as PDF/Excel

---

## 📌 Evaluation Criteria

This project demonstrates:

- ✅ Full-stack web app skills (React + Node.js)
- ✅ Data fetching & API integration (scraping & unofficial APIs)
- ✅ Asynchronous operations (real-time updates)
- ✅ UI/UX design (responsive & intuitive)
- ✅ Problem-solving (rate limits, caching, error handling)

---

## 📄 License

MIT License © 2025
