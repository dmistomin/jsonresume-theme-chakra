const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const referenceResumeData = JSON.parse(fs.readFileSync(__dirname + '/reference_resume_data.json', 'utf-8'));

var cssPath = path.resolve(__dirname, '../dist/style.css');
var template = fs.readFileSync(__dirname + '/resume_template.hbs', 'utf-8');

console.log('referenceResumeData: ', referenceResumeData);

fs.writeFileSync(
    path.resolve(__dirname, '../dist/example_resume.html'),
    Handlebars.compile(template)({ cssPath, resume: referenceResumeData })
);
