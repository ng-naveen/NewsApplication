import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-newslist',
  standalone: false,
  
  templateUrl: './newslist.component.html',
  styleUrl: './newslist.component.css'
})
export class NewslistComponent implements OnInit{

  topNews:any;
  constructor(private service:NewsService) {
  }

  ngOnInit(): void {
    this.topNews = this.service.getTopNews().articles;
  }
  
}
