window.addEventListener('load', start);

const globalWords = ['casa', 'pato', 'mesa', 'cadeira'];
let inputWord = null;
let isEditing = false;
let currentIndex = null;

function start() {
  preventSubmit();

  inputWord = document.querySelector('#inputWord');
  activateInput();
  render();
}

function preventSubmit() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
}

function activateInput() {
  function updateWord(newWord) {
    globalWords[currentIndex] = newWord;
  }

  function handleTyping(event) {
    let hasText = !!event.target.value && event.target.value.trim() !== '';
    if (!hasText) {
      clearInput();
      return;
    }

    if (event.key === 'Enter') {
      if (isEditing) {
        updateWord(event.target.value);
      } else {
        globalWords.push(event.target.value);
      }

      isEditing = false;
      render();
      clearInput();
    }
  }

  inputWord.focus();
  inputWord.addEventListener('keyup', handleTyping);
}

function render() {
  function createDeleteButton(index) {
    function deleteWord() {
      globalWords.splice(index, 1);
      render();
    }
    let button = document.createElement('button');
    button.textContent = 'X';
    button.classList.add('deleteButton');
    button.addEventListener('click', deleteWord);
    return button;
  }

  function createSpan(word, index) {
    function editWord() {
      inputWord.value = word;
      inputWord.focus();
      isEditing = true;
      currentIndex = index;
    }
    let span = document.createElement('span');
    span.classList.add('linkMouse');
    span.textContent = word;

    span.addEventListener('click', editWord);

    return span;
  }

  let divWords = document.querySelector('#words');
  divWords.innerHTML = '';

  let ul = document.createElement('ul');

  for (let i = 0; i < globalWords.length; i++) {
    let currentWord = globalWords[i];
    let li = document.createElement('li');
    let button = createDeleteButton(i);
    let span = createSpan(currentWord, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divWords.appendChild(ul);
  clearInput();
}

function clearInput() {
  inputWord.value = '';
  inputWord.focus();
}
