const { ExcelFile } = require("./ExcelFile");
const { LaunchUrl } = require("./LaunchUrl");

class POManager {

    constructor(page) {
        this.page = page;
        this.launchurl = new LaunchUrl(this.page);
        this.excelfile = new ExcelFile(this.page);

    }

    getLaunchPage() {
        return this.launchurl;
    }
    getExcelFile() {
        return this.excelfile;
    }

}

module.exports = { POManager };
