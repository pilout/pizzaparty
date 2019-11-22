import { Component, Input } from "@angular/core";
import { User } from '../models/user.model';

@Component({
    selector: 'app-author',
    templateUrl: 'author.component.html'
})
export class AuthorComponent {
    @Input() user: User;
}
