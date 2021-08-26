import renderToDOM from "../renderToDOM";

const bears = [];

const cardBuilder = (array) => {
  let domString = '';
  array.forEach((bear) => {
    domString += `
    <div class="bear-card">
        <div class="bear-card-image" style="width: 18rem;">
            <img src="${bear.image}" class="card-img-top" alt="${bear.name}">
            <div class="bear-card-body">
                <p class="card-text">${bear.name}</p>
            </div>
        </div>
    </div>
        `;
  });
  renderToDOM('', domString);
};

const handleSubmitButtonEvent = (event) => {
  event.preventDefault();
  const newBear = {
    name: document.querySelector('#bearName').value,
    image: document.querySelector('#bearPicture').value,
  };
  bears.push(newBear);
  cardBuilder(bears);
  document.querySelector('form').reset();
};

export default handleSubmitButtonEvent