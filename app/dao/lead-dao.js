let Connection = require('./connection')

const winston = require('winston');
const { format } = winston;
const { errors } = format;
//const errorsFormat = errors({ stack: true });

const { combine, timestamp, label,  json } = format;
// const info = errorsFormat.transform(new Error('Oh no!'));
winston.loggers.add('logger1', {
    format: combine (
        label({label: 'LeadDao'}),
        timestamp(),
        json()
    ),
    transports: [
        new winston.transports.Console({level: 'debug'}),
        new winston.transports.File({filename: '/tmp/FreeCRM_lead_dao.log'})
    ]
});

const logger = winston.loggers.get('logger1');
const MongoClient = require('mongodb').MongoClient;
const DEV_URL = 'mongodb://localhost:27017/FreeCRM';
const assert = require('assert');

class LeadDao{

    list_lead(){
        let db;
        const client = new MongoClient(DEV_URL);

        // Initialize connection once
        client.connect( function(err)  {
            assert.equal(null, err);
            
            if(err) throw err;
            console.log("Connected successfully to server");
            db = client.db('FreeCRM');
            
            var cursor =  db.collection("lead").find({});
            console.log(cursor.doc);
            cursor.each(function(err, doc) {

                console.log(doc);
        
            });
              
        });        

    }

    insert_lead(){
        
    }
}

module.exports = LeadDao;