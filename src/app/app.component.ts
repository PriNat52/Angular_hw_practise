import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: Data[] = [];

  data = [
    {
      name: 'Steve',
      description:
        'As an application framework, Angular includes a collection of well-integrated libraries that cover a wide variety of features.The Angular libraries include routing, forms management, client-server communication, and more. This topic lists the various developer guides for you to learn more about these Angular features and to help you determine the correct use of each in your application.',
    },
    {
      name: 'Richard',
      description:
        'With Angular, you are taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.',
    },
    {
      name: 'Mathew',
      description:
        'Every component has an HTML template that declares how that component renders. You define this template either inline or by file path. Angular extends HTML with additional syntax that lets you insert dynamic values from your component. Angular automatically updates the rendered DOM when your components state changes. One application of this feature is inserting dynamic text, as shown in the following example.',
    },
  ];

  onDisplay(desc: any) {
    this.list = desc;
  }
}
