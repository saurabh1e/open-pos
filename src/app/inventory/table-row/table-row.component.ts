import {Component, OnInit, Input} from '@angular/core';
import {TdDataTableColumn} from "../../td-data-table-column";

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input()
  value:any;

  @Input()
  column: TdDataTableColumn;

  @Input()
  format: ()=>string;

  constructor() { }

  ngOnInit() {
  }
  getValue(column: TdDataTableColumn, value: any): string {
    if (column.nested === undefined || column.nested) {
      return this.getNestedValue(column.name, value);
    }
    return value[column.name];
  }

  getNestedValue(name: string, value: any): string {
    if (!(value instanceof Object) || !name) {
      return value;
    }
    if (name.indexOf('.') > -1) {
      let splitName: string[] = name.split(/\.(.+)/, 2);
      return this.getNestedValue(splitName[1], value[splitName[0]]);
    } else {
      return value[name];
    }
  }
}
