const sequelize = require('../../db/database');

// Testing database connection
describe('Database', () => {
  // eslint-disable-next-line arrow-body-style
  it('Testing database connection', async () => {
    let connection;
    await sequelize.authenticate()
      .then(() => { connection = 'Success'; });
    sequelize.close();
    expect(connection).toEqual('Success');
  });
});
