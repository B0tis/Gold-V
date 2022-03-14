import { IConnectionInfo, on } from "alt-server";
import { IsNewUser } from "../../modules/db/functions/isNewUser";
import { newUser } from "../../modules/db/functions/newUser";
import { playerConnecting } from "../../modules/webhook";

on('beforePlayerConnect', (player: IConnectionInfo) => {
    playerConnecting(player);

    if (IsNewUser(player))
        newUser(player);
})