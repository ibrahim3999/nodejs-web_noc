const express=require('express')
const mysql =require('mysql')

const db =mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:''
    }
);

db.connect(err=>{
    if(err)
    {
        console.log (err);
    }
    console.log(" MYSQL Connected")
});

const app=express()
app.get('/createdb',(req,res)=>{
    let sql='create database problemZabbix'
    db.query(sql,err=>{
       throw err ;
    })
    res.send('Database Created');
});

/*app.get('/createWEAUTONOCTable',(req,res)=>{
    let sql='create table WEAUTONOCTable( host varchar(50),groupHost varchar(50),problem varchar(50),solver varchar(50), WEAUTONOC_S varchar(50))'
    db.query(sql,err=>{
       throw err ;
    })
    res.send('WEAUTONOCTable Created :)');
});
*/
app.listen('3000',()=>{
console.log('server Started on port 3000')
});