'use client';

import { useState } from 'react';

export default function AnagramChecker() {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [result, setResult] = useState<string | null>(null);

  function areAnagrams(w1: string, w2: string) {
    return (
      w1.toLowerCase().split('').sort().join('') ===
      w2.toLowerCase().split('').sort().join('')
    );
  }

  function handleCheck() {
    if (!word1 || !word2) {
      setResult('Please enter both words.');
      return;
    }

    const isAnagram = areAnagrams(word1, word2);
    setResult(isAnagram ? '✅ They are anagrams!' : '❌ They are NOT anagrams.');
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Anagram Checker</h1>
      <input
        type="text"
        placeholder="Enter first word"
        value={word1}
        onChange={(e) => setWord1(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <input
        type="text"
        placeholder="Enter second word"
        value={word2}
        onChange={(e) => setWord2(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button
        onClick={handleCheck}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Check
      </button>
      {result && <p className="text-lg font-semibold mt-4">{result}</p>}
    </div>
  );
}
