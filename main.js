const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    darkTheme: true
  });

  window.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
