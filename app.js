// Requiring module
const express = require('express');
const path = require('path');
var http = require('http');
// Creating express object
const app = express();
const router = express.Router();
//express-pdf
const pdf=require('express-pdf');
// Handling GET request

//  '/ allpages conect with class button'
app.get('/logo', (req, res) => {
    res.sendFile( __dirname + '/scripts/pic/BTL_124256_logo_noc_c.png')
});
//root page 
app.get('/', (req, res) => {
    res.sendFile( __dirname + '/scripts/index.html' );

});
// root/1;
app.get('/Martam', (req, res) => {
    res.sendFile( __dirname + '/scripts/Martam.html' );
});
app.get('/emergency', (req, res) => {
    res.sendFile( __dirname + '/scripts/emergency.html' );
});
app.get('/ManagementNoc', (req, res) => {
    res.sendFile( __dirname + '/scripts/ManagementNoc.html' );
});
app.get('/Investigations', (req, res) => {
    res.sendFile( __dirname + '/scripts/Investigations.html' );
});
app.get('/NetWork_monitoring', (req, res) => {
    res.sendFile( __dirname + '/scripts/NetWork_monitoring.html' );
});
app.get('/Proactive_work', (req, res) => {
    res.sendFile( __dirname + '/scripts/Proactive_work.html' );
});

app.get('/Scams', (req, res) => {
    res.sendFile( __dirname + '/scripts/Scams.html' );
});
app.get('/work_management', (req, res) => {
    res.sendFile( __dirname + '/scripts/work_management.html' );
});
app.get('/WEAUTONOC', (req, res) => {
    res.sendFile( __dirname + '/scripts/WEAUTONOC.html' );
});
app.get('/Telephone_contact_page', (req, res) => {
    res.sendFile( __dirname + '/scripts/Telephone_contact_page.html' );
});
// root/1/2
app.use(pdf);
//root/work_management/Employee_information_security_procedure
app.use('/work_management/Employee_information_security_procedure', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/Employee information security procedure.pdf' ));
    });
//root/martam/Fraudulent_NOC_activity
app.use('/martam/Fraudulent_NOC_activity', (req, res) => {
        res.pdf(path.resolve(__dirname + '/pdfPages/Fraudulent NOC activity.pdf' ));
        });
//root/martam/Confluence_xphon
app.use('/martam/Confluence_xphone', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/Confluence xphone .pdf' ));
        }); 
//root/martam/Mobility_faults_from_WECOM           
app.use('/martam/Mobility_faults_from_WECOM', (req, res) => {
       res.pdf(path.resolve(__dirname + '/pdfPages/Mobility faults from WECOM.pdf' ));
        }); 
//root/Proactive_work/Initiated_works_form_WECOM
app.use('/Proactive_work/Initiated_works_form_WECOM', (req, res) => {
        res.pdf(path.resolve(__dirname + '/pdfPages/Mobility faults from WECOM.pdf' ));
        }); 
             
app.use('/Scams/NOC_fraud_activity', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/NOC fraud activity.pdf' ));
    }); 
    //root/scams/Fraud prevention presentation for new representatives
app.use('/Scams/Fraud_prevention_presentation_for_new_representatives', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/Fraud_prevention_presentation_for_new_representatives.pdf' ));
     }); 

    //root/Network_monitoringA guide to the NOC
app.use('/NetWork_monitoring/A_guide_to_the_NOC', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/A guide to the NOC.pdf' ));
    });
app.use('/NetWork_monitoring/New_employee_case_NOC_frauds', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/New employee case-NOC frauds.pdf' ));
    });     
    //root/Network_monitoring/Overlap case for representative NOC frauds
app.use('/NetWork_monitoring/Overlap_case_for_representative_NOC_frauds', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/Overlap case for representative NOC frauds.pdf' ));
    });
    //root/Investigations/Learning_procedure_template_from_a_significant_event_WECOM
app.use('/Investigations/Learning procedure template', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/Learning procedure template.pdf' ));
    });   
app.use('/', router);
/*
app.set("view engine","ejs");
app.get("/upload",(req,res)=>
{
    res.render("upload");
});
app.post("/upload",(req,res)=>{
    res.send("image uploaded");
});
*/
// Port Number
const port = process.env.port ||5000;
console.log('Server started at http://localhost:' + port);
app.listen(port)
  