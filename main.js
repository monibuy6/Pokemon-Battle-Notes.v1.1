const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 900,
        height: 700,
        title: 'Pokémon Status',
        webPreferences: { nodeIntegration: false, contextIsolation: true }
    });
    win.loadFile('notes.html');
    win.setMenuBarVisibility(false);
});

app.on('window-all-closed', () => app.quit());   

/* para instalar basta fazer o seguinte codigo cd C:\Users\Matheus Felix L\Documents\pokemon battle notes
npx electron-packager . "Pokemon Status" --platform=win32 --arch=x64 --out=dist --overwrite  
*/ 