var path = require("path");

module.exports = {
    cwd: path.join(__dirname, '..'),
    pattern: '**/serialization/Templates/**/*.yml',
    Using: ['System.CodeDom.Compiler', 'Hackathon.RandomPick.Foundation.GlassMapper.Models'],
    templatePath: path.join(__dirname, 'codegeneration.tmpl'),
}