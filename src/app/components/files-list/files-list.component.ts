import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { File, Table } from '../../models/types.model';

/**
 * @Component FilesListComponent
 * @selector app-files-list
 * 
 * Files list component
 *  - present a list of files in an expansion panel accordion from Anguler-Material
 *  - each file expand to a list of clickable tables the file holds
 *  - when clicked table the table detail view will be presented with further info
 * 
 *   @Input files: array of files;
 *   @Input tableCLick: a prop from root component passed to child, to update selectedTable state
 */

const component_name = 'FilesListComponent'
const label = [ `%c${component_name} component:`, "color: blue;" ]
@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnChanges {
  @Input() files: File[] = [];
  @Input() tableClick!: ((table: Table) => void);

  ngOnChanges(changes: SimpleChanges): void {
    console.debug(...label, "inside on files list changes")
    console.debug(...label, "changes", changes)
  }

  constructor() { }
}
