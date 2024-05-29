import './dashboard.css'
import {useEffect, useState} from "react";
import {getVehicleData} from "../../Services/ProductService.tsx";

export const DashboardPage = () => {
    const _data = {
        battery: '80',
        temperature: '100',
        avgSpeed: '68',
        maxSpeed: '80',
        time: '19:30',
        currentSpeed: '28',
        totalDistance: "1000",
        avgFuel: '34',
        startl:"hubli",
        endl:"dharwad",
    }
    const [data, setData] = useState(_data);
    useEffect(() => {
        // Function to fetch vehicle data
        const fetchData = () => {
            getVehicleData().then(response => {
                console.log(response);
                setData(response.data.data);
            }).catch(error => {
                console.error("Failed to fetch vehicle data:", error);
            });
        };
        // Call fetchData immediately on mount
        fetchData();

        // Set up an interval to fetch data every 1 second
        const intervalId = setInterval(fetchData, 1000);

        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <div className="container-fluid">
                <div className="dashboard mx-auto">
                    <div className="d-flex flex-row justify-content-between align-items-center"
                         style={{width: '40%'}}>
                        <div style={{width: '55%'}}>

                        </div>
                        <div className="d-flex flex-column justify-content-between"
     style={{width: '25%', minWidth: '350px', minHeight: '600px'}}>
    <div style={{height: '30%', minHeight: '150px'}}></div>
    
    <div style={{height: '40%', minHeight: '300px'}}
         className="text-white fs-1 text-center d-flex flex-column justify-content-center">
        <div className="ps-5"> {data.battery}<span className="fs-3">%</span></div>
    </div>
    <div className="d-flex flex-column justify-content-end"
         style={{height: '30%', minHeight: '150px'}}>
        {/* Displaying Start Location and End Location with Arrow Mark */}
        <div className="d-flex flex-row justify-content-between text-white"
             style={{paddingBottom: '30px',paddingLeft:'90px',fontSize: '25px'}}>
            <div style={{alignContent:'center'}}
                 className="d-flex flex-row justify-content-end ps-3">
                {data.startl} <span className="ps-1 text-secondary">→→</span> {data.endl}
            </div>
            <div className="d-flex flex-row flex-grow-1"></div>
        </div>
        {/* Temperature and Average Speed */}
        <div className="d-flex flex-row justify-content-between text-white"
             style={{paddingBottom: '45px'}}>
            <div style={{width: '140px'}}
                 className="d-flex flex-row justify-content-end ps-3">
                {data.temperature} <span className="ps-1 text-secondary">°F</span>
            </div>
            <div className="d-flex flex-row flex-grow-1"></div>
            <div className="d-flex">
                {data.avgSpeed} <span className="text-secondary ps-1"> kmph</span>
            </div>
        </div>
    </div>
</div>
<div style={{width: '30%'}}>


                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between h-100 py-4"
                         style={{width: '20%', minHeight: '600px'}}>
                        <div className="text-white fw-medium text-center">
                            {data.time}
                        </div>
                        <div className="text-info fw-bold d-flex flex-column align-items-center">
                            <div style={{fontSize: '56px'}}>
                                {data.currentSpeed}
                            </div>
                            <div className="fw-medium fs-4">
                                KPMH
                            </div>
                        </div>
                        <div className="mx-auto pb-3">
                            <div
                                className="d-flex fw-bold fs-2 justify-content-center align-items-center border border-5 border-danger bg-light rounded-circle"
                                style={{width: '80px', height: '80px'}}>
                                {data.maxSpeed}
                            </div>
                        </div>
                    </div>
                    <div style={{width: '40%', minHeight: '600px'}}
                         className="d-flex flex-row justify-content-center">
                        <div style={{width: '30%'}}></div>
                        <div style={{width: '40%', minHeight: '600px'}}
                             className="text-white d-flex flex-column justify-content-center flex-grow-1">
                            <div className="mt-5 pt-4">
                                <div className="d-flex ps-3 fs-4" style={{height: '90px'}}>{data.totalDistance} KM
                                </div>
                                <div className="d-flex ps-3 fs-4" style={{height: '80px'}}>{data.avgFuel} kmpl</div>
                                <div className="d-flex ps-3 fs-4 pt-2" style={{height: '100px'}}>{data.avgSpeed} kmph
                                </div>
                            </div>
                        </div>
                        <div style={{width: '30%'}}></div>
                    </div>
                </div>
            </div>
        </>
    );
};
