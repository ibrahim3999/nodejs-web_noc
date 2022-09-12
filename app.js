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
    res.sendFile(  __dirname + '/scripts/pic/BTL_124256_logo_noc_c.png')
});
//background index.
app.get('/backgroundIndex', (req, res) => {
    res.sendFile(  __dirname + '/scripts/pic/background.jpg')
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
//root/work_management/Version_1_Credit_card_fault_check_proced
app.use('/work_management/Version_1_Credit_card_fault_check_proced',(req,res)=>{
res.pdf(path.resolve(__dirname + '/pdfPages/Version 1 Credit card fault check proced.pdf'));
});
//root/work_management/Rep Scams Presentation v12022
app.use('/work_management/Rep_Scams_Presentation_v12022',(req,res)=>{
    res.pdf(path.resolve(__dirname + '/pdfPages/Rep Scams Presentation v12022.pdf'));
});
//root/work_management/Initiative work procedure V1
app.use('/work_management/Initiative_work_procedure_V1',(req,res)=>{
    res.pdf(path.resolve(__dirname + '/pdfPages/Initiative work procedure V1.pdf'));
});
//root/work_management/System_failure_procedure
app.use('/work_management/System_failure_procedure',(req,res)=>{
    res.pdf(path.resolve(__dirname + '/pdfPages/System failure procedure.pdf'));
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

    //root/Network_monitoring/grafana
app.use('/NetWork_monitoring/GRAFANA', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/GRAFANA.pdf' ));
    });
app.use('/NetWork_monitoring/ZABBIX', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/ZABBIX.pdf' ));
    });     
app.use('/ManagementNoc/Overlap_case_for_representative_NOC_frauds', (req, res) => {
    res.pdf(path.resolve(__dirname + '/pdfPages/Overlap case for representative NOC frauds.pdf' ));
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
  