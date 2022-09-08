const employee = {
    name: "Zachariah",
    streetAdress: "1234 Home Rd."
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee };

    newEmployee[key] = value;
  
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = { ...employee };

    newEmployee[key] = value;
    delete newEmployee.key;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]=value;
    delete employee.key;
    return employee
}