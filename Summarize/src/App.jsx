import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');

  const summarizeText = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/summarize`,
        { text: inputText }
      );
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error calling backend API:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">📝 Text Summarizer</h1>

        <textarea
          rows="8"
          className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Paste or write your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <div className="text-center">
          <button
            onClick={summarizeText}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Summarize
          </button>
        </div>

        {summary && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">🔍 Summary:</h2>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-gray-800 whitespace-pre-wrap">
              {summary}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
