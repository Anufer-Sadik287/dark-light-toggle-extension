let darkModeEnabled = false;

const darkStyle = `
  /* Page background & base text */
  html, body {
    background-color: #121212 !important;
    color: #e0e0e0 !important;
  }

  /* Generic elements */
  * {
    background-color: transparent !important;
    color: #e0e0e0 !important;
    border-color: #444 !important;
  }

  /* Links */
  a, a * {
    color: #90caf9 !important;
  }

  /* Form controls */
  input, textarea, select, button {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
    border: 1px solid #555 !important;
  }

  /* Media */
  img, video {
    opacity: 0.95 !important;
  }

  /* Placeholder text */
  ::placeholder {
    color: #cccccc !important;
  }
`;

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "TOGGLE_THEME") {
    if (!darkModeEnabled) {
      const styleTag = document.createElement("style");
      styleTag.id = "dark-toggle-style";
      styleTag.textContent = darkStyle;
      document.head.appendChild(styleTag);
      darkModeEnabled = true;
    } else {
      const styleTag = document.getElementById("dark-toggle-style");
      if (styleTag) styleTag.remove();
      darkModeEnabled = false;
    }
  }
});
