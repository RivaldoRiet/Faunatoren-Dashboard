const express = require('express')

const axios = require('axios')
var FormData = require('form-data');
var fs = require('fs');
var request = require('request');
const multer  = require('multer') //use multer to upload blob data
const upload = multer();
const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = 3000

requestBirdnetApi(fs.createReadStream("./assets/birdtest.wav"));

app.get('/', (req, res) => {
  var data = {
    "Fruits": [
      "apple",
      "orange"    ]
  };

  res.json(data);
})

app.post('/upload', upload.single('soundBlob'), function (req, res, next) {
  requestBirdnetApi(fs.createReadStream(req.file.buffer));
  res.sendStatus(200); //send back that everything went ok
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


function requestBirdnetApi(stream){
  const options = {
    method: "POST",
    url: "https://birdnet.cornell.edu/api2/upload",
    port: 443,
    headers: {
        "Content-Type": "multipart/form-data"
    },
    formData : {
        "upload" : stream,
        "meta" : "{\"deviceId\":\"6668948700\",\"appVersion\":\"1.83\",\"ts\":1616790316034,\"author\":{\"name\":\"\",\"email\":\"\"},\"recordingId\":15,\"gps\":{\"lat\":31.249160766601563,\"lon\":121.48789978027344,\"alt\":60},\"city\":\"\",\"eBird_threshold\":0.05999999865889549,\"week\":0,\"os\":\"Android\",\"sensitivity\":1.25}",
    }
};

request(options, function (err, res, body) {
    if(err) console.log(err);
    console.log(body);
});
}
