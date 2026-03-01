# 🌍 Trip Website

A simple travel website built with **React** that displays trip packages fetched from a local JSON database. Users can explore trips, read details, and filter trips by category.

---

## ✨ Features

- 📄 **Home Page** – Introduction to the travel website  
- 🧳 **Trips Page**
  - Fetches trip data from `db.json`
  - Displays trip image, title, price, and category
  - Filter trips by category (All, Beach, Adventure, City Tour)
  - View trip details
- ℹ️ **About Page** – Information about the website
- 👤 **Profile Modal** – Opens when clicking Profile
- 🚪 **Logout Icon**
- ⚡ Reusable custom hook (`useFetch`) for data fetching
- 🎨 Responsive and modern UI with CSS

---

## 🛠️ Tech Stack

- **React**
- **React Router**
- **Custom React Hooks**
- **CSS**
- **JSON Server** (for fake backend)

---

## 📂 Project Structure

---

## 📡 Data Source

Trip data is fetched from a local **`db.json`** file using **JSON Server**.

Example fields:
- `id`
- `title`
- `price`
- `category`
- `image`
- `description`

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
