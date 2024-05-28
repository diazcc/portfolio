import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './test.page.html',
  styleUrl: './test.page.scss'
})
export class TestPage {

}
