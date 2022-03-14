import {on, Player, log} from "alt-server";
import { playerConnected } from "../../modules/webhook";

on('playerConnect', (player: Player) => {
    playerConnected(player);

    player.model = "mp_m_freemode_01";
    player.spawn(36.19486618041992, 859.3850708007812, 197.71343994140625, 0);
})