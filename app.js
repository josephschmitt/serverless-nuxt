import Koa from 'koa';
import serverless from 'serverless-http';

const app = new Koa();
app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

export default serverless(app);
