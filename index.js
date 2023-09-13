const fs = require('fs');
const path = require('path');

const Handlebars = require('handlebars');
Handlebars.registerHelper(
    'dateFormat',
    require('handlebars-dateformat')
);


module.exports = {
    render: function(resume) {
        var cssPath = path.resolve(__dirname + '/dist/style.css');
        var template = fs.readFileSync(__dirname + '/src/resume_template.hbs', 'utf-8');

        return Handlebars.compile(template)({ cssPath, resume })
    }
}
