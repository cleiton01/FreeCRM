let Lead = require('../model/lead')
let LeadDao = require('../dao/lead-dao')

const winston = require('winston');
const { format } = winston;
const { errors } = format;
//const errorsFormat = errors({ stack: true });

const { combine, timestamp, label,  json } = format;
// const info = errorsFormat.transform(new Error('Oh no!'));
winston.loggers.add('logger1', {
    format: combine (
        label({label: 'LeadController'}),
        timestamp(),
        json()
    ),
    transports: [
        new winston.transports.Console({level: 'debug'}),
        new winston.transports.File({filename: '/tmp/FreeCRM_lead.log'})
    ]
});

const logger = winston.loggers.get('logger1');

const MongoClient = require('mongodb').MongoClient;
const DEV_URL = 'mongodb://localhost:27017/FreeCRM';
const assert = require('assert');

class LeadController{

    create_lead(lead_name, lead_phone, lead_email, lead_company_name, lead_custom_parans){
        logger.debug('create new lead');    
        let lead = new Lead(lead_name, lead_phone, lead_email, lead_company_name, lead_custom_parans);
        logger.debug(`new lead object created with lead_id`);
        
        logger.debug('start write lead in database');
        
        // write database logic
        // post a message on kafka to sand data lake store.
    }
    
    list_lead(lead_id){
        return  (req, resp, next) => {
            
            let db;
            logger.debug('create a Mongo Client variable');
            const client = new MongoClient(DEV_URL);
            
            try {
                logger.debug('Try connect with database');
                
                client.connect( function(err)  {
                
                    assert.equal(null, err);
                    
                    if(err){
                        logger.info(`Error : ${err}`);
                        throw err;
                    } 
                
                    logger.debug("Connected successfully with databse");
                    
                    db = client.db('FreeCRM');
                    logger.debug("Set database to use FreeCRM");

                    db.collection("lead").find({}).toArray(function(err, result) {
                        if (err){
                            logger.debug(`Error at find: ${err}`);
                            throw err;
                        }
                        
                        logger.debug(`Found ${result.length} docs`);
                        
                        client.close();
                        logger.debug('Connection closed.');
                        
                        resp.send(result);
                        });
                });
            } catch (err) {
                next(err);
              }
        }
    }
    /*
    update_lead(){
        


    }
    delete_lead(){}

    massive_update(){}
    massive_delete(){}
    massive_create(){}
    
    import_from_file(){}
    import_from_api(){}
    export_to(){}
    */
}

module.exports = LeadController;