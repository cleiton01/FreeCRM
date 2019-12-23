let act = require('../api');
const Account_controller = require('../controller/account_controller');

const LeadController = require('../controller/lead_controller');
const leadController = new LeadController();

module.exports = (server) => {


    server.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    server.get('/', (req, res) => {
    
        res.send({message: 'Hello World'});
    });
    
    server.get('/accounts', (req, res) => {
        let acct_ctl = new Account_controller();
        
        res.send(acct_ctl.list_accounts());
    });

    server.get('/create-lead', (req, res) => {
        let lead_ctl = new LeadController();
        //'teste', '11 3440 5567', 'fake@fake.com', 'fake',[{phone2: '11 98873 3422'}, {product: 'intrested in your product.'}]
        console.log("create-lead - : "+req.ip);

        let result_set = lead_ctl.create_lead(res.query);
        
        res.send([result_set]);
    });

    server.get('/leads', leadController.list_lead());
}

