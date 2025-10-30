import {Component} from '@angular/core'
import { RouterOutlet } from '@angular/router'
import {ProfileCard} from './common-ui/profile-card/profile-card'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
