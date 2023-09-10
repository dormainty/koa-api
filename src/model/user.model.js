const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const User = sequelize.define(
  "User", // 自动推断出表名为 users
  {
    // 在这里定义模型属性（对应表里的字段，id可以忽略，会被sequelize自动创建并管理）
    username: {
      type: DataTypes.STRING, // 字段类型
      allowNull: false, // 是否为空
      unique: true, // 是否唯一
      comment: "用户名,唯一", // 备注
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "是否为管理员，0:不是管理员（默认值），1:是管理员",
    },
  }
);

// 如果表已经存在，则将其首先删除
// User.sync({ force: true });

module.exports = User;
