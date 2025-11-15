function EmployeeInfo(name,age)
{
console.log("Welcome. My name is " + name+ ". My age is  "+ age)
}
console.log ("This is my first progame")
name="Anuj"
age="25"
// calling of the function EmployeeInfo
EmployeeInfo(name,age)
const EmpSkills= (Skills)=>
{
    console.log('I am Good in ' +Skills+ '.')
}
Skills= 'HTML'
EmpSkills(Skills)
const student= require('./StudentInfo')
const person= require('./Person')
console.log('Student Name: ' +student.getName())
console.log(student.Location())
console.log(student.dob)
console.log(student.Studentgrade())
console.log('Grade is: ' +student.Studentgrade(55))
person1= new person('Anuj','Nepal','anujad@gmail.com')
console.log('Using person Module', person1.getPersonInfo())
console.log("programe end")

os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
