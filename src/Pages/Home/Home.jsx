import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import { useSelector } from 'react-redux';

import "./Home.scss";

const Home = ({ showSidebar, active, closeSidebar }) => {
    const [data, setData] = useState([]);
    const { Data, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        // Simulating data fetching (replace with actual API call)
        setTimeout(() => {
            setData(["Course 1", "Course 2"]);
           
        }, 3000);
    }, []);

    return (
        <div className="home">
            <Sidebar active={active} closeSidebar={closeSidebar} />
            <div className="home_container">
                <Navbar showSidebar={showSidebar} />
                
                <div className="content">
                    {loading ? (
                        <div className="skeleton-container">
                            {[...Array(6)].map((_, index) => (
                                <Skeleton key={index} height={250} width={350} />
                            ))}
                        </div>
                    ) : (
                        <p>Hellos</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
