const sequelize = require('./db/database');
const Publication = require('./models/Publication');
const Author = require('./models/Author');

sequelize.authenticate()
  // eslint-disable-next-line no-console
  .then(() => console.log('Connected'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log(`Error: ${err}`));

module.exports.getPublications = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await Publication.findAll()
    .then((publications) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(publications),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not fetch the items',
      });
    });
};

module.exports.createPublications = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body);
  await Publication.create({
    author: body.author,
    date: body.date,
    title: body.title,
    body: body.body,
    time: body.time,
  })
    .then((publications) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(publications),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the item',
      });
    });
};

module.exports.updatePublications = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body);
  await Publication.update({
    author: body.author,
    date: body.date,
    title: body.title,
    body: body.body,
    time: body.time,
  }, {
    where: { id: body.id },
  })
    .then((publications) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(publications),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the item',
      });
    });
};

module.exports.deletePublications = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body);
  await Publication.destroy({
    where: { id: body.id },
  })
    .then((publications) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(publications),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the item',
      });
    });
};

module.exports.getAuthors = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await Author.findAll()
    .then((authors) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(authors),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not fetch the items',
      });
    });
};

module.exports.createAuthors = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body);
  await Author.create({
    name: body.name,
    lastname: body.lastname,
    birthday: body.birthday,
    email: body.email,
  })
    .then((authors) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(authors),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the item',
      });
    });
};

module.exports.updateAuthors = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body);
  await Author.update({
    name: body.name,
    lastname: body.lastname,
    birthday: body.birthday,
    email: body.email,
  }, {
    where: { id: body.id },
  })
    .then((authors) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(authors),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the item',
      });
    });
};

module.exports.deleteAuthors = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body);
  await Author.destroy({
    where: { id: body.id },
  })
    .then((authors) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(authors),
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the item',
      });
    });
};
