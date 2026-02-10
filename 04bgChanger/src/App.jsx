import React, { useState } from "react";
import axios from "axios";

function App() {
  const [path, setPath] = useState("");
  const [duplicates, setDuplicates] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!path.trim()) {
      alert("Please enter a valid folder path.");
      return;
    }

    setLoading(true);
    setDuplicates([]);

    try {
      const response = await axios.post("/scan", {
        path: path.trim(),
      });

      const { duplicates } = response.data;
      if (duplicates.length === 0) {
        alert("No duplicate files found!");
      }
      setDuplicates(duplicates);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to scan folder. Check if path is valid.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          🗂 Duplicate File Scanner
        </h1>

        <input
          type="text"
          placeholder="Enter folder path (e.g., C:\\delete)"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <button
          onClick={handleScan}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Scanning..." : "🔍 Scan Folder"}
        </button>

        <div className="mt-6">
          {duplicates.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-2">🔁 Duplicate Files:</h2>
              {duplicates.map((group, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-medium mb-1">Group {index + 1}</h3>
                  <ul className="list-disc ml-6 text-sm text-gray-700">
                    {group.map((file, idx) => (
                      <li key={idx}>{file}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
