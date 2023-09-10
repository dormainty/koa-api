// 导入自定义模块
const { APP_PORT } = require("./config/config.default");
const app = require("./app/index");

// 监听
app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
