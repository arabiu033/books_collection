import { BookHandling } from "./operations.js";

export const bookTitle = document.getElementById('book-title');
export const bookAuthor = document.getElementById('book-author');
export const addBtn = document.getElementById('submit-btn');
export const listBooks = document.querySelector('.list-books');
export const list = document.getElementById('list');
export const add = document.getElementById('add');
export const contact = document.getElementById('contact-me');
export const sectionOne = document.getElementById('action-1');
export const sectionTwo = document.getElementById('action-2');
export const sectionThree = document.getElementById('action-3');
let books;

if (localStorage.getItem('collectionOfBooks')) {
  books = new BookHandling(JSON.parse(localStorage.getItem('collectionOfBooks') || '[]'));
} else {
  books = new BookHandling([]);
}

export {books};