import { emit } from "alt-client";
import {on, Player, log, Vector3, emitClient} from "alt-server";
import { Char } from "../../modules/db/entities/char";
import { createChar, getChar, hasChar } from "../../modules/db/functions/char";
import { getConnectedUser } from "../../modules/db/functions/user";
import { goldvWebhookPlayerConnected } from "../../modules/webhook";

on('playerConnect', async (player: Player) => {
    const user = getConnectedUser(player);

    if (await hasChar(player)) {
        await createChar(user);
    }

    const char = await getChar(player);

    emitClient(player, 'goldVcore:playerConnected');
    player.model = "mp_m_freemode_01";
    await player.spawn(char.pos_x, char.pos_y, char.pos_z);
    player.rot = new Vector3({ x: char.rot_x, y: char.rot_y, z: char.rot_z });
    goldvWebhookPlayerConnected(player);
})