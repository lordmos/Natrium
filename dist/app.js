#! /usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cp = __importStar(require("child_process"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const rootPath = path.join(__dirname, "..", "..", "..");
const profile = path.join(rootPath, "natrium.profile.json");
// 1. 安装Material依赖
function installMaterialByNpm() {
    console.log("Natrium is start working , get a cup of tee for yourself .");
    console.log("Natrium is installing @angular/material @angular/cdk @angular/animations .");
    const installMaterial = cp.spawn("npm", ["install", "--save", "@angular/material", "@angular/cdk", "@angular/animations"]);
    installMaterial.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
    });
    installMaterial.stderr.on("data", (data) => {
        console.log(`stderr: ${data}`);
    });
    installMaterial.on("close", (code) => {
        if (code !== 0) {
            console.log(`grep process exited with code ${code}`);
        }
        else {
            console.log("@angular/material @angular/cdk @angular/animations is installed .");
            prepareLibs();
        }
    });
}
// 2. 添加CSS样式、组件库
// TODO
function prepareLibs() {
    readProfile();
}
// 3. 读取配置
function readProfile() {
    fs.exists(profile, (exists) => {
        if (!exists) {
            console.error("Natrium Error : natrium.profile.json file is not exist . ");
        }
        else {
            fs.readFile(profile, "utf8", (err, file) => {
                if (err) {
                    console.error("Natrium Error : " + err.message);
                }
                else {
                    const config = JSON.parse(file.toString());
                    console.log("Natrium will create modules and components based on your config . ");
                    handleConfig(config);
                }
            });
        }
    });
}
// 4.1 根据module结构生成component
function handleConfig(config) {
    const pagesRootPath = path.join(rootPath, "src", "app", "pages");
    fs.mkdirSync(pagesRootPath);
    for (const moduleConfig of config.modules) {
        moduleConfig.fullpath = path.join(pagesRootPath, moduleConfig.name);
        fs.mkdirSync(moduleConfig.fullpath);
        moduleConfig.path = path.join("pages", moduleConfig.name);
        for (const page of moduleConfig.pages) {
            page.fullpath = path.join(moduleConfig.fullpath, page.name);
            fs.mkdirSync(page.fullpath);
            page.path = path.join("pages", moduleConfig.name, page.name);
            cp.spawnSync("ng", ["g", "component", path.join(page.path, page.name + "-list")]);
            cp.spawnSync("ng", ["g", "component", path.join(page.path, page.name + "-edit")]);
            cp.spawnSync("ng", ["g", "component", path.join(page.path, page.name + "-detail")]);
        }
    }
}
// 4.2 根据配置文件创建router结构
// 4.3 将component中的HTML和CSS替换成预设好的文件
// 4.4 为component插入相关的方法和属性
installMaterialByNpm();
//# sourceMappingURL=app.js.map