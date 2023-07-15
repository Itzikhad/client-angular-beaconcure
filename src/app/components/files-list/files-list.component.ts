import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { File, Table } from '../../models/types.model';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnChanges {
  @Input() files: File[] = [];
  @Input() tableClick!: ((table: Table) => void);

  ngOnChanges(changes: SimpleChanges): void {
    console.log("********************inside on files list changes")
    console.log("changes", changes)
    console.log("changes['selectedTable']", changes['selectedTable'])
    if (changes['fles']) {
      console.log('Selected Table changed:', changes['files'].currentValue);
    }
  }

  constructor() { }
}
