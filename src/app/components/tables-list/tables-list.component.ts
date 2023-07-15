import { Component, Input } from '@angular/core';
import { Table } from 'src/app/models/types.model';

/**
 * @Component TablesListComponent
 * @selector app-tables-list
 * 
 * Tables List component
 *  - present a sublist of clickable table names
 *  - when clicked table the table detail view will be presented with further info
 * 
 * @Input tables: tables to show
 * @Input tableCLick: a prop from root component to update selectedTable state
 */

@Component({
  selector: 'app-tables-list',
  templateUrl: './tables-list.component.html',
  styleUrls: ['./tables-list.component.css']
})
export class TablesListComponent {
  @Input() tables: Table[] =[];
  @Input() tableClick!: ((table: Table) => void)

  onTableClick(table: Table): void {
    console.log("app-table-list component: on table click")
    console.log("table", table)
    this.tableClick(table)
  }
} 
