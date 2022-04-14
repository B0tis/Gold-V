import {on, Player, Entity, log} from "alt-server";

on("playerDeath", (victim: Player, killer: Entity, weaponHash: number) => {
    log(`${victim.name} was killed`);
    victim.spawn(0, 0, 72, 3000);
})