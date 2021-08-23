import '../styles/main.scss';
import createForm from './components/bearForm';
import pageLayout from './components/pageLayout';

const init = () => {
  pageLayout();
  createForm();
};

init();
