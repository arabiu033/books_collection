// Handle the operations required on a book
/* eslint-disable import/prefer-default-export */
import { listBooks } from './variables.js';

export class BookHandling {
  constructor(cBooks) {
    this.cBooks = cBooks;
    this.bookCount = 0;
    this.display();
  }

  display() {
    this.cBooks.forEach((e) => {
      this.bookCount = e.id;
      this.add(e.title, e.author);
    });
    this.updateBtns();
  }

  removeBooks(btn) {
    this.cBooks = this.cBooks.filter((element) => element.id !== +btn.id);
    localStorage.setItem('collectionOfBooks', JSON.stringify(this.cBooks));
    btn.parentElement.remove();
  }

  add(title, author) {
    const p = document.createElement('p');
    p.textContent = '"'.concat(title, '"', ' by ', author);
    const btn = document.createElement('button');
    btn.id = this.bookCount;
    btn.textContent = 'remove';

    const div = document.createElement('div');
    div.className = 'tag';
    div.append(p, btn);
    listBooks.appendChild(div);
  }

  updateBtns() {
    listBooks.querySelectorAll('button').forEach((element) => {
      element.addEventListener('click', () => this.removeBooks(element));
    });
  }

  setBookCount() {
    this.bookCount += 1;
  }

  getBookCount() {
    return this.bookCount;
  }
}
