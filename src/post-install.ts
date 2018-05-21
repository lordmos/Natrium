import * as path from "path";
import * as fs from "fs";

console.log("Congratulations! Natrium is installed!");

const rootPath = path.join(__dirname, "..", "..", "..");

const packageJsonPath = path.join(rootPath, "package.json");

const angularJsonPath = path.join(rootPath, "angular.json");

fs.exists(angularJsonPath, (exists) => {
    if (!exists) {
        console.error("Natrium : angular.json file is not exist , are your sure this is an angular v6+ project ?");
    } else {
        fs.readFile(packageJsonPath, "utf8", (err, file) => {
            if (err) {
                console.log("Natrium : " + err.message);
                console.error("Natrium : package.json file is not exist , are your sure this is an angular project ?");
            } else {
                const config = JSON.parse(file.toString());
                config.scripts["natrium"] = "natrium";
                fs.writeFileSync(packageJsonPath, JSON.stringify(config, undefined, 2));
                console.log("Natrium configuration is completed . Welcome aboard !");
            }
        });
    }
});
