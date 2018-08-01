import app from "../app"; 
import request from "supertest"; 


describe("App responds to HTTP requests  ", () => {



    it("/fibonacci/1 returns position: 1, value: 0 ", (done) => {
        request(app).get("/fibonacci/1")
        .expect(200, {position: 1,  value: 0}).end((err, res)=> {
            if (err) throw err; 
            done();
        }); 
    }); 

    it("/fibonacci/1 returns position: 6, value: 5 ", (done) => {
        request(app).get("/fibonacci/6")
        .expect(200, {position: 6,  value: 5}).end((err, res)=> {
            if (err) throw err; 
            done();
        }); 
    }); 

});


