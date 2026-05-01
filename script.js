// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("search-form");
  const input = document.getElementById("word-input");
  const result = document.getElementById("result");

  // Handle form submit
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const word = input.value.trim();

    if (!word) {
      result.innerHTML = "<p>Please enter a word to search.</p>";
      return;
    }

    fetchWord(word);
  });

  // Fetch data from API
  function fetchWord(word) {
    result.innerHTML = "<p>Searching...</p>";

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Word not found");
        }
        return response.json();
      })
      .then(data => displayResult(data))
      .catch(err => {
        result.innerHTML = `<p>${err.message}</p>`;
      });
  }

  // Display results
  function displayResult(data) {
    const wordData = data[0];

    const word = wordData.word;
    const phonetic = wordData.phonetic || "N/A";

    // ✅ FIXED AUDIO (safe + reliable)
    const audioObj = wordData.phonetics.find(p => p.audio);
    const pronunciation = audioObj ? "https:" + audioObj.audio : null;

    const definitions = wordData.meanings[0].definitions;

    let definitionsHTML = "";

    definitions.forEach(function (definition) {
        definitionsHTML += `<li>${definition.definition}</li>`;
    });

    result.innerHTML = `
      <p><strong>Word:</strong> ${word}</p>
      <p><strong>Pronunciation:</strong> ${phonetic}</p>

      ${
        pronunciation
          ? `<p><strong>Listen:</strong></p>
             <audio controls src="${pronunciation}"></audio>`
          : "<p>No audio available</p>"
      }

      <h3>Definitions:</h3>
      <ul>${definitionsHTML}</ul>
    `;
  }

});