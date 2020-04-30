/*var http = require("http");
v = 0;
http
  .createServer(function processRequest(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    //response.end("<html><body>");
    //response.end("<b>first node .jds<b>");
    v++;
    //response.end("<b>visitor</b>" + v);
    // response.end("today date" + today);
    response.end("<b><i>welcome to node js</i></b>");
    //response.end("</body></html>");
  })
  .listen(8080);
//var s = server.createServer(processRequest);
//s.listen(8080);*/
var server = require("http");
visitorcount = 0;
function processRequest(request, response) {
  //audio/mp3, video/mp4, imagge/jpg, document/Excel, document/Word
  //These are called  MIME types
  console.log("*******************");
  response.writeHead(200, { "Content-Type": "text/html" });
  var today = new Date();
  // response.end('<HTML><BODY>');
  var str = "<HTML><BODY><B>First NodeJS</B><BR>";
  str += "<B>Visitor#  </B>" + visitorcount;
  str += "<B>Today : " + today + "<BR>";
  str += "<B>Today : " + today + "<BR>";
  str += "<B><I>Welcome to NodeJS</I></B><BR></BODY></HTML>";
  response.end(str);
}
var s = server.createServer(processRequest);
s.listen(8070);
