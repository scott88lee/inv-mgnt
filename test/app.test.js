const request = require('supertest');
const should = require('should');
const cheerio = require('cheerio');
const app = require('../app');

describe('Test the root path', () => {
    
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('Should be right title', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
        
        var $ = cheerio.load(res.text);
        var header = $('h1');
        expect(header.text()).toBe('SAM - Inv Mgmt Acc');
        });
        done();
    });

    test('Should Product list render', (done) => {
        request(app)
        .get('/products')
        .expect(200)
        .end(function(err, res) {
            let $ = cheerio.load(res.text);
            let header = $('h1');
            expect(header.text()).toBe('Product List');
            done();    
        });    
    });
});

describe('Test the 404 path', () => {   
    
    test('Correct status codes', (done) => {
        request(app).get('/dude').then((response) => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
    
    test('Render the right stuff', (done) => {
        request(app).get('/dude').then((response) => {
            expect(response.body).toEqual({
                msg : "fuckoff"
            });
            done();
        });
    });
});