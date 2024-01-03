const { DataTypes} = require('sequelize');

const Usuario =(sequelize)=>{ sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
     timeInit: {
      type: DataTypes.DATE,
      allowNull: false,
      },
      times: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      tipo:{
        type:DataTypes.STRING
      }
  },{
    timestamps: false, 
  });
}
  module.exports= Usuario;