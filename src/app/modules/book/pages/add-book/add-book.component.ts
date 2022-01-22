import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  addBookForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    publisher: ['', []],
    summary: ['', []]
  });

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService) { }

  ngOnInit(): void {
  }

  addBook = () => {
    // 
    const book: Book = {
      title: this.addBookForm.value['title'],
      author: this.addBookForm.value['author'],
      publisher: this.addBookForm.value['publisher'],
      summary: this.addBookForm.value['summary'],
      bookId: undefined
    };
    this.bookService.addBook(book).subscribe(data => {
      console.log(data);
    });
  };

}
