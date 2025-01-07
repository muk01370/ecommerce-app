import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const Analytics = ({ isDarkmode }) => {
    const cardData = [
        { title: "Impressions", value: "136,758K", color: "bg-[#9b51e0]" },
        { title: "Engagements", value: "125,964K", color: "bg-[#27ae60]" },
        { title: "Conversions", value: "141,253K", color: "bg-[#2d9cdb]" },
        { title: "Bounce Rate", value: "154,179K", color: "bg-[#eb5757]" },
    ];

    // Data for the Pie Chart
    const pieData = [
        { name: "Desktop", value: 400 },
        { name: "Mobile", value: 300 },
        { name: "Tablet", value: 200 },
        { name: "Other", value: 100 },
    ];

    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

    return (
        <div
            className={`p-[20px] w-full min-h-screen ${isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"
                }`}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-[20px]">
                <h1
                    className={`text-2xl font-bold ${isDarkmode ? "text-white" : "text-gray-800"
                        }`}
                >
                    Analytics
                </h1>
                <span
                    className={`font-inter font-medium ${isDarkmode ? "text-gray-300" : "text-gray-600"
                        }`}
                >
                    Home → Dashboard → Analytics
                </span>
            </div>

            {/* Performance Cards */}
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[20px] mb-[30px]">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`${card.color} text-white rounded-lg p-[20px]`}
                    >
                        <h2 className="font-bold text-lg mb-[10px]">{card.title}</h2>
                        <p className="text-2xl font-bold">{card.value}</p>
                    </div>
                ))}
            </div>

            {/* Chart and Keywords */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px] mb-[30px]">
                {/* Animated Pie Chart */}
                <div
                    className={`rounded-lg p-[20px] ${isDarkmode ? "bg-[#112143]" : "bg-white"
                        }`}
                >
                    <div className="flex justify-between items-center mb-[20px]">
                        <h3
                            className={`text-lg font-bold ${isDarkmode ? "text-white" : "text-gray-800"
                                }`}
                        >
                            Visitors Device
                        </h3>
                        <select
                            className={`p-[5px] rounded ${isDarkmode ? "bg-[#071739] text-gray-200" : "bg-[#F8F8F8]"
                                }`}
                        >
                            <option>Select Option</option>
                        </select>
                    </div>
                    {/* Pie Chart */}
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Country Keywords */}
                <div
                    className={`rounded-lg p-[20px] ${isDarkmode ? "bg-[#112143]" : "bg-white"
                        }`}
                >
                    <h3
                        className={`text-lg font-bold ${isDarkmode ? "text-white" : "text-gray-800"
                            }`}
                    >
                        Country Keywords
                    </h3>
                    <ul className="mt-[20px]">
                        {[
                            { country: "Bangladesh", value: 2500, seo: "90%" },
                            { country: "United States", value: 1400, seo: "85%" },
                            { country: "Saudi Arabia", value: 3900, seo: "70%" },
                            { country: "Germany", value: 4170, seo: "65%" },
                            { country: "Philippines", value: 5298, seo: "58%" }
                        ]
                            .map((item, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center mb-[10px]"
                                >
                                    <span
                                        className={`font-inter ${isDarkmode ? "text-gray-200" : "text-gray-800"
                                            }`}
                                    >
                                        {item.country}
                                    </span>
                                    <div className="flex items-center gap-[10px]">
                                        <span
                                            className={`font-medium ${isDarkmode ? "text-white" : "text-gray-800"
                                                }`}
                                        >
                                            {item.value}
                                        </span>
                                        <span
                                            className={`text-sm ${isDarkmode ? "text-gray-300" : "text-gray-600"
                                                }`}
                                        >
                                            {item.seo}
                                        </span>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
