import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit{
  imageUrl =
    'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';


  onClick(usernameValue: string) {
    console.log('Button was clicked! Username: ' + usernameValue);
  }

  ngOnInit() {
    console.log('PlaygroundComponent initialized');
  }
  ngOnDestroy() {
    console.log('PlaygroundComponent destroyed');
  }
}
