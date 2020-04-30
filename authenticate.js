/*var s = require("http");
var uname = "12";
var pwd = "123";
body = "";
function processRequest(req, res) {
  if (req.method == "POST") {
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log("data:" + body);
      //res.end("ok");
    });
    var p = body.split("&");
    var u = p[0].split("=");
    //var pa = p[1].split("=");
    console.log(body + "\n" + p + "\n" + p[0] + "\n");
    if (uname == u && pwd == pa) {
      var result = "<html><body><b>welcome" + uname + "</b></body></html>";
    } else {
      var result =
        "<html><body><b> Invalid credentials<a href='http://localhost:8080'>login again</a></b></body></html>";
    }
    res.end(result);
  } else {
    var str = "<Html><body>";
    str += "<b>log in to proceed</b>";
    str += "<form method='POST' action='http://localhost:8080/'>";
    str +=
      "UserName:<input type='text' placeholder='uname' name='userid' /><br >";
    str +=
      "Password:<input type='password' placeholder='password' name='pwd' /><br>";
    str += "<button type='submit'>Login</button></form></body></Html>";
    res.end(str);
  }
}
var server = s.createServer(processRequest);
server.listen(8080);
console.log("server started at 8080");*/
var s = require("http");
var fsref = require('fs');
var uname = "123";
var pwd = "123";
function processRequest(request, response) {
  if (request.method == "POST") {
    body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    }); //chunk will be in json format.
    request.on("end", () => {
      console.log("Data : " + body);
      var pairs = body.split("&");
      var u = pairs[0].split("=");
      var p = pairs[1].split("=");

      if (uname == u[1] && pwd == p[1]) {
        var resstr = "<html><body><b>Welcome Mr./Ms." + uname + "</B>";
        resstr += "<BR><B>Today = " + new Date() + "</b></body></html>";
        today = new Date();
        var logdata = uname + 'logged in on ' + today;
        fsref.appendFile('Login.log', logdata,(err) => {
          if (err)
          {
            console.log("unable to write log");
          }
          else {
            console.log("user info logged successfully");
          }
      })
      } else {
        var resstr = "<html><body><b>Invalid username/password</b><br>";
        resstr += "<b><a href='http://localhost:8080'>Login again</a></b>";
        resstr += "</body></html>";
      }
      response.end(resstr);

      response.end("OK");
    });
    /* var u=pairs[0].split('=');
        var p=pairs[1].split('=');

        if((uname == u[1]) && (pwd== p[1]))
        {
            var resstr='<html><body><b>Welcome Mr./Ms.' + uname + '</B>';
            resstr='<BR><B>Today = ' +  new Date() + '</b></body></html>';
            }else
            {
                var resstr='<html><body><b>Invalid username/password</b><br>';
                resstr += '<b><a href=\'http://localhost:8080\'>Login again</a></b>';
                resstr+='</body></html>';
            }
            response.end(resstr);*/
  } else {
    var str = "<HTML><body>";
    str += "<B>Login to proceed</B><br>";
    str += "<form method='POST' action='http://localhost:8080'>";
    str +=
      "User name <input type='text' placeholder='Enter name' name='userid'/><BR>";
    str += "Password <input type='password' name='pwd' /><BR><br>";
    str += "<input type='submit' value='SignIn' /> </BODY></HTML>";
    fsref.readFile('login.html', (err, data)=>{
      if(err) {
        console.error(err);
      }
      else
      {
        var filedata = data;
        response.end(filedata);
      }
      
    });
    //response.end(str);
  }
}
var server = s.createServer(processRequest);
server.listen(8080);
console.log("Started server at 8080");
