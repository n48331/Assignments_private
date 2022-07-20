// create a object, define 3 prop and 2 method. 
var employee = {
    id: 'IND9853',
    name: 'Alex',
    company: 'Indegene',
    job: function () {
        return 'web developing';
    },
    work: function () {
        return 'working';
    }
}
var ename = employee.name
var job = employee.job()
console.log(ename, job);
