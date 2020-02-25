const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = new Router();

const {addTask, getTask, updateTask, deleteTask} = require('../api/task');

router
.use(bodyParser())

.get('/getTask/:id', async (ctx, next) => {
   try {
     const rusult = await getTask(ctx);
     ctx.body = rusult;
   }
  catch (err) {
    console.error('err', err);
    ctx.status = 500;
    ctx.body = 'Internal Eroor';
   }
})

.post('/addTask', async (ctx, next) => {
   try {
     const rusult = await addTask(ctx);
     ctx.body = rusult;
   }
  catch (err) {
    console.error('err', err);
    ctx.status = 500;
    ctx.body = 'Internal Eroor';
   }
})

.put('/updateTask/:id', async (ctx, next) => {
   try {
     const rusult = await updateTask(ctx);
     ctx.body = rusult;
   }
  catch (err) {
      console.error('err', err);
      ctx.status = 500;
      ctx.body = 'Internal Eroor';
    }
})

.delete('/deleteTask/:id', async (ctx, next) => {
  try {
    const rusult = await deleteTask(ctx);
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
