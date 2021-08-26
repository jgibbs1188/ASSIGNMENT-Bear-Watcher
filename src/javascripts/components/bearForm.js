import renderToDOM from '../helpers/renderToDOM';

const createForm = () => {
  const domString = `
    <div id="bearForm">
        <div id="bearFormInput" class="input-group mb-3">
            <div class="mb-3 bearFormName">
                <label class="form-label"><strong>Bear Name</strong></label>
                <input type="text" class="form-control" id="bearName" placeholder="Smokey">
            </div>
            <div class="mb-3 bearFormImgUrl">
                <label class="form-label"><strong>Image</strong></label>
                <input type="url" class="form-control" id="bearPicture" placeholder="www.BearsAreGreat.com">
            </div>
            <div class="bearFormSubmitBtn">
                <button id="bearSubmit" type="submit" class="btn btn-success">Track</button> 
            </div>
        </div>
    </div>
    `;
  renderToDOM('#bearFormContainer', domString);
};

export default createForm;
