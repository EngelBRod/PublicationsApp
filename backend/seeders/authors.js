module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('authors', [
    {
      name: 'Steve',
      lastname: 'Jobs',
      birthday: '1955-02-24',
      email: 'sjobs@gmail.com',
    },
    {
      name: 'Albert',
      lastname: 'Einstein',
      birthday: '1879-03-14',
      email: 'aeinstein@gmail.com',
    },
    {
      name: 'Engel',
      lastname: 'Rodriguez',
      birthday: '1992-12-26',
      email: 'erodriguez@gmail.com',
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('authors', {}, null),
};
