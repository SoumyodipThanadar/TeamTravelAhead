import React, { useState } from "react";
import "./css/Eco.css";

const Eco = () => {
    const [transportMode, setTransportMode] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [distance, setDistance] = useState("");
    const [carbonFootprint, setCarbonFootprint] = useState(null);
    const [suggestions, setSuggestions] = useState("");
    const [results, setResults] = useState(null);
    const [showComparison, setShowComparison] = useState(false);
    const [ecoTips, setEcoTips] = useState("");
    const [showDashboard, setShowDashboard] = useState(false);

    const calculateImpact = () => {
        let footprint = 0;

        if (transportMode === "car") {
            switch (fuelType) {
                case "petrol":
                    footprint = distance * 0.19;
                    break;
                case "diesel":
                    footprint = distance * 0.17;
                    break;
                case "electric":
                    footprint = distance * 0.03;
                    break;
                default:
                    footprint = 0;
            }
        } else if (transportMode === "bus") {
            switch (fuelType) {
                case "diesel":
                    footprint = distance * 0.15;
                    break;
                case "electric":
                    footprint = distance * 0.03;
                    break;
                default:
                    footprint = 0;
            }
        } else if (transportMode === "plane") {
            // Assuming short-haul or long-haul based on distance
            if (distance <= 1500) {
                footprint = distance * 0.25; // Short-haul
            } else {
                footprint = distance * 0.15; // Long-haul
            }
        } else if (transportMode === "train") {
            switch (fuelType) {
                case "electric":
                    footprint = distance * 0.01;
                    break;
                case "diesel":
                    footprint = distance * 0.05;
                    break;
                default:
                    footprint = 0;
            }
        }

        setCarbonFootprint(footprint.toFixed(2));

        
        let recommendations = "";
        if (footprint > 100) {
            recommendations = "Consider using a train or bus to reduce your carbon footprint. Avoid air travel for short distances.";
        } else {
            recommendations = "Your selected mode of transport is relatively eco-friendly. Keep up the good work!";
        }
        recommendations += " You can offset your carbon footprint by donating to environmental projects.";
        setSuggestions(recommendations);

        // Personalized Eco Tips
        let tips = "Here are some personalized tips for eco-friendly travel:\n";
        if (transportMode === "plane") {
            tips += "- Choose non-stop flights when possible to reduce emissions.\n";
        }
        if (transportMode === "car") {
            tips += "- Carpooling can significantly lower your carbon footprint.\n";
        }
        tips += "- Pack light to reduce fuel consumption.\n";
        tips += "- Choose eco-friendly accommodations.\n";
        setEcoTips(tips);

        // Comparison of Transportation Modes
        setResults({
            carPetrol: (distance * 0.19).toFixed(2),
            carDiesel: (distance * 0.17).toFixed(2),
            carElectric: (distance * 0.03).toFixed(2),
            busDiesel: (distance * 0.15).toFixed(2),
            busElectric: (distance * 0.03).toFixed(2),
            planeShortHaul: (distance <= 1500 ? (distance * 0.25).toFixed(2) : "-"),
            planeLongHaul: (distance > 1500 ? (distance * 0.15).toFixed(2) : "-"),
            trainElectric: (distance * 0.01).toFixed(2),
            trainDiesel: (distance * 0.05).toFixed(2),
        });
    };

    const showDashboardHandler = () => {
        setShowDashboard(!showDashboard);
    };

    return (
        <div className="reel-wrapper">
            <div className="title-containerwxx">
                <h1>Switch to Eco-Saver</h1>
            </div>
            <div className="ghy">
                <div className="eco-container">
                    <h2>Eco-Travel Impact Calculator</h2>
                    <div className="form-group">
                        <label htmlFor="transportMode">Choose Transportation Mode:</label>
                        <select
                            id="transportMode"
                            value={transportMode}
                            onChange={(e) => setTransportMode(e.target.value)}
                        >
                            <option value="">Select Mode</option>
                            <option value="car">Car</option>
                            <option value="bus">Bus</option>
                            <option value="plane">Plane</option>
                            <option value="train">Train</option>
                        </select>
                    </div>

                    {transportMode === "car" || transportMode === "bus" || transportMode === "train" ? (
                        <div className="form-group">
                             {/* <label htmlFor="fuelType">Choose Fuel Type:</label> */}
                             <label htmlFor="fuelType" style={{ color:  '#ea2a1c', fontWeight: 'bolder', fontSize: '20px' }}>
  Choose Fuel Type:
</label>


                            <select
                                id="fuelType"
                                value={fuelType}
                                onChange={(e) => setFuelType(e.target.value)}
                            >
                                <option value="">Select Fuel Type</option>
                                <option value="petrol">Petrol</option>
                                <option value="diesel">Diesel</option>
                                <option value="electric">Electric</option>
                            </select>
                        </div>
                    ) : null}

                    <div className="form-group">
                        <label htmlFor="distance">Enter Distance (in km):</label>
                        <input
                            type="number"
                            id="distance"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                        />
                    </div>
                    <button onClick={calculateImpact} className="calculate-btn">Calculate</button>

                    {carbonFootprint !== null && (
                        <div className="results">
                            <h3>Your Estimated Carbon Footprint: {carbonFootprint} kg CO2</h3>
                            <p>{suggestions}</p>
                            <p>{ecoTips}</p>

                            {/* Showing comparison results */}
                            <button onClick={() => setShowComparison(!showComparison)} className="compare-btn">
                                {showComparison ? "Hide Comparison" : "Show Comparison"}
                            </button>

                            {showComparison && (
                                <div className="comparison">
                                    <h4>Carbon Footprint Comparison (kg CO2):</h4>
                                    <ul>
                                        <li>Car (Petrol): {results.carPetrol}</li>
                                        <li>Car (Diesel): {results.carDiesel}</li>
                                        <li>Car (Electric): {results.carElectric}</li>
                                        <li>Bus (Diesel): {results.busDiesel}</li>
                                        <li>Bus (Electric): {results.busElectric}</li>
                                        <li>Plane (Short-Haul): {results.planeShortHaul}</li>
                                        <li>Plane (Long-Haul): {results.planeLongHaul}</li>
                                        <li>Train (Electric): {results.trainElectric}</li>
                                        <li>Train (Diesel): {results.trainDiesel}</li>
                                    </ul>
                                </div>
                            )}

                            {/* Show Environmental Impact Dashboard */}
                            <button onClick={showDashboardHandler} className="dashboard-btn">
                                {showDashboard ? "Hide Dashboard" : "Show Environmental Impact Dashboard"}
                            </button>

                            {showDashboard && (
                                <div className="dashboard">
                                    <h4>Environmental Impact Dashboard</h4>
                                    <p>Total Carbon Offset: 150 kg CO2</p>
                                    <p>Trees Planted: 10</p>
                                    <p>Renewable Energy Projects Supported: 3</p>
                                </div>
                            )}

                            {/* Social Sharing */}
                            <div className="social-sharing">
                                <p>Share your eco-friendly journey:</p>
                                <button 
                                    className="social-btn twitter"
                                    onClick={() => window.open(
                                        `https://twitter.com/intent/tweet?text=I just completed an eco-friendly journey! Check out my impact! #EcoTravel`, 
                                        '_blank'
                                    )}
                                >
                                    Share on X
                                </button>
                                <button 
                                    className="social-btn facebook"
                                    onClick={() => window.open(
                                        `https://www.facebook.com/sharer/sharer.php?u=https://travelahead.netlify.app/&quote=I%20just%20completed%20an%20eco-friendly%20journey!%20Check%20out%20my%20impact!%20%23EcoTravel`, 
                                        '_blank'
                                    )}
                                >
                                    Share on Facebook
                                </button>
                                <button 
                                    className="social-btn instagram"
                                    onClick={() => window.open(
                                        `https://www.instagram.com`, 
                                        '_blank'
                                    )}
                                >
                                    Share on Instagram
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Eco;



