class Employee{

setEmpDetails(name, id, phoneno){
    this.name = name;
    this.id = id;
    this.phoneno = phoneno;
}

getEmpName(){
    return this.name;

}
getEmpId(){
    return this.id;
}
getEmpPhoneNo(){
    return this.phoneno;
}
     
}
let emp1 = new Employee();

emp1.setEmpDetails('john', 1001, 987890000);
console.log (emp1.getEmpName());
console.log (emp1.getEmpId());
console.log (emp1.getEmpPhoneNo());