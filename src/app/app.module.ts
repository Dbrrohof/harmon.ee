import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowseComponent } from './browse/browse.component';
import { CollectionComponent } from './collection/collection.component';

// Routes
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'collection', component: CollectionComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BrowseComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
