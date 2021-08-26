import '../styles/main.scss';
import createForm from './components/bearForm';
import pageLayout from './components/pageLayout';
import DOMEvents from './helpers/DOMEvents';

const init = () => {
  pageLayout();
  createForm();
  DOMEvents();
};

init();
