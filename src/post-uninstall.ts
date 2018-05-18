import * as path from "path";
import * as fs from "fs";

const rootPath = path.join(__dirname, "..", "..", "..");

const packageJsonPath = path.join(rootPath, "package.json");

const ngCliJsonPath = path.join(rootPath, ".angular-cli.json");

console.log(ngCliJsonPath);

fs.exists(ngCliJsonPath, (exists) => {
    if (!exists) {
        console.error("Natrium : .angular-cli.json file is not exist , are your sure this is an angular project ?");
    } else {
        fs.readFile(packageJsonPath, "utf8", (err, file) => {
            if (err) {
                console.log("Natrium : " + err.message);
                console.error("Natrium : package.json file is not exist , are your sure this is an angular project ?");
            } else {
                const config = JSON.parse(file.toString());
                delete config.scripts["natrium"];
                fs.writeFileSync(packageJsonPath, JSON.stringify(config, undefined, 2));
                console.log("Natrium uninstall configuration is completed . Good bye !" );
            }
        });
    }
});
