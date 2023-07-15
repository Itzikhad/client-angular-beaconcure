import { Component, OnInit } from '@angular/core';
import { FilesService } from './services/files.service';
import { Table, File } from './models/types.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  files: any[] = [];
  selectedTable: Table = null;
  title = 'client-angular-beaconcure';
  filesService: FilesService; 
  constructor(){
    this.filesService = new FilesService()
  };

  ngOnInit(): void {
    this.filesService.fetchFilesData().then((files) => {
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
    console.log("app-root component: get files button clicked")
    console.log("app-root component: fetching files from service")
    this.filesService.fetchFilesData().then((files) => {
      console.log("app-root component: successfully fetch files from service:", files)
      this.files = files;
      this.selectedTable = null;
    }).catch((error: any) => {
      console.error("app-root component: an error accured fetching files from service", error)
    })
  }
}
