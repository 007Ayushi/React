import React, { useState } from "react";

function DuplicateList({ duplicates, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);
  const [deletedFiles, setDeletedFiles] = useState([]);

  const handleDelete = () => {
    const flatFiles = duplicates.flat(); // All files in one list
    setDeletedFiles(flatFiles);
    setShowDeleted(true);
    setShowConfirm(false);

    if (onDelete) onDelete(flatFiles); // Inform parent if needed
  };

  if (!duplicates || duplicates.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow w-3/4 mx-auto">
      <h2 className="text-xl font-bold text-blue-700 mb-4">🔁 Duplicate Files Found</h2>

      {duplicates.map((group, index) => (
        <div key={index} className="mb-3">
          <h3 className="font-semibold text-gray-800">Group {index + 1}</h3>
          <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
            {group.map((file, idx) => (
              <li key={idx}>{file}</li>
            ))}
          </ul>
        </div>
      ))}

      {!showConfirm && !showDeleted && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setShowConfirm(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            ✅ Yes, Delete Duplicates
          </button>
          <button
            onClick={() => setShowDeleted(false)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            ❌ No, Keep All
          </button>
        </div>
      )}

      {showConfirm && (
        <div className="mt-4 bg-yellow-100 border border-yellow-400 p-4 rounded">
          <p className="mb-2 text-yellow-800 font-semibold">Are you sure you want to delete all duplicates?</p>
          <div className="flex gap-4">
            <button
              onClick={handleDelete}
              className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
            >
              ✅ Confirm
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showDeleted && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded">
          <h3 className="text-green-800 font-bold mb-2">🗑 Deleted Files:</h3>
          <ul className="list-disc list-inside text-sm text-green-700">
            {deletedFiles.map((file, idx) => (
              <li key={idx}>{file}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DuplicateList;
