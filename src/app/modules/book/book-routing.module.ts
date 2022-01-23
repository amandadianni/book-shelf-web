import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { ViewBooksComponent } from './pages/view-books/view-books.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      { path: 'add', component: AddBookComponent },
      { path: 'view', component: ViewBooksComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
