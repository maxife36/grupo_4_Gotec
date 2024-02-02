'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('features', {
      featureId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn('UUID'),
        primaryKey: true,
        allowNull: false,
      },
      fetureName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      fetureIcon: {
        type: Sequelize.STRING(50),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('features');
  }
};