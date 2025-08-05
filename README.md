# 5kVocabulary: Spelling AB

*A stylish, offline English vocabulary spelling game for self-learning and classroom use.
Supports 5,000+ words, level selection, instant feedback, and modern animation effects.  
All data and code run locally—no login or backend needed.*

## Live demo

Available at [[Spelling AB](https://simonpaullai.github.io/5kVocabulary/)].

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
    - Blue: correct position  
    - Yellow: correct letter, wrong position  
    - Red: letter not in answer

- **QWERTY Keyboard Support**
  - On-screen keyboard for input
  - Memory/highlighting for guessed letters

- **No Login, No Ads**  
  Designed for privacy and smooth offline classroom use.

## How to Use

1. **Download or clone** this repo and open `index.html` in your browser.
2. **Select a level** (Lv.1–6) based on your needs.
3. Click **Begin** to start a new word challenge.
4. Click the letter boxes to select and fill in your answer.
5. Use the on-screen **QWERTY** buttons to guess letters.
6. Enjoy the glowing, jumping, and ripple animations for correct answers!

## File Structure

/5kVocabulary/
├── 5kVoc.json # Main vocabulary data (word, part of speech, level, meaning)
├── index.html # Main webpage
├── main.js # Game logic (JS)
├── style.css # UI styles & animations

## Customization

- You can replace `5kVoc.json` with your own wordlist using the format:
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

## Installation

1. Download this repository (Code > Download ZIP) or git clone.
2. Open index.html in your browser—no setup or installation required!

## Updatelog
- [x] Update QWERTY style keyboard input
- [x] Adding keyboard memory/highlight feature
- [x] Update responsive layout adjustments
- [ ] Multi-language support (UI & hints)
- [ ] Physical keyboard input support
- [ ] Race mode: Timer feature
- [ ] Challenge mode: Count down or restricted error feature
- [ ] Update pre/in-game hints
- [ ] Adding more control buttons (restart, show answer, skip word, etc.)
- [ ] Adding In-game tutorial & rules, information, adjustments, etc
- [ ] Default to Lv.1 on startup
*More features coming soon!!*

## Credits

UI & code: [SimonpaulLai]
Vocabulary Data: [Taiwan College Entrance Exam English Vocabulary List, CEEC](https://www.ceec.edu.tw/SourceUse/ce37/ce37.htm)
Chinese Translations: Generated via Google Translator
Inspiration: Modern spelling and puzzle games (e.g. Wordle, Spelling Bee, 1A2B)

## Notes

Pull requests, feature suggestions, and issues are welcome!
Designed for both self-study and classroom use —- good for English teachers and students.

