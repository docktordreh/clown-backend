const chai = require('chai')
const request = require('supertest')
const server = require('../../server')
const expect = chai.expect
const done = chai.done

const fields = ['coffee', 'grinder', 'grindsetting', 'amtbeans', 'brewingtime', 'weightres', 'taste', 'time']
describe('Test /api', () => {
  describe('Test /api/rating', () => {
    let id = ''
    it('Create new rating', () => {
      request(server)
        .post('/api/rating')
        .send({ coffee: 'test', grinder: '1ZPresso J-MAX', grindsetting: '1.25', amtbeans: '17.5', brewingtime: '30', weightres: '30', taste: 'perfetto' })
        .expect(200)
        .end((err, response) => {
          console.log(response.body)
          expect(response.body).to.have.property('id')
          expect(response.body).to.have.property('grinder').to.equal('1ZPresso J-MAX')
          id = response.body.id
          done(err)
        })
    })
    it('Load previously created rating', () => {
      request(server)
        .get(`/api/rating/${id}`)
        .expect(200)
        .end((err, response) => {
          console.log(response.body)
          expect(response.body.id).to.equal(id)
          for (const [key, _] of Object.entries(response.body)) {
            expect(fields.includes(key))
          }
          console.log(err)
          done(err)
        })
    })
    it('Load all ratings (there should be one)', () => {
      request(server)
        .get('/api/rating')
        .expect(200)
        .end((err, response) => {
          console.log(response.body)
          expect(response.body.length).to.equal(1)
          expect(response.body[0].id).to.equal(id)
          console.log(err)
          done(err)
        })
    })
  })
})
