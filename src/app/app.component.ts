import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marryme-front';
}
let cc = window as any;
cc.cookieconsent.initialise({
  palette: {
    popup: {
      background: "#164969"
    },
    button: {
      background: "#ffe000",
      text: "#164969"
    }
  },
  theme: "classic",
  content: {
    message: "Notre site utilise des cookies pour son fonctionnement",
    dismiss: "J'accepte",
    // link: "this.cookieLinkText",
    // href: environment.Frontend + "/dataprivacy"
  }
});
