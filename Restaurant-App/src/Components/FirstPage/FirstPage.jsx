import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showEmployeeLogin, showManagerLogin, resetSection, } from "../../slice/sectionSlice";
import EmployeeLogin from "../Employee/EmployeeLogin";
import ManagerLogin from "../Manager/ManagerLogin";
import EmployeeDashboard from "../Employee/EmployeeDashboard";
// import ManagerDashboard from "./ManagerDashboard";
import "./FirstPage.css";

export default function FirstPage() {
    const dispatch = useDispatch();
    const activeSection = useSelector((state) => state.section.activeSection);

    // Main landing screen
    if (activeSection === "") {
        return (
            <div className="firstpage">
                <div className="background">
                    <h1>Restaurant POS System</h1>
                    <button onClick={() => dispatch(showEmployeeLogin())}>Employee</button>
                    <button onClick={() => dispatch(showManagerLogin())}>Manager</button>
                </div>
            </div>
        );
    }

    // Conditional rendering for sections
    return (
        <>
            {activeSection === "employeeLogin" && <EmployeeLogin />}
            {activeSection === "managerLogin" && <ManagerLogin />}
            {activeSection === "employeeDashboard" && <EmployeeDashboard />}
            {activeSection === "managerDashboard" && <ManagerDashboard />}
        </>
    );
}
