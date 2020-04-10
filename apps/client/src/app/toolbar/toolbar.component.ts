import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'products-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() isAuthenticated = false;
  @Output() logout = new EventEmitter();
}
