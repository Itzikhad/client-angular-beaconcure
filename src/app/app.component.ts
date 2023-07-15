import { Component, OnInit } from '@angular/core';
import { FilesService } from './services/files.service';
import { Table, File } from './models/types.model';

const component_name = 'AppConponent';
const label = [`%c${component_name} component:`,'color: blue;']

/**
 * @Component appComponent
 * @selector app-root
 * 
 * Main app component
 *  - fetch files from server on inititation from service
 *  - posses Get Files button which fetch json files from server
 *  - posses app-files-list component view
 *  - posses app-table-detais component view
 *  - posses handler to set selected table to update innet state from other view
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  files: File[] = [];
  selectedTable: Table = null;
  title = 'client-angular-beaconcure';
  
  constructor(private filesService: FilesService){};

  ngOnInit(): void {
    this.filesService.fetchFilesData().then((files: File[]) => {
      console.log("app-root component: successfully fetch files from service on init:", files)
      this.files = [...files];
      this.selectedTable = null;
    }).catch((error: any) => {
      console.error("app-root component: an error accured fetching files from service", error)
    })
  }
  
  handleTableClick = (table: Table): void => {
    console.log("app-root component: handle table click")
    console.log("app-root component: table", table)

    this.selectedTable = table;
    
    console.log("app-root component: this.selectedTable", this.selectedTable)
  }

  handleGetFiles(): void {
    console.info(...label, "get files button clicked")
    console.info(...label, "fetching files from service")
    this.filesService.fetchFilesData().then((files) => {
      console.info(...label, "successfully fetch files from service:")
      console.info("files", files)
      this.files = files;
      this.selectedTable = null;
    }).catch((error: any) => {
      console.error(...label, "an error accured fetching files from service", error)
    })
  }
}
