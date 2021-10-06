process.env['NODE_CONFIG_DIR'] = __dirname + '/Configurations';

import 'dotenv/config';
import App from  'app'
import RecordsRoute from './Record/Routes/RecordsRoute';

const app = new App([new RecordsRoute()]);

app.listen();
