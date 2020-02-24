const Router = require('koa-router');
const router = new Router();

const Task = require('../api/task');

router.post('/addTask', async (ctx) => {
   try {
     const rusult = await Task.addTask();
     ctx.body = rusult;
   }
  catch (err) {
    console.error('err', err);
    ctx.status = 500;
    ctx.body = 'Internal Eroor';
   }
})

router.get('/', async(ctx, next) => {
    ctx.body = 'its works!';
})

module.exports = router;
