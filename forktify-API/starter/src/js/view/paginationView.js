import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    if (curPage === 1 && numPages > 1) {
      return this._generateNxtBtnMarkup(curPage);
    }

    if (curPage === numPages && numPages > 1) {
      return this._generatePrvBtnMarkup(curPage);
    }

    if (curPage < numPages) {
      return (
        this._generatePrvBtnMarkup(curPage) +
        this._generateNxtBtnMarkup(curPage)
      );
    }
    return '';
  }

  _generatePrvBtnMarkup(page) {
    return `
    <button data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page - 1}</span>
    </button>
  `;
  }

  _generateNxtBtnMarkup(page) {
    return `
        <button data-goto="${
          page + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
  `;
  }
}

export default new PaginationView();
