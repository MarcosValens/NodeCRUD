const employeeController = {};

const Employee = require("../models/Employee");

// GET ALL EMPLOYEES
employeeController.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

// FIND EMPLOYEE BY ID
employeeController.getEmployee = async (req, res) => {
  //Employee.findOne({_id:req.params.id})
  const employee = await Employee.findById(req.params.id);
  res.send(employee);
};

// CREATE EMPLOYEE
employeeController.createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();

  res.send({ message: "Employee created" });
};

// EDIT EMPLOYEE
employeeController.editEmployee = async (req, res) => {
    await Employee.findOneAndUpdate(req.params.id, req.body)
    res.json({status: "Employee Updated"})
};

// DELETE EMPLOYEE
employeeController.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status:"Employee deleted"})
};

module.exports = employeeController;
