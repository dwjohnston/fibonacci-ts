import express from 'express'; 
import fibonacci from './fibonacci';

let app = express();
// logger

app.get("/fibonacci/:position", (req, res) =>  {
    const pos = parseInt(req.params.position);

    try {
        const result = {
            position: pos, 
            value: fibonacci(pos)
        }; 
        res.json(result);     
    }
    catch (err) {
        res.send(400); 
    }
    
}); 


export default app; 