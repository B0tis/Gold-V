import { log, on, Player } from "alt-server";

on("playerDisconnect", (player: Player, reason: string) => {
    log(`${player.name} left the Server. Reason: ${reason}`)
})