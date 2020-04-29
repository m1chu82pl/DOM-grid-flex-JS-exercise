const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  /* ponoć to nie funkcja w każdym razie ma ona na celu zapobieganie wysłania formularza. W przeciwnym razie formularz zostałby "wysłany" czyli strona zresrtowałaby się  */
  const element = document.createElement(node);
  if (txt) {
    const text = document.createTextNode(txt);
    element.appendChild(text);
  }
  if (attr) {
    element.setAttribute(attr, value);
  }
  document.querySelector('.content').appendChild(element);
};

const searchElements = (event, nameElement) => {
  event.preventDefault();
  const infoElement = document.querySelector('.result');
  infoElement.textContent = '';
  const elements = document.querySelectorAll(nameElement);
  if (elements.length) {
    infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie znalazłem ${elements.length} elementów <strong>${nameElement}</strong></p>`;
    showInfo(elements, infoElement)
  } else {
    infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie nie znalazłem elementów <strong>${nameElement}</strong></p>`;
    return;
  }
};

const showInfo = (elements, infoElement) => {
  console.log(elements);
  elements.forEach(element => {
    const item = document.createElement('div');
    item.className = 'result__element-description';
    item.innerHTML = `
    <div>${element.nodeName}</div>
    <div>klasa/klasy: ${element.className}</div>
    <div>Wysokość elementu (offsetHeight): ${element.offsetHeight}</div>
    <div>Szerokość elementu (offsetWidth): ${element.offsetWidth}</div>
    <div>Odległość od lewej krawędzi (offsetLeft): ${element.offsetLeft}</div>
    <div>Odległość od górnej krawędzi (offsetTop): ${element.offsetTop}</div>
    <div>liczba elementów dzieci (childElementCount): ${element.childElementCount}</div>
    `;
    infoElement.appendChild(item);
  })
};

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
  e,
  addForm.elements.node.value,
  addForm.elements.text.value,
  addForm.elements.attr.value,
  addForm.elements.value.value,
));

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));