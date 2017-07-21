import { Component, Input } from '@angular/core';
import { ListGroup } from "app/entity/ListGroup";

@Component({
  selector: 'app-blank-list-group',
  templateUrl: './blank-list-group.component.html',
  styleUrls: ['./blank-list-group.component.css']
})
export class BlankListGroupComponent{
  @Input()listGroup:ListGroup;
  constructor() { }
}
