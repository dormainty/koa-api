const { createUser, getUserInfo } = require("../service/user.service");

class UserController {
  // 注册接口
  async register(ctx, next) {
    // 1.获取请求数据: ctx.request.body
    const { username, password } = ctx.request.body;

    // 验证合法性：格式正确
    if (!username || !password) {
      console.error("用户名或密码为空", ctx.request.body); // 错误日志
      ctx.status = 400; // bad request
      ctx.body = {
        code: "10001", // 错误提示码：1:后台、00:user模块、01:错误编号
        message: "用户名或密码为空",
        result: "",
      };
      return;
    }

    // 验证合理性：用户若已存在则不能再注册
    if (getUserInfo({ username })) {
      ctx.status = 409; // Conflict 存在冲突
      ctx.body = {
        code: "10002",
        message: "用户已经存在",
        result: "",
      };
      return;
    }

    // 2.操作数据库
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
  }

  // 登录接口
  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

// 导出 UserController对象
module.exports = new UserController();
