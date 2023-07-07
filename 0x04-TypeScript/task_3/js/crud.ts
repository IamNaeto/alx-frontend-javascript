export function insertRow(row :any) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
  export function deleteRow(rowId :any) {
    console.log('Delete row id', rowId);
    return;
  }
  
  export function updateRow(rowId :any, row: any) {
    console.log(`Update row ${rowId}`, row);
  
    return rowId;
  }