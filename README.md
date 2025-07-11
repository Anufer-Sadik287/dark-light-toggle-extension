# 🌗 Dark / Light Mode Toggle - Chrome Extension

A simple and useful Chrome extension that allows users to toggle any website between dark and light themes with a single click.

---

## 🚀 Features

- Works on most websites including Google, Wikipedia, StackOverflow, etc.
- Clean and minimal popup UI
- Injects custom CSS to apply dark mode across page content
- Easy to enable and disable using a browser toolbar button

---

## 🧩 How It Works

- `popup.html` contains a button
- `popup.js` sends a toggle message to the current tab
- `content.js` listens for the message and injects/removes dark-mode styles

---

## 🛠 Technologies Used

- HTML, CSS, JavaScript
- Chrome Extensions API (Manifest V3)
- DOM manipulation

---

## 🔧 Installation & Usage

1. Clone or download this repo.
2. Open Google Chrome and go to `chrome://extensions`
3. Enable **Developer Mode** (top right)
4. Click **Load Unpacked** and select the project folder
5. Pin the extension icon to your toolbar
6. Visit any website and click the extension to toggle dark mode!

---

## 🎥 Demo Video

[📺 Watch the YouTube demo here](#)  
(*replace this with the actual link once your demo is uploaded*)

---

## ⚠️ Limitations & Future Work

- Websites using **Shadow DOM** (e.g. YouTube, ChatGPT) may not be fully themed
- Dynamic elements may need advanced handling like MutationObservers
- Future version could support per-site overrides or light mode re-injection

---

## 👤 Author

**Anufer Sadik**  
[GitHub Profile](https://github.com/Anufer-Sadik287)  


---

## 📄 License

This project is licensed under the MIT License.
