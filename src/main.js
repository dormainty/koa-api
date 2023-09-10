// 导入Koa
const Koa = require("koa");
// 实例化对象
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "Hello world!";
});

// 监听
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
