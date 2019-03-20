import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  messages: string;
  @Input() url: string = '';

  ngOnInit() {
  }

  shorten(inputUrl: string) {
    const api = 'http://shortener-env.k6wamyyvfj.us-east-1.elasticbeanstalk.com/v1/shu/shorten';
    this.http.post(api , { 'url': inputUrl}).subscribe((res) => {
      this.messages = res['shortenedUrl'];
      this.url = '';
    },
    (resFail) => {
      this.messages = resFail.error + ' -> Don\'t forget to put the protocol in the beggining: http://';
      this.url = '';
    });
  }

}
