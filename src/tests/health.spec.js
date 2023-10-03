describe('Test /api', () => {
  describe('Test /api/rating', () => {
    it('Create new rating', () => {
      request(app)
        .post('/api/rating')
        .send({ coffee: "test", grinder: "1ZPresso J-MAX", grindsetting: "1.25", amtbeans: "17.5", brewingtime: "30", weightres: "30", taste: "perfetto" })
        .expect(200)
        .end((err, response) => {
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('grinder').to.equal("1ZPresso J-MAX");
          done(err);
        })
    })
  })
})
