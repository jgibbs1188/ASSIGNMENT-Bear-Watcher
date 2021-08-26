import handleSubmitButtonEvent from './data/river';

const DOMEvents = () => {
  document.querySelector('#bearSubmit').addEventListener('click' || 'keyup', handleSubmitButtonEvent);
};

export default DOMEvents;
