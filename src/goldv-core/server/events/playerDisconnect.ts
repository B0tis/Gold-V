import { on, Player } from "alt-server";
import { DB } from "../../modules/db";
import { Char } from "../../modules/db/entities/char";
import { User } from "../../modules/db/entities/user";
import { getConnectedUser } from "../../modules/db/functions/user";
import { goldvLogInfo } from "../../modules/log";
import { goldvWebhookPlayerLeft } from "../../modules/webhook";

on("playerDisconnect", (player: Player, reason: string) => {
    const x = player.pos.x;
    const y = player.pos.y;
    const z = player.pos.z;
    const rot_x = player.rot.x;
    const rot_y = player.rot.y;
    const rot_z = player.rot.z;

    const user = DB.createQueryBuilder().select("user").from(User, "user").where("user.socialID = :socialID", {socialID: player.socialID}).getOne().then(thisUser => {
        DB.createQueryBuilder().update(Char).set({pos_x: x, pos_y: y, pos_z: z, rot_x: rot_x, rot_y: rot_y, rot_z: rot_z}).where("user_id = :userID", {userID: thisUser.id}).execute();
    });
})
