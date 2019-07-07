import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import "./controllers/LoginController";
import { AppRouter } from './AppRouter';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ["asdfasdfasfd"] }))
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log(`Listinening at port ${3000}`)
})