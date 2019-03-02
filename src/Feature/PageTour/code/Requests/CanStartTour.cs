using Sitecore.ExperienceEditor.Speak.Server.Contexts;
using Sitecore.ExperienceEditor.Speak.Server.Requests;
using Sitecore.ExperienceEditor.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hackathon.RandomPick.Feature.PageTour.Requests
{
    public class CanStartTour: PipelineProcessorControlStateRequest<ItemContext>
    {
        public override bool GetControlState()
        {
            this.RequestContext.ValidateContextItem();
            return WebUtility.IsQueryStateEnabled<Sitecore.Shell.Framework.Commands.SetAliases>(this.RequestContext.Item);
        }
    }
}