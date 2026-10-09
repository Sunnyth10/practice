import React from "react";
import "./App.css";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts";
const data = [
{name:"Jan"
, dose:400},
{name:"Feb"
, dose:700},
{name:"Mar"
, dose:900}
];


function CowinDashboard(){
	console.log('CowinDashboard render', data);
	return (
		<div className="dashboard">
			<h2>CoWIN Dashboard</h2>
			<div className="chart-container">
				<ResponsiveContainer width="100%" height={360}>
					<BarChart data={data}>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="dose" fill="#4facfe" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
export default CowinDashboard;
