import axios from 'axios';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const FinancialHealth = () => {
    const {user} = useContext(AuthContext);
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const [debts, setDebts] = useState('');
    const [assets, setAssets] = useState('');
    const [financialHealth, setFinancialHealth] = useState(null);
    const [date, setDate] = useState('');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based months

    // Function to validate the entered date (past month and year)
    const isValidDate = (inputDate) => {
        const enteredDate = new Date(inputDate);
        const enteredYear = enteredDate.getFullYear();
        const enteredMonth = enteredDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based months

        return (
            enteredDate <= currentDate && // Ensure the entered date is not in the future
            (enteredYear < currentYear || // Check year
                (enteredYear === currentYear && enteredMonth < currentMonth)) // Check month
        );
    };


    const calculateFinancialHealth = () => {
        // Convert inputs to numbers or set to 0 if not valid numbers
        const monthlyIncome = parseFloat(income) || 0;
        const monthlyExpenses = parseFloat(expenses) || 0;
        const totalDebts = parseFloat(debts) || 0;
        const totalAssets = parseFloat(assets) || 0;

        // Your scoring logic goes here
        // Adjust this logic based on your specific criteria
        const score = (monthlyIncome + totalAssets) - (monthlyExpenses + totalDebts);
        setFinancialHealth(score);
    };

    const downloadFinancialInfo = () => {
        const data = {
            MonthlyIncome: income,
            MonthlyExpenses: expenses,
            TotalDebts: debts,
            TotalAssets: assets,
            FinancialHealthScore: financialHealth !== null ? financialHealth.toFixed(2) : 'N/A',
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'financial_info.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const addToDatabase = async () => {
        try {
            // Ensure that all fields are filled before submitting to the database
            if (!income || !expenses || !debts || !assets || !date) {
                alert('Please fill in all fields.');
                return;
            }

            if (!isValidDate(date)) {
                toast('Please enter a date in the past or the current month.');
                return;
            }

            // Convert inputs to numbers
            const monthlyIncome = parseFloat(income) || 0;
            const monthlyExpenses = parseFloat(expenses) || 0;
            const totalDebts = parseFloat(debts) || 0;
            const totalAssets = parseFloat(assets) || 0;

            // Calculate financial health score
            const score = (monthlyIncome + totalAssets) - (monthlyExpenses + totalDebts);

            // Prepare data for sending to the server
            const financialData = {
                income: monthlyIncome,
                expenses: monthlyExpenses,
                debts: totalDebts,
                assets: totalAssets,
                date: new Date(date),
                financialHealth: Math.max(0, score), // Ensure non-negative score
                monthYear: new Date(date).toISOString().slice(0, 7)
            };

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/v1/organizations/financialData`, {financialData , email: user?.email});

            console.log({financialData , email: user?.email});
            console.log(`${import.meta.env.VITE_BACKEND_URI}/api/v1/organizations/financialData`);

            if (!response.data.success) {
                toast.error(response.data.message)
            } else {
                setIncome('');
                setExpenses('');
                setDebts('');
                setAssets('');
                toast.success("Data Added Successfully")
            }

        } catch (error) {
            console.error('Error adding data to the database:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8 p-8 bg-black bg-opacity-10 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
                Financial Health Calculator
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:items-end">
                {['income', 'expenses', 'debts', 'assets'].map((item) => (
                    <div key={item}>
                        <label className="block mb-2 text-gray-700" htmlFor={item}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </label>
                        <input
                            required
                            type="text"
                            id={item}
                            placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                            value={item === 'income' ? income : item === 'expenses' ? expenses : item === 'debts' ? debts : assets}
                            onChange={(e) => {
                                if (item === 'income') setIncome(e.target.value);
                                else if (item === 'expenses') setExpenses(e.target.value);
                                else if (item === 'debts') setDebts(e.target.value);
                                else setAssets(e.target.value);
                            }}
                            className="rounded-lg border p-2 w-full focus:outline-none focus:border-blue-500"
                        />
                    </div>
                ))}
                <div>
                    <label className="block mb-2 text-gray-700" htmlFor="date">
                        Date
                    </label>
                    <input
                        required
                        type="month"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="rounded-lg border p-2 w-full focus:outline-none focus:border-blue-500"
                        max={`${currentYear}-${String(currentMonth).padStart(2, '0')}`}
                    />
                </div>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg col-span-full md:col-span-2 lg:col-span-1"
                    onClick={calculateFinancialHealth}
                >
                    Calculate
                </button>
                {
                    financialHealth !== null &&
                    <>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg col-span-full md:col-span-2 lg:col-span-1"
                            onClick={downloadFinancialInfo}
                        >
                            Download Financial Info
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg col-span-full md:col-span-2 lg:col-span-1 mt-4"
                            onClick={addToDatabase}
                        >
                            Add to Database
                        </button>
                    </>
                }
            </div>

            {financialHealth !== null && (
                <div className="mt-6">
                    <p className="text-xl text-center text-green-600 font-bold">
                        Financial Health Score: {financialHealth.toFixed(2)}
                    </p>
                </div>
            )}
        </div>
    );
};

export default FinancialHealth;
