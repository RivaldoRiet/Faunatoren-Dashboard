const express = require('express')
const streamifier = require('streamifier');
const { Readable } = require('stream');
const axios = require('axios')
var FormData = require('form-data');
var fs = require('fs');
var request = require('request');
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})
const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = 3000

//console.log(fs.createReadStream("./assets/birdtest.wav"))
//requestBirdnetApi(fs.createReadStream("./assets/birdtest.wav"));

app.post('/upload', upload.single('audioData'), function (req, res, next) {
  const temporaryFilename = req.file.path,
  wavData = fs.createReadStream(temporaryFilename),
  bytes = fs.statSync(temporaryFilename)["size"];

   
  let resp = requestBirdnetApi(wavData);
  console.log(resp);
   return res.json({resp});
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


function requestBirdnetApi(stream){
  //console.log(stream);

  var data = {
    upload: stream,
		meta: "{\"deviceId\":\"6668948700\",\"appVersion\":\"1.83\",\"ts\":1616790316034,\"author\":{\"name\":\"\",\"email\":\"\"},\"recordingId\":15,\"gps\":{\"lat\":31.249160766601563,\"lon\":121.48789978027344,\"alt\":60},\"city\":\"\",\"eBird_threshold\":0.05999999865889549,\"week\":0,\"os\":\"Android\",\"sensitivity\":1.25}"
  };

  const options = {
    method: "POST",
    url: "https://birdnet.cornell.edu/api2/upload",
    port: 443,
    headers: {
        "Content-Type": "multipart/form-data"
    },
    formData : data
};

request(options, function (err, res, body) {
    if(err){ 
      console.log(err);
      return err;
    }
    lastResponse = body;
    console.log(body);
    return body;
});

}


app.get('/', (req, res) => {
  var data = {
    "Fruits": [
      "apple",
      "orange"    ]
  };

  res.json(data);
})