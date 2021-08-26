import renderToDOM from '../renderToDOM';

const bears = [];

const cardBuilder = (array) => {
  let domString = '';
  array.forEach((bear) => {
    domString += `
    <div class="bear-card">
        <div class="card bear-card-image" style="width: 18rem;">
            <img src="${bear.image}" class="card-img-top" alt="${bear.name}">
            <div class="card-body">
                <p class="card-text">${bear.name}</p>
            </div>
        </div>
    </div>
        `;
  });
  renderToDOM('#bearCardHolder', domString);
};

const handleSubmitButtonEvent = (event) => {
  event.preventDefault();
  const newBear = {
    name: document.querySelector('#bearName').value,
    image: document.querySelector('#bearImage').value,
  };
  bears.push(newBear);
  cardBuilder(bears);
};

export default handleSubmitButtonEvent;
