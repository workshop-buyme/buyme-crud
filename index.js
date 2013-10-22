module.exports = {
  "welcome": [{
    "status": "write"
  },{
    "status": "writeln",
    "message": "Welcome to the Angular-ReactiveMongo-Autosource template"
  },{
    "status": "write"
  }],
  "prompts": [{
    "type": "input",
    "name": "name",
    "message": "[capitalized] What's the name of your entity?"
  }],
  "bye": [{
    "status": "writeln",
    "message": "Be sure to include the JavaScript file on your main template. Also, update your 'routes' file. Next, time to code by implementing the model."
  },{
    "status": "write"
  },{
    "status": "ok",
    "message": "Thanks you for using me!"
  },{
    "status": "write"
  }],
  "files": {
    "index.js": {
      "excluded": true
    }
  }
}
