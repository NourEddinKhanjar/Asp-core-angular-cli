import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    apiValues: string[] = [];

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.http.get<string []>("/api/values")
            .subscribe(values => this.apiValues = values);
    }

}
