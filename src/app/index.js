// 导入Koa
const Koa = require("koa");
const { koaBody } = require("koa-body");

// 导入 userRouter 模块
const userRouter = require("../router/user.route");

// 实例化对象
const app = new Koa();

// 注册中间件
app.use(koaBody());
app.use(userRouter.routes());

// 导出app
module.exports = app;
