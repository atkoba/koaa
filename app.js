const Koa = require('koa');
const app = new Koa();

const koaBody = require('koa-body');
const router = require('./router');

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.use (async (ctx, next) => {
    ctx.body = 'Hello World';
})

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
