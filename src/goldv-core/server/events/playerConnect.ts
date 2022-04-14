import {on, Player, log} from "alt-server";
import { createChar, getChar, hasChar } from "../../modules/db/functions/char";
import { getConnectedUser } from "../../modules/db/functions/user";
import { goldvWebhookPlayerConnected } from "../../modules/webhook";

on('playerConnect', async (player: Player) => {
    goldvWebhookPlayerConnected(player);
    const user = getConnectedUser(player);

    if (await hasChar(player)) {
        await createChar(user);
    }

    const char = await getChar(player);

    player.model = "mp_m_freemode_01";
    player.spawn(char.pos_x, char.pos_y, char.pos_z);
})