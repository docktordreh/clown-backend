const chai = require('chai')
const request = require('supertest')
const server = require('../../server')
const expect = chai.expect
const db = require('../models')
const fields = ['coffee', 'grinder', 'grindsetting', 'amtbeans', 'brewingtime', 'weightres', 'taste', 'time']
let id = ''

describe('test the entire api', function(assert) {
    before((done) => {
        db.sequelize.sync({force: true}).then(() => done())
    })
    it('Create Rating', (done) => {
        request(server)
        .post('/api/rating')
        .send({ coffee: 'test', grinder: '1ZPresso J-MAX', grindsetting: '1.25', amtbeans: '17.5', brewingtime: '30', weightres: '30', taste: 'perfetto' })
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if (err) done(err)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.not.be.null
            expect(response.body.grinder).to.equal('1ZPresso J-MAX')
            expect(response.body.coffee).to.equal('test')
            expect(response.body.grindsetting).to.equal('1.25')
            expect(response.body.amtbeans).to.equal('17.5')
            expect(response.body.brewingtime).to.equal('30')
            expect(response.body.weightres).to.equal('30')
            expect(response.body.taste).to.equal('perfetto')
            id = response.body.id
            // request(server)
            // .get(`/api/rating/${id}`)
            // .then(function(err, response) {
            //     if (err) throw err
            //     expect(response.status).to.equal(20)
            //     expect(response.body.id).to.equal(id)
            //     for (const [key, _] of Object.entries(response.body)) {
            //         expect(fields.includes(key))
            //     }
            // })
            done()
        })
        //request(server)
        //.get(`/api/rating`)
        //.end(function(err, response) {
        //    expect(response.body.length).to.equal(15)
        //    if (err) throw err
        //})
    })
})


    // (results, cb) => {
    //   request(server)
    //     .get(`/api/rating/${id}`)
    //     .end(function(err, response) {
    //       console.log(`response status is ${response.status}`)
    //       console.log(`response body is ${response.body.id}`)
    //       if (err) throw err
    //       expect(response.status).to.equal(200)
    //       expect(response.body.id).to.equal(id)
    //       for (const [key, _] of Object.entries(response.body)) {
    //         expect(fields.includes(key))
    //       }
    //     })}])
    // it('Load all ratings (there should be one)', () => {
    //   request(server)
    //     .get('/api/rating')
    //     .expect(200)
    //     .end((err, response) => {
    //       console.log(response.body[0])
    //       if (err) throw err
    //       expect(response.body.length).to.equal(1)
    //       // expect(response.body[0].id).to.equal(id)
    //     })
    // })
    // it('Update rating', () => {
    //   request(server)
    //     .put(`/api/rating/${id}`)
    //     .send({ coffee: 'test', grinder: '1ZPresso J-MAX', grindsetting: '1.25', amtbeans: '17.5', brewingtime: '30', weightres: '30', taste: jokerating })
    //     .set('Content-Type', 'application/json')
    //     .expect(200)
    //     .end((err, response) => {
    //       if (err) throw err
    //       expect(response.body.id).to.equal(id)
    //       // expect(response.body.taste).to.equal(jokerating)
    //       // expect(response.body.grinder).to.equal('1ZPresso J-MAX')
    //     })
    // })
