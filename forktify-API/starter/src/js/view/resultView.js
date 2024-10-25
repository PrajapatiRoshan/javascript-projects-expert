import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again!';

  // _generateMarkup() {
  //   return this._data.map(src => this._generateMarkupPerview(src)).join('');
  // }

  _generateMarkup() {
    return this._data.map(src => previewView.render(src, true)).join('');
    // return this._data.map(src => this._generateMarkupPerview(src)).join('');
  }

  //   _generateMarkupPerview(result) {
  //     const id = window.location.hash.slice(1);
  //     return `
  //     <li class="preview">
  //         <a class="preview__link ${
  //           result.id === id ? 'preview__link--active' : ''
  //         }" href="#${result.id}">
  //           <figure class="preview__fig">
  //             <img src="${result.image}" alt="Test" />
  //           </figure>
  //           <div class="preview__data">
  //             <h4 class="preview__title">${result.title}</h4>
  //             <p class="preview__publisher">${result.publisher}</p>
  //           </div>
  //         </a>
  //     </li>
  // `;
  //   }
}

export default new ResultView();
