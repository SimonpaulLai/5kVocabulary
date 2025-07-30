let selectedLevel = null;
let answer = "";            // 正確單字
let currentGuess = [];      // 玩家目前猜的字母
let activeBoxIndex = 0;     // 目前選中的格子編號


// 產生 A~Z 鍵盤按鈕
function generateAlphabetButtons() {
  const letterContainer = document.getElementById('letter-buttons');
  letterContainer.innerHTML = '';

  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const btn = document.createElement('button');
    btn.textContent = letter;
    btn.className = 'letter-btn';
    btn.addEventListener('click', () => handleLetterClick(letter));
    letterContainer.appendChild(btn);
  }
}

// 動態顯示單字字母方塊
function renderLetterBoxes(word, isGuessing = false) {
  const boxContainer = document.getElementById("word-box");
  boxContainer.innerHTML = "";

  const letters = word.split("");

  letters.forEach((char, index) => {
    const box = document.createElement("div");
    box.className = "letter-box";
    box.textContent = isGuessing ? "?" : char;

    if (isGuessing) {
      box.classList.add("guess-box");
      box.addEventListener("click", () => {
        activeBoxIndex = index;
        document.querySelectorAll(".guess-box").forEach((b, i) => {
          b.classList.toggle("active", i === index);
        });
      });
    }

    boxContainer.appendChild(box);
  });

  currentGuess = new Array(letters.length).fill("?"); // 初始化猜測陣列

  // ⭐ 這一段加進去
  if (isGuessing) {
    activeBoxIndex = 0;
    let boxes = document.querySelectorAll(".guess-box");
    if (boxes.length) boxes[0].classList.add("active");
  }
}


// 頁面載入時載入第一筆單字
async function loadFirstWord() {
  try {
    const response = await fetch("5kVoc.json");
    const data = await response.json();

    const firstWord = data[0]?.Vocabulary || "???";
    renderLetterBoxes(firstWord);
  } catch (err) {
    console.error("讀取 JSON 發生錯誤：", err);
  }
}

// 點擊 Begin 後 → 從選定等級隨機挑一筆單字
async function loadRandomWordByLevel() {
  if (!selectedLevel) {
    // 初始 info-box 提示（不跳 alert）
    document.getElementById("info-box").textContent = "🛈 Please choose a level before beginning.";
    return;
  }

  try {
    const response = await fetch("5kVoc.json");
    const data = await response.json();

    // ✅ 先篩出該等級的單字
    const wordsInLevel = data.filter(item => item.Level === selectedLevel);

    if (wordsInLevel.length === 0) {
      document.getElementById("info-line").textContent = "🛈 No words found in this level.";
      return;
    }

    // ✅ 抽出一筆單字
    const selected = wordsInLevel[Math.floor(Math.random() * wordsInLevel.length)];
    const randomWord = selected.Vocabulary;

    // ✅ 記錄正解與渲染框框
    answer = randomWord;
    renderLetterBoxes(randomWord, true);

    // ✅ 更新 info 提示區顯示詞性與翻譯
    document.getElementById("info-line").innerHTML =
    `<span class="info-line"> Hint ｜ PoS: ${selected.PoS} ／ ZH: ${selected.Translation}</span>`;


  } catch (err) {
    console.error("讀取 JSON 發生錯誤：", err);
    document.getElementById("info-box").textContent = "🛈 Error loading word data.";
  }
}


function handleLetterClick(letter) {
  const boxes = document.querySelectorAll(".guess-box");
  if (!boxes.length || activeBoxIndex < 0 || activeBoxIndex >= boxes.length) return;

  currentGuess[activeBoxIndex] = letter;
  boxes[activeBoxIndex].textContent = letter;

  const answerLower = answer.toLowerCase();
  const targetLetter = answerLower[activeBoxIndex];
  const currentLetter = letter.toLowerCase();

  if (!answerLower.includes(currentLetter)) {
    boxes[activeBoxIndex].className = "letter-box guess-box wrong";
  } else if (currentLetter === targetLetter) {
    boxes[activeBoxIndex].className = "letter-box guess-box correct";
    // ✅ 只有正確時才自動往下
    if (activeBoxIndex < boxes.length - 1) {
      activeBoxIndex++;
      boxes.forEach((b, i) => b.classList.toggle("active", i === activeBoxIndex));
    }
  } else {
    boxes[activeBoxIndex].className = "letter-box guess-box misplaced";
    // 不自動跳
  }

  // 全部拼對才顯示提示
  if (currentGuess.join("").toLowerCase() === answerLower) {
    boxes.forEach((b, i) => {
  b.classList.add("correct", "celebrate");
  let ripple = b.querySelector('.ripple');
  if (ripple) ripple.remove();
  ripple = document.createElement('div');
  ripple.className = 'ripple';
  const rippleDelay = 0.08 * i; // 每個多 0.08 秒
  ripple.style.animationDelay = rippleDelay + 's';
  b.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
  b.addEventListener("animationend", () => b.classList.remove("celebrate"), { once: true });
});
}
}

// 綁定 level 選擇按鈕
document.querySelectorAll(".level-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedLevel = btn.dataset.level;
    document.querySelectorAll(".level-btn").forEach(b => b.classList.remove("active-level"));
    btn.classList.add("active-level");
  });
});


// 綁定 Begin 按鈕
document.getElementById("start-btn").addEventListener("click", loadRandomWordByLevel);

// 初始化
generateAlphabetButtons();
renderLetterBoxes("???");
document.getElementById("info-line").textContent = "Hint: Select a level and begin!";

