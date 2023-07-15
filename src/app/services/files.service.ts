import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios, { Axios } from 'axios';
import { File, FileResponse, Table } from '../models/types.model';

const SERVER_URL = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  fetchFilesData = async (): Promise<any[]> => {
    console.log("files service: fetch files from server");
    return new Promise((resolve, reject) => {
      const url = SERVER_URL + 'api/files';
      axios.get(url)
        .then((response: any) => {
          console.log("got response from server successfully", response.data)
          const parsed: File[] = this.parseFilesData(response.data);
          resolve(parsed)
        })
        .catch((error: any) => {
          console.error('Error fetching files:', error);
          reject(error)
        });
    })
  }

  private parseFilesData = (jsonFiles: FileResponse[]): File[] => {
    // Perform any necessary parsing of the files data here
    const fileData: File[] = [];
    let index = 1;
    for (const jsonFile of jsonFiles) {
      fileData.push({ title: `file${index}`, ...jsonFile });
      index++
    }
    return fileData;
  };
}
