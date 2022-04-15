import { on, onServer, showCursor, WebView } from "alt-client";

// on('goldVcore:playerConnected', () => {
//     // const webview = new WebView('http://resource/client/html/login.html')
//     const webview = new WebView('https://google.com')
//     webview.focus();
//     showCursor(true);
// })

onServer('goldVcore:playerConnected', async () => {
    console.log('check');

    const webview = await new WebView('http://www.google.com/')
    webview.focus();
    showCursor(true);
})