import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider';

const Dashboard = () => {
    const [financialData, setFinancialData] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/v1/organizations?email=${user?.email}`);
                const sortedData = response?.data?.result?.financialData.sort((a, b) => new Date(b.date) - new Date(a.date)) || [];
                setFinancialData(sortedData);
            } catch (error) {
                console.error('Error fetching financial data:', error);
            }
        };

        fetchData();
    }, [user]);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to DashBase, {user?.name}!</h1>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Financial Data</h2>
                {financialData.length === 0 ? (
                    <p className="text-center mt-8">No financial data available</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-black bg-opacity-10 border border-black border-opacity-10 shadow-md rounded-md">
                            <thead>
                                <tr className="bg-black text-white bg-opacity-80">
                                    <th className="py-2 px-4 border-b text-left">Date</th>
                                    <th className="py-2 px-4 border-b text-left">Income</th>
                                    <th className="py-2 px-4 border-b text-left">Expenses</th>
                                    <th className="py-2 px-4 border-b text-left">Debts</th>
                                    <th className="py-2 px-4 border-b text-left">Assets</th>
                                    <th className="py-2 px-4 border-b text-left">Financial Health</th>
                                </tr>
                            </thead>
                            <tbody>
                                {financialData.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-black bg-opacity-40 text-white' : ''}>
                                        <td className="py-2 px-4 border-b">{item.date.slice(0,12)}</td>
                                        <td className="py-2 px-4 border-b">{item.income}</td>
                                        <td className="py-2 px-4 border-b">{item.expenses}</td>
                                        <td className="py-2 px-4 border-b">{item.debts}</td>
                                        <td className="py-2 px-4 border-b">{item.assets}</td>
                                        <td className="py-2 px-4 border-b">{item.financialHealth}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
