'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {}, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};