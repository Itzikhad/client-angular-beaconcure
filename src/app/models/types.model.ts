export interface File {
  title: string;
  tables: Table[];
}

export interface FileResponse {
  tables: Table[];
}

interface TableInfo {
  title: string;
  rows: number;
  columns: number;
  notes: string;
}

export type Table = TableInfo | null;