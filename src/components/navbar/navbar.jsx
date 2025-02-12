import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, clearError } from '../../redux/actions/dataAction';
import "./navbar.scss";

const Navbar = () => {
    const [selectedCourse, setSelectedCourse] = useState("");
    const dispatch = useDispatch();
    const { Data, error } = useSelector((state) => state.data);


    useEffect(() => {
        if (selectedCourse || selectedCourse == "") {
            dispatch(clearError()); 
            dispatch(fetchData(selectedCourse));
        }
    }, [selectedCourse, dispatch]);

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

    return (
        <header className="navbar">
            <div className="navbar-content">
                <h1 className="navbar-title">Library</h1>
                <div className="search-container">
                    <label htmlFor="course-select">Course:</label>
                    <select
                        id="course-select"
                        value={selectedCourse}
                        onChange={handleCourseChange}
                        className="dropdown"
                    >
                        <option value="" disabled>Select a course</option>
                        <option value="BSc Mathematical Science">BSc Mathematical Science</option>
                        <option value="BSc Life Sciences">BSc Life Sciences</option>
                    </select>
                </div>
            </div>

        </header>
    );
};

export default Navbar;
