'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     *
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    await queryInterface.createTable('NotificiationTickets', {
     */
    await queryInterface.changeColumn('NotificiationTickets','status',{
      type: Sequelize.ENUM('PENDING', 'SUCCESS', 'FAILED', 'RETRY'),
      defaultValue: 'PENDING',
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
