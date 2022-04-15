import { IConnectionInfo, on } from "alt-server";
import { DB } from "../../modules/db";
import { User } from "../../modules/db/entities/user";
import { IsNewUser, newUser } from "../../modules/db/functions/user";
import { goldvWebhookBannedPlayer } from "../../modules/webhook";

on('beforePlayerConnect', (player: IConnectionInfo) => {
    if (DB.createQueryBuilder().select("user").from(User, "user").where("user.socialID = :socialID", {socialID: player.socialID}).getOne().then((thisUser) => {
        if (thisUser != undefined || thisUser != null) {
            if (thisUser.banned)
                return false;
            else
                return true;
        } else {
            newUser(player);
            return true;
        }
    })) {
        return true;
    } else
    return false;
})