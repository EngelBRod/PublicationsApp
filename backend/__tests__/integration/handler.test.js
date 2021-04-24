const url = 'http://localhost:4000/dev';
const request = require('supertest')(url);

// Testing status and correct response int publicationss get method
describe('getPublications', () => {
  // eslint-disable-next-line arrow-body-style
  it('Testing status and correct response', () => {
    return request.get('/publications')
      .expect(200)
      .then((response) => {
        expect(response.body).not.toBeNull();
      });
  });
});

// Testing status and incorrect parameters handling in publications' post method
describe('postPublications', () => {
  it('Testing status and incorrect parameters handling', () => {
    const body = `
    {
      "date":"2020-02-01 10:10",
      "title":"testing 26",
      "body":"testing body"
  }`;
    const info = JSON.parse(body);
    return request.post('/publications')
      .send(info)
      .expect(500)
      .then((response) => {
        expect(response.text).toEqual('Could not create the item');
      });
  });
});

// Testing status and incorrect parameters handling in publications' update method
describe('updatePublications', () => {
  it('Testing status and incorrect parameters handling', () => {
    const body = `
    {
      "author":1,
      "date":"2020-02-01 10:10",
      "title":"testing 26",
      "body":"testing body"
  }`;
    const info = JSON.parse(body);
    return request.put('/publications')
      .send(info)
      .expect(500)
      .then((response) => {
        expect(response.text).toEqual('Could not create the item');
      });
  });
});

// Testing status and incorrect parameters handling in publications' delete method
describe('deletePublications', () => {
  it('Testing status and incorrect parameters handling', () => {
    const body = `
    {
  }`;
    const info = JSON.parse(body);
    return request.post('/publications')
      .send(info)
      .expect(500)
      .then((response) => {
        expect(response.text).toEqual('Could not create the item');
      });
  });
});

// Testing status and correct response in authors get method
describe('getAuthors', () => {
  // eslint-disable-next-line arrow-body-style
  it('Testing status and correct response', () => {
    return request.get('/authors')
      .expect(200)
      .then((response) => {
        expect(response.body).not.toBeNull();
      });
  });
});

// Testing status and incorrect parameters handling in authors' post method
describe('postAuthors', () => {
  it('Testing status and incorrect parameters handling', () => {
    const body = `
    {
      "date":"2020-02-01 10:10",
      "title":"testing 26",
      "body":"testing body"
  }`;
    const info = JSON.parse(body);
    return request.post('/authors')
      .send(info)
      .expect(500)
      .then((response) => {
        expect(response.text).toEqual('Could not create the item');
      });
  });
});

// Testing status and incorrect parameters handling in authors' update method
describe('updateAuthors', () => {
  it('Testing status and incorrect parameters handling', () => {
    const body = `
    {
      "name":"Engel Benjamin",
      "lastname":"Rodriguez",
      "birthday":"1992/12/26",
      "email":"engel.b.rodriguez@gmail.com"
  }`;
    const info = JSON.parse(body);
    return request.put('/authors')
      .send(info)
      .expect(500)
      .then((response) => {
        expect(response.text).toEqual('Could not create the item');
      });
  });
});

// Testing status and incorrect parameters handling in authors' delete method
describe('deleteAuthors', () => {
  it('Testing status and incorrect parameters handling', () => {
    const body = `
    {
  }`;
    const info = JSON.parse(body);
    return request.post('/authors')
      .send(info)
      .expect(500)
      .then((response) => {
        expect(response.text).toEqual('Could not create the item');
      });
  });
});
