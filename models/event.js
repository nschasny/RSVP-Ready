module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rsvpStatus: {
        type: DataTypes.ENUM('Yes', 'No', 'Maybe'),
        allowNull: true
      }
    });
  
    Event.associate = (models) => {
      Event.belongsTo(models.User, { foreignKey: 'userId', as: 'organizer' });
    };
  
    return Event;
  };