var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");
var db = mongo.connect("mongodb://uz6fufiqwhp4prnr9zod:wlNSOmsdLkKYNSx4c9ZT@byj6tfzss8blymu-mongodb.services.clever-cloud.com:27017/byj6tfzss8blymu", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ' + db, ' + ', response);
  }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var Schema = mongo.Schema;

var BlogsSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date
  },
  content: {
    type: String
  },
  email: {
    type: String
  },
  comment: {
    type:String
  }
}, {
  versionKey: false
});


var model = mongo.model('blogs', BlogsSchema, 'blogs');

app.post("/api/SaveUser", function (req, res) {
  var mod = new model(req.body);
  if (req.body.mode == "Save") {
    mod.save(function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          data: "Record has been Inserted..!!"
        });
      }
    });
  } else {
    model.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        address: req.body.address
      },
      function (err, data) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            data: "Record has been Updated..!!"
          });
        }
      });


  }
})

app.post("/api/deleteUser", function (req, res) {
  model.remove({
    _id: req.body.id
  }, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "Record has been Deleted..!!"
      });
    }
  });
})



app.get("/api/getUser", function (req, res) {
  model.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
})


app.listen(80, function () {

  console.log('Example app listening on port 80!')
})