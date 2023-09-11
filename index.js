const fs = require('fs');
const Handlebars = require('handlebars');


module.exports = {
    render: function(resume) {
        var css = fs.readFileSync(__dirname + '/style.css', 'utf-8');
        var template = fs.readFileSync(__dirname + '/resume_template.hbs', 'utf-8');

        return Handlebars.compile(template)({ css, resume })
    }
}
