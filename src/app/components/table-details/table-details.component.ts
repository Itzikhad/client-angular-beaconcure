import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Table } from 'src/app/models/types.model';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnChanges{

  @Input() selectedTable: Table = null;
  @Input() onTableClick!: ((table: Table) => void);
  
  // @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("********************inside on table details changes")
    console.log("changes", changes)
    console.log("changes['selectedTable']", changes['selectedTable'])
    if (changes['selectedTable']) {
      console.log('Selected Table changed:', changes['selectedTable'].currentValue);
    }
  }
  containerBGColor = { 'background-color': 'lightblue' };

  onHideClick(): void {
    console.log("inside hide click")
    // console.log("app-table-details component: this.selected table before ", this.selectedTable)
    this.onTableClick(null)
    // console.log("app-seleable-details component: on HIDE seleable click in seleable details")
    console.log("app-table-details component: this.selected table after", this.selectedTable)
  }
}
