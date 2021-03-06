import { Component } from '@angular/core';
import { ContextMenuService } from './core/services/context-menu/context-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagaar-app';

  constructor(public readonly contextMenuService: ContextMenuService) {}
}
