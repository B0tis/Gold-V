import { goldvWebhookResourceStartedWithDB, goldvWebhookResourceStartedWithDBerr } from '../modules/webhook'
import './events'
import '../modules/db'
import { DB } from '../modules/db';

DB.initialize().then(connection => {
    goldvWebhookResourceStartedWithDB();
}).catch(err => goldvWebhookResourceStartedWithDBerr(err))