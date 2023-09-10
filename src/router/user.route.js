const Router = require("koa-router");

const { 
    register, 
    login 
} = require("../controller/user.controller");

// prefix 配置前缀
const router = new Router({
  prefix: "/users",
});

// 注册接口
router.post("/register", register);

// 登录接口
router.post("/login", login);

// 导出router
module.exports = router;
