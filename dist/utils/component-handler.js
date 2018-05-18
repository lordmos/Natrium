"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComponentHandler {
    constructor() {
        this.filePath = "";
        this.isFileClosed = true;
    }
    readFile(path) {
        if (!this.isFileClosed)
            return;
    }
    rewriteFile(destPath) {
        this.isFileClosed = true;
    }
}
exports.default = ComponentHandler;
//# sourceMappingURL=component-handler.js.map