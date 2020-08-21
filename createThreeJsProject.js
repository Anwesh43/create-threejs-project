const template = require('./template');
const {writeFileSync} = require('fs');
const templateJs = require('./templateJs');
const args = process.argv;
const createFile = (fileName, content) => {
    console.log(`creating ${fileName}`);
    writeFileSync(fileName, Buffer.from(content));
    console.log(`created ${fileName}`);
}
if (args.length == 3) {
    const project = args[2];
    const htmlFile = `${project}.html`;
    const jsFile = `${project}.js`;
    createFile(htmlFile, template(project));
    createFile(jsFile, templateJs());
} 