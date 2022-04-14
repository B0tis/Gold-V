
import { on } from "alt-server";
import { goldvWebhookResourceStop } from "../../modules/webhook";

on('resourceStop', async () => {
    await goldvWebhookResourceStop();
});