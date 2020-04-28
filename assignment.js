const os = require('os');
var name = new Buffer.alloc(3000);
var pname = new Buffer.alloc(3000);
var startdate = new Buffer.alloc(3000);
name.write(process.argv[2] + ",");
pname.write(process.argv[3] + ",");
startdate.write(process.argv[4]);
process.stdout.write(name + pname + startdate);
console.log(__dirname);
console.log("Heap menory used : " + process.memoryUsage().heapUsed);

console.log("PROCESSOR ARCHITECTURE "+process.env.PROCESSOR_ARCHITECTURE);
console.log("PROCESSOR LEVEL "+process.env.PROCESSOR_LEVEL);
console.log("MACHINE  NAME " + process.env.COMPUTERNAME);
console.log(process.env);