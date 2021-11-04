const fs = require('fs')     // --- order on node will be equivalent to node fetch.js args[0] args[1]
const args = process.argv.slice(2);
const url = args[0];
const fileName = args[1];


const request = require('request');
request(url, (error, response, body) => {  // sending request to get body of URL
 
  const content = body
  fs.writeFile(fileName, content, err => { // writing in filedName with content (which is body in prev. callback function)
    if (err) {
      console.error(err)
      return
    }
    
    //file written successfully
    console.log("It's complete!");
  })
  
});

