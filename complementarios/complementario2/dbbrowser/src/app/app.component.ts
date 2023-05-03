import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(response => response.json()) 
      .then(data => {
        this.data = data; 
      })
      .catch(error => console.error('Error fetching data:', error));
  }
}
