define(["sitecore", "/-/speak/v1/ExperienceEditor/ExperienceEditor.js", "/-/speak/v1/ExperienceEditor/ExperienceEditorProxy.js"], function (Sitecore, ExperienceEditor, ExperienceEditorProxy) {
    Sitecore.Commands.Tour =
        {
            canExecute: function (context, parent) {
                return true;
            },

            execute: function (context) {
                alert("Command executed")
            }
        };
});