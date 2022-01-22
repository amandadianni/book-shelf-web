import { Component, HostListener, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit {
  books: Book[] = [];
  page = 0;
  totalPages: number = -1;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks(this.page).subscribe(data => {
      this.books.push(...data.content);
      this.totalPages = data.totalPages;
    });
  }

  onScrollDown(ev: any): void {
    this.nextPage();
  }

  @HostListener('document:mousewheel', ['$event']) onMousewheel(event: any) {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    if (yOffset == 0) {
      this.nextPage();
    }
  }

  nextPage(): void {
    this.page++;
    if (this.totalPages == -1 || this.totalPages > this.page) {
      this.getBooks();
    }
  }

}
