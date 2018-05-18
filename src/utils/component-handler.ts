import NgFileHandler from "./ng-file-handler.interface";

export default class ComponentHandler implements NgFileHandler {

    filePath: string;
    isFileClosed: boolean;

    constructor() {
        this.filePath = "";
        this.isFileClosed = true;
    }

    readFile(path: string): void {
        if (!this.isFileClosed) return;
    }

    rewriteFile(destPath: string): void {
        this.isFileClosed = true;
    }

}