const User = require("../model/user.model");
class UserService {
  async createUser(username, password) {
    // 操作数据库：插入数据
    const res = await User.create({ username, password });
    // 返回结果
    return res.dataValues;
  }
  async getUserInfo({ id, username, password, is_admin }) {
    const whereOpt = {};
    // 当id存在时，将其拷贝到 whereOpt中
    id && Object.assign(whereOpt, { id });
    username && Object.assign(whereOpt, { username });
    password && Object.assign(whereOpt, { password });
    is_admin && Object.assign(whereOpt, { is_admin });

    // 操作数据库：查询数据
    const res = await User.findOne({
      attributes: ["id", "username", "password", "is_admin"],
      where: whereOpt,
    });

    return res ? res.dataValues : null;
  }
}

module.exports = new UserService();
