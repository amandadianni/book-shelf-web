import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/core/models/book.model';
import { ToastrService } from 'ngx-toastr';

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
  imageSrc: any;

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addBook(): void {
    const book: Book = {
      title: this.addBookForm.value['title'],
      author: this.addBookForm.value['author'],
      publisher: this.addBookForm.value['publisher'],
      summary: this.addBookForm.value['summary'],
      imageUrl: this.imageSrc,
      bookId: undefined
    };
    this.bookService.addBook(book).subscribe(data => {
      this.toastr.success('The book was added successfully.', 'Success');
      this.addBookForm.reset();
      this.imageSrc = '';
    });
  }

  handleInputChange(e: any): void {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
  }

}
