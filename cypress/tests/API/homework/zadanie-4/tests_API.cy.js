
it('Test API', () => {
  cy.request({
    method: 'GET',
    url: 'https://httpbin.org',
    
  }).then(response => {
    expect(response.status).to.eq(200)
  })
})    

it('Test kod odpowiedzi powinnien być 405', () => {
  cy.request({
    method: 'GET',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false

  }).then(response => {
    expect(response.status).to.eq(405)
  })
})

it('Test kod odpowiedzi powinnien być 200', () => {
  cy.request({
    method: 'POST',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false

  }).then(response => {
    expect(response.status).to.eq(200)
  })
})

it('Test nagłówka User-Agent', () => {
  cy.request({
    method: 'GET',
    url: 'https://httpbin.org/user-agent',
    headers: {
     'User-Agent': 'Custom User-Agent'
     }
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body['user-agent']).to.eq('Custom User-Agent')
  })
})

it('Test niestandardowego naglówka', () => {
  cy.request({
  method: 'GET',
  url: 'https://httpbin.org/headers',
  headers: {
    'X-Test-Header': 'Test value'
    }
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body.headers['X-Test-Header']).to.eq('Test value')
  })
})

it('Test parametru', () => {
  cy.request({
    method: 'GET',
    url: 'https://httpbin.org/get',
        qs: {
          'key': 'Test value'
        },
        failOnStatusCode: false
    
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body.qs['key']).to.eq('Test value')
  })
})

it('Test losowy', () => {
  for(let i = 0; i < 10; i++) {
    const randomId = getRandomInt(10000000);

    const request = {
    url: 'https://httpbin.org/headers',
    id: randomId
    }

  cy.request(request).then(response => {
  assert.isTrue(response.status == 200)
  })
  } 
})

  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

it('Test pliku Cookie', () => {
  cy.request({
  method: 'GET',
  url: 'https://httpbin.org/headers',
  headers: {
    'Cookie': 'Test value'
    }
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body.headers['Cookie']).to.eq('Test value')
  })
})

it('Test czas trawania odpowiedzi', () => {
  cy.request(request).then(response => {
    assert.isTrue(response.duration <= 150)
  })
})

