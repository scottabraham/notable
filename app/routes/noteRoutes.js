const ObjectID = require('mongodb').ObjectID
module.exports  = function (app, db){
app.get('/notes/:id', (req, res)=>{
    const id = req.params.id
    const details = {'_id': new ObjectID(id)}
    db.collection('notes').findOne(details, (err, item)=>{
        if(error) {
            console.log('Error occurred while inserting');
           // return 
        } else {
            res.send(item);
          // return 
        }
    })
})

    app.post('/notes', (req, res) => {
        // create note#
        const note = {text: req.body.body, title: req.body.title}
        
           db.collection('notes').insertOne(note, function (error, response) {
            if(error) {
                console.log('Error occurred while inserting');
               // return 
            } else {
                res.send(response.ops[0]);
              // return 
            }
        } )
          
        
    })
}