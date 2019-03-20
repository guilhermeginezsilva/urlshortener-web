import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageModel } from './message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  errors: string;
  messages: MessageModel[];
  loading: boolean;
  @Input() url: string = '';

  ngOnInit() {
  }

  shorten(inputUrl: string) {
    const api = 'http://shortener-env.k6wamyyvfj.us-east-1.elasticbeanstalk.com/v1/shu/shorten';
    this.http.post(api , { 'url': inputUrl}).subscribe((res: MessageModel) => {
      this.messages.push(res);
      this.url = '';
      this.errors = '';
      this.loading = false;
    },
    (resFail) => {
      this.errors = resFail.error;
      this.loading = false;
    });

    this.loading = true;
  }

}
