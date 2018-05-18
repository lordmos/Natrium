export default interface NgFileHandler {

    filePath: string;

    isFileClosed: boolean;

    readFile(path: string): void;

    rewriteFile(destPath: string): void;
}