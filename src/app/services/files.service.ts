import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios, { Axios } from 'axios';
import { File, FileResponse, Table } from '../models/types.model';

/**
 * @Service Files Service
 * 
 * A service for handling files operations
 *  - fetch files from server in localhost at port `5000` using axios GET call at url `get_files_url`
 *  
 */

const component_name = 'FilesService'
const label = [`%c${component_name} service:`, "color: deepgreen"]
const SERVER_URL = 'http://localhost:5000/';
const get_files_url = 'api/files';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  fetchFilesData = async (): Promise<any[]> => {
    console.info(...label, "fetch files from server");
    return new Promise((resolve, reject) => {
      const url = SERVER_URL + get_files_url;
      axios.get(url)
        .then((response: any) => {
          console.info(...label, "got response from server successfully")
          const parsed: File[] = this.parseFilesData(response.data);
          resolve(parsed)
        })
        .catch((error: any) => {
          console.error(...label, 'Error fetching files:', error);
          reject(error)
        });
    })
  }

  private parseFilesData = (jsonFiles: FileResponse[]): File[] => {
    const fileData: File[] = [];
    let index = 1;
    for (const jsonFile of jsonFiles) {
      fileData.push({ title: `file${index}`, ...jsonFile });
      index++
    }
    return fileData;
  };
}
