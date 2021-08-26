import renderToDOM from '../helpers/renderToDOM';

const pageLayout = () => {
  const domString = `
        <div>
            <h1>Y'all, come look at these bears!</h1>
                <p>Each year between July and September brown bears in the Katmai National Park congregate along the Brooks River. This river is one of the main rivers that Sockeye Salmon swim up to spawn. The brown bears wait in the shallows of the river and catch the salmon as they jump over rocks.</p>
                <p>Fill out this form to submit your entry for biggest bear!</p>
            <div id='bearFormContainer'></div>
        </div>
        <div class='bearCardContainer'>
            <div id='bearCardHolder'></div>
        </div>
    `;
  renderToDOM('body', domString);
};

export default pageLayout;
