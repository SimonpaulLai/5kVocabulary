# 5kVocabulary

A stylish web-based English vocabulary spelling game for self-learning and classroom use.  
Supports 5,000+ words, level selection, instant feedback, and modern animation effects.  
All data and code run locally—no login or backend needed.

## Features

- **5,000+ Vocabulary Words**  
  Large built-in wordlist with level, part of speech, and Chinese translation.

- **Level Selection**  
  Choose your difficulty (Lv.1–6) for adaptive learning.

- **Modern, Animated UI**  
  - Clean dark mode interface  
  - Interactive letter selection  
  - Animated “glow” and “ripple” effects when you succeed  
  - Responsive layout for desktop and tablet

- **Immediate Feedback**  
  - Letter color changes:  
    - Green: correct position  
    - Yellow: correct letter, wrong position  
    - Red: letter not in answer

- **No Login, No Ads**  
  Designed for privacy and smooth offline classroom use.

## How to Use

1. **Download or clone** this repo and open `index.html` in your browser.
2. **Select a level** (Lv.1–6) based on your needs.
3. Click **Begin** to start a new word challenge.
4. Click the letter boxes to select and fill in your answer.
5. Use the A–Z buttons to guess letters.
6. Enjoy the glowing, jumping, and ripple animations for correct answers!

## File Structure

/5kVocabulary/
├── 5kVoc.json # Main vocabulary data (word, part of speech, level, meaning)
├── index.html # Main webpage
├── main.js # Game logic (JS)
├── style.css # UI styles & animations

## Customization

- You can replace `7kVoc.json` with your own wordlist using the format:
  ```json
  [
    {
      "Vocabulary": "abandon",
      "PoS": "v.",
      "Level": "4",
      "Translation": "放棄"
    }
    ...
  ]

## Credits

UI & code: [SimonpaulLai]
Vocabulary Data: [Taiwan College Entrance Exam English Vocabulary List, CEEC](https://www.ceec.edu.tw/SourceUse/ce37/ce37.htm)
Chinese Translations: Generated via Google Translator
Inspiration: Modern spelling and puzzle games (e.g. Wordle, Spelling Bee)
