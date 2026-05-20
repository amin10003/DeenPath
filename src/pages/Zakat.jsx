import { useState } from "react";

// Firebase Firestore
import { addDoc, collection } from "firebase/firestore";

// Firebase configuration
import { db } from "../firebase";

// Icons
import { Coins, Landmark, Wallet } from "lucide-react";

function Zakat() {
  // ==============================
  // FORM STATES
  // ==============================

  // Gold amount
  const [gold, setGold] = useState("");

  // Income amount
  const [income, setIncome] = useState("");

  // Business wealth
  const [business, setBusiness] = useState("");

  // Cash amount
  const [cash, setCash] = useState("");

  // Final zakat result
  const [zakat, setZakat] = useState(null);

  // Success/error message
  const [message, setMessage] = useState("");

  // =====================================
  // HANDLE INPUT CHANGES
  // =====================================
  const handleChanges = (e) => {
    // Get input name and value
    const { name, value } = e.target;

    // Gold input
    if (name === "gold") {
      setGold(value);

      // Income input
    } else if (name === "income") {
      setIncome(value);

      // Business input
    } else if (name === "business") {
      setBusiness(value);

      // Cash input
    } else if (name === "cash") {
      setCash(value);
    }
  };

  // ==============================
  // CALCULATE ZAKAT
  // ==============================
  const handleCalculate = async (e) => {
    // Prevent refresh
    e.preventDefault();

    // Convert inputs to numbers
    const totalWealth =
      Number(gold || 0) +
      Number(income || 0) +
      Number(business || 0) +
      Number(cash || 0);

    // 2.5% Zakat calculation
    const zakatAmount = totalWealth * 0.025;

    // Save result
    setZakat(zakatAmount);

    try {
      // Save to Firestore
      await addDoc(collection(db, "zakatRecords"), {
        gold,
        income,
        business,
        cash,
        totalWealth,
        zakatAmount,
        createdAt: new Date(),
      });

      setMessage("Zakat record saved successfully");
    } catch (error) {
      console.log(error);

      setMessage("Failed to save data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Zakat Calculator</h1>

        <p className="text-gray-600 mt-2">Learn and calculate your Zakat</p>
      </div>

      {/* Educational Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-3xl font-bold mb-4">What Is Zakat?</h2>

        <p className="text-lg text-gray-700 leading-8">
          Zakat is one of the Five Pillars of Islam.
        </p>

        <p className="text-lg text-gray-700 leading-8 mt-4">
          Muslims who possess wealth above the Nisab threshold must give 2.5% of
          their qualifying wealth to the needy.
        </p>

        <p className="text-lg text-gray-700 leading-8 mt-4">
          Zakat purifies wealth and helps society by supporting the poor and
          vulnerable.
        </p>
      </div>

      {/* Zakat Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Gold */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Coins className="mb-4 text-yellow-600" />

          <h2 className="text-2xl font-bold mb-2">Gold Zakat</h2>

          <p className="text-gray-700">Zakat paid on gold and silver.</p>
        </div>

        {/* Income */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Wallet className="mb-4 text-green-600" />

          <h2 className="text-2xl font-bold mb-2">Income Zakat</h2>

          <p className="text-gray-700">Zakat on saved money and salary.</p>
        </div>

        {/* Business */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Landmark className="mb-4 text-blue-600" />

          <h2 className="text-2xl font-bold mb-2">Business Zakat</h2>

          <p className="text-gray-700">Zakat on business assets and profit.</p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleCalculate}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-6">Calculate Your Zakat</h2>

        {/* Gold */}
        <input
          type="number"
          name="gold"
          placeholder="Gold Amount"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChanges}
        />

        {/* Income */}
        <input
          type="number"
          name="income"
          placeholder="Income Amount"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChanges}
        />

        {/* Business */}
        <input
          type="number"
          name="business"
          placeholder="Business Wealth"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChanges}
        />

        {/* Cash */}
        <input
          type="number"
          name="cash"
          placeholder="Cash Amount"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChanges}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded"
        >
          Calculate Zakat
        </button>
      </form>

      {/* Result */}
      {zakat !== null && (
        <div className="bg-white p-6 rounded-xl shadow-md mt-8">
          <h2 className="text-3xl font-bold mb-4">Your Zakat</h2>

          <p className="text-2xl text-green-700">{zakat.toFixed(2)}</p>

          <p className="mt-4 text-gray-700">
            This is 2.5% of your total wealth.
          </p>
        </div>
      )}

      {/* Message */}
      {message && <p className="mt-6 text-lg">{message}</p>}
    </div>
  );
}

export default Zakat;
