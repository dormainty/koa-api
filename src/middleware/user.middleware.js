// user.middleware.js
const { getUserInfo } = require("../service/user.service");
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
} = require("../constant/err.type");
// 校验器
// 校验合法性：格式正确
const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    console.error("用户名或密码为空", ctx.request.body); // 错误日志
    ctx.app.emit("error", userFormateError, ctx);
    return;
  }
  await next();
};

// 验证合理性：用户若已存在则不能再注册
const userVarify = async (ctx, next) => {
  const { username } = ctx.request.body;

  try {
    const res = await getUserInfo({ username });
    if (res) {
      console.error("用户名已经存在", username);
      ctx.app.emit("error", userAlreadyExited, ctx);
      return;
    }
  } catch (error) {
    console.error("获取用户信息错误", error);
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }

  await next();
};

module.exports = {
  userValidator,
  userVarify,
};
