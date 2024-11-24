import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { AddEmployee, Home, Login, MyPayroll, MyProfile, PayrollLogs, ViewEmployee } from './components';
import './App.css';





function App() {

  const [employees, setEmployees] = useState([]);
  const [employeeUser, setEmployeeUser] = useState([]);
  const [adminUser, setAdminUser] = useState([]);


  return (
    <>
      <div className="App">

        <Routes>
          <Route index element={<Login />}></Route>
        </Routes>

        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/myPayroll' element={<MyPayroll />} />
          <Route path='/MyProfile' element={<MyProfile />} />
          <Route path='/payrollLogs' element={<PayrollLogs />} />
          <Route path='/viewEmployee' element={<ViewEmployee />} />

        </Routes>

      </div>

      <Routes>

      </Routes>
    </>
  );
}

export default App;
