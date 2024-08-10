// const ExcelJs = require('exceljs');
const {test,expect}= require('@playwright/test');
class ExcelFile{

    async readExcelsheet(excelName,rowNumber){

     const workbook = new ExcelJS.Workbook();
     await workbook.xlsx.readFile(path.resolve(__dirname, excelName));
     const worksheet = workbook.getWorksheet(1);
     const row = worksheet.getRow(rowNumber);
     return row;
    }


}

module.exports = {ExcelFile};
