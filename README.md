# Wordly Dictionary App 📖

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
Wordly Dictionary is a simple and responsive single-page application that allows users to search for English words and view their meanings, phonetics, pronunciation audio, and synonyms using a public dictionary API.

This project demonstrates DOM manipulation, API integration, and dynamic rendering using vanilla JavaScript.

---

## Features
- Search for any English word
- Display word definitions
- Show phonetic spelling
- Play pronunciation audio
- Display synonyms (when available)
- Handle empty input and invalid words gracefully
- Fully dynamic single-page application (no page reload)

---

## Demo
To run the project:
1. Download or clone the repository
2. Open `index.html` in your browser
3. Type a word and click search

---

## How It Works
- User enters a word into the input field
- JavaScript fetches data from the Dictionary API
- The response is processed and displayed dynamically on the page
- Previous results are replaced with new searches

API used:
https://api.dictionaryapi.dev/

---

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- DOM Manipulation

---

## Project Structure
wordly-dictionary-app/
- index.html
- README.md
- script.js
- style.css




---

## Error Handling
The application handles:
- Empty search input
- Word not found errors
- Missing pronunciation or synonym data

---

## License

This project is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.

The software is provided "as is", without warranty of any kind, express or implied.

