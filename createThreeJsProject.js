const template = require('./template');
const {writeFileSync, mkdirSync} = require('fs');
const templateJs = require('./templateJs');
const args = process.argv;

const FOUR_SPACES = '   ';
const EMPTY_STRING = '';

const formatContent = (content) => 
    content
    .split("\n")
    .map(line => line.replace(FOUR_SPACES, EMPTY_STRING))
    .join('\n');

const createDirectoryMakeItCWD = (project) => {
    mkdirSync(project)
    process.chdir(project)
}
    
const createFile = (fileName, content) => {
    console.log(`creating ${fileName}`);
    writeFileSync(fileName, Buffer.from(formatContent(content)));
    console.log(`created ${fileName}`);
}

if (args.length == 3) {
    const project = args[2];
    const htmlFile = `index.html`;
    const jsFile = `${project}.js`;
    createDirectoryMakeItCWD(project);
    createFile(htmlFile, template(project));
    createFile(jsFile, templateJs());
} 