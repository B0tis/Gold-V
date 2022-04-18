import { log, on, onServer, Player, showCursor, WebView } from 'alt-client';
import { disableAllControlActions } from 'natives';

let webview: WebView = new WebView('http://resource/client/html/login/index.html');

onServer('goldVcore:playerConnected', async (player: Player) => {
	disableAllControlActions(0);
	webview.focus();
	showCursor(true);
});
