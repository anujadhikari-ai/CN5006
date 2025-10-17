const dateOfBirth= "15-01-2001"
const getStudentName= ()=>
{
    return 'Anuj'
}
const getCampusName= () =>
{
    return('University of East London Dockland Campus')
}
//exporting functions & variable outside the module
exports.getName= getStudentName
exports.Location=getCampusName
exports.dob=dateOfBirth
// experting functions with parameters
exports.Studentgrade=(marks)=>
{
    if (marks>50 && marks<70) return ('B grade')
        else
            return ('A grade')
}
