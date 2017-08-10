const express = require('express');
var router = express.Router();
const mysql = require('mysql');
const url = require('url');
var db = require('../db');
const bodyParser = require('body-parser');
var cors = require('cors');



router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(cors());

router.post('/register', function(req, res){
  var reqObj = req.body;
  console.log(reqObj);
      var data = insertData = {
        "name" : reqObj.Name,
        "place" : reqObj.Place,
        "age" : reqObj.Age
      };

    var insertSql = "INSERT INTO sampletable SET ?";
    db.query(insertSql, insertData, function(err, data){
        if(err){
          console.log(err);
        }else{
          console.log(data);
          res.send(data);
          console.log('Inserted');
        }
      });
  });

  router.get('/register', function(req, res){
    var sql = `SELECT * FROM sampletable`;
      db.query(sql, function(err, data){
          if(err){
            console.log(err);
          }else{
            console.log(data);
            res.send(data);
            console.log('Fetched');
          }
        });
    });

    router.delete('/register/:id', function(req, res){
      var sql = `DELETE FROM sampletable WHERE id=${req.params.id}`;
        db.query(sql, function(err, data){
            if(err){
              console.log(err);
            }else{
              res.send(data);
              console.log("Deleted:" + data.affectedRows);
            }
          });
      });

      router.put("/register/:id", function(req , res){
        var reqObj = req.body;
        var Data = {
          "name" : reqObj.Name,
          "place" : reqObj.Place,
          "age" : reqObj.Age
        };
                  var sql = `UPDATE sampletable SET ? WHERE id = ${req.params.id}`;

                  db.query(sql, Data, function(err, data){
                      if(err){
                        console.log(err);
                      }else{
                        console.log(data);
                        res.send(data);
                        console.log('Updated:' + data.affectedRows);
                      }
                    });
});


module.exports = router;
