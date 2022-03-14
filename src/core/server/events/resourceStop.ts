
import { on } from "alt-server";
import { resourceStop } from "../../modules/webhook";

on('resourceStop', async () => {
    await resourceStop();
    console.log('Resource has stopped.');
});