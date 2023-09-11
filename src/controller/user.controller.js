const { createUser } = require("../service/user.service");
const { userRegisterError } = require("../constant/err.type");
class UserController {
  // 注册接口
  async register(ctx, next) {
    // 1.获取请求数据: ctx.request.body
    const { username, password } = ctx.request.body;

    // 2.操作数据库
    try {
      const res = await createUser(username, password);
      // 3.返回结果
      ctx.body = {
        code: 0,
        message: "用户注册成功",
        result: {
          id: res.id,
          username: res.username,
        },
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", userRegisterError, ctx);
    }
  }

  // 登录接口
  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

// 导出 UserController对象
module.exports = new UserController();
