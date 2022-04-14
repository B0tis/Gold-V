import { on, Player } from "alt-server";
import { DB } from "../../modules/db";
import { Char } from "../../modules/db/entities/char";
import { User } from "../../modules/db/entities/user";
import { getConnectedUser } from "../../modules/db/functions/user";
import { goldvLogInfo } from "../../modules/log";
import { goldvWebhookPlayerLeft } from "../../modules/webhook";

// on("playerDisconnect", async (player: Player, reason: string) => {
//     console.log(player.name);
    
//     await DB.createQueryBuilder().update(Char).set({ pos_x: player.pos.x, pos_y: player.pos.y, pos_z: player.pos.z }).where("user_id = :user_id", { user_id: player.id }).execute();
//     console.log(player.name);
    
//     goldvLogInfo(`${player.name} left the Server. Reason: ${reason}`);
//     goldvWebhookPlayerLeft(player, reason);
// })

on("playerDisconnect", (player: Player, reason: string) => {
    const x = player.pos.x;
    const y = player.pos.y;
    const z = player.pos.z;

    const user = DB.createQueryBuilder().select("user").from(User, "user").where("user.socialID = :socialID", {socialID: player.socialID}).getOne().then(thisUser => {
        DB.createQueryBuilder().update(Char).update({pos_x: x, pos_y: y, pos_z: z}).where("user_id = :userID", {userID: thisUser.id}).execute();
    });
    // DB.createQueryBuilder().update(Char).update({pos_x: x, pos_y: y, pos_z: z}).where("user_id = :userID", {userID: user}).execute();
    console.log(player.name);
})