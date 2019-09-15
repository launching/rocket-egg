// `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '权限id',
// `title` varchar(255) DEFAULT NULL COMMENT '标题',
// `url` varchar(255) DEFAULT NULL COMMENT '连接地址',
// `status` int(1) DEFAULT '1' COMMENT '0:不可用,1:可用',
// `created_at` datetime DEFAULT NULL COMMENT '创建时间',
// `updated_at` datetime DEFAULT NULL COMMENT '更改时间',
// `permission_id` int(11) DEFAULT NULL COMMENT '当前表id',
"use strict";

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Permission = app.model.define(
    "permission",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: STRING,
        unique: true,
        allowNull: false,
      },
      url: {
        type: STRING,
      },
      status: {
        type: INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );
  Permission.associate = function() {
    app.model.Permission.belongsTo(app.model.Permission, {
      as: "permission",
    });
  };
  return Permission;
};
