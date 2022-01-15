'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
      this.hasMany(Post, { foreignKey: 'topicId' });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Topic.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      tableName: 'topics',
      modelName: 'Topic',
    }
  );
  return Topic;
};
