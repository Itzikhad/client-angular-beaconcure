import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { Table } from 'src/app/models/types.model';
/**
 * @Component TableDetailsComponent
 * @selector app-table-details
 * 
 * Table details component
 *  - present a view of a selected table details
 *  - posses a Close button to hide the view
 * 
 *   @Input selectedTable: selected table at parent component;
 *   @Input onTableClick: a prop from root component to update selectedTable state (close)
 */

const component_name = 'TableDetailsComponent';
const label = [`%c${component_name} component:`, 'color: blue;'];

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnChanges{

  @Input() selectedTable: Table = null;
  @Input() onTableClick!: ((table: Table) => void);

  ngOnChanges(changes: SimpleChanges): void {
    console.debug(...label, "inside on table details changes")
    console.debug(...label, "changes", changes)
  }

  onHideClick(): void {
    console.info(...label, "inside hide click set to null")
    this.onTableClick(null)
    console.debug(...label, "this.selected table after", this.selectedTable)
  }
}
