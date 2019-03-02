import React from 'react'

class ExpEditor extends React.Component {

  createMarkup() {
    return {__html: '   <div> \
    <code type="text/sitecore" chrometype="rendering" kind="open" hintname="Sample Rendering" id="r_B343725A3A93446EA9C83A2CBD3DB489" class="scpm" data-selectable="true"></code> \
    <div sc-part-of="placeholder rendering" class="scEnabledChrome"> \
    <h1 class="contentTitle"> \
    <span class="scChromeData" style="display:none">{"commands":[{"click":"chrome:common:edititem({command:\"webedit:open\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\"webedit:personalize\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\"webedit:editvariations\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{110D559F-DEA5-42EA-9C1C-8A5DF7E70EF9}?lang=en&amp;ver=1","custom":{},"displayName":"Title","expandedDisplayName":"Please enter title of the item here."}</span> \
      <span id="fld_110D559FDEA542EA9C1C8A5DF7E70EF9_755773843C9745DAA84781B00500E250_en_1_95ab8376df084a139064b0f237dfca8d_66_edit" \
      sc_parameters="prevent-line-break=true" contenteditable="true" class="scWebEditInput scEnabledChrome" \
      scfieldtype="single-line text" scdefaulttext="[No text in field]" sc-part-of="field">Sitecore Experience Platform</span></h1><div class="contentDescription"> \
      <span class="scChromeData" style="display:none">{"commands":[{"click":"chrome:field:editcontrol({command:\"webedit:edithtml\"})","header":"Edit Text","icon":"/temp/iconcache/office/16x16/pencil.png","disabledIcon":"/temp/pencil_disabled16x16.png","isDivider":false,"tooltip":"Edit the text","type":null},{"click":"chrome:field:execute({command:\"bold\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_bold.png","disabledIcon":"/temp/font_style_bold_disabled16x16.png","isDivider":false,"tooltip":"Bold","type":null},{"click":"chrome:field:execute({command:\"Italic\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_italics.png","disabledIcon":"/temp/font_style_italics_disabled16x16.png","isDivider":false,"tooltip":"Italic","type":null},{"click":"chrome:field:execute({command:\"Underline\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_underline.png","disabledIcon":"/temp/font_style_underline_disabled16x16.png","isDivider":false,"tooltip":"Underline","type":null},{"click":"chrome:field:insertexternallink","header":"","icon":"/temp/iconcache/office/16x16/earth_link.png","disabledIcon":"/temp/earth_link_disabled16x16.png","isDivider":false,"tooltip":"Insert an external link into the text field.","type":null},{"click":"chrome:field:insertlink","header":"","icon":"/temp/iconcache/office/16x16/link.png","disabledIcon":"/temp/link_disabled16x16.png","isDivider":false,"tooltip":"Insert a link into the text field.","type":null},{"click":"chrome:field:removelink","header":"","icon":"/temp/iconcache/office/16x16/link_broken.png","disabledIcon":"/temp/link_broken_disabled16x16.png","isDivider":false,"tooltip":"Remove link.","type":null},{"click":"chrome:field:insertimage","header":"Insert image","icon":"/temp/iconcache/office/16x16/photo_landscape.png","disabledIcon":"/temp/photo_landscape_disabled16x16.png","isDivider":false,"tooltip":"Insert an image into the text field.","type":null},{"click":"chrome:common:edititem({command:\"webedit:open\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\"webedit:personalize\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\"webedit:editvariations\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{110D559F-DEA5-42EA-9C1C-8A5DF7E70EF9}?lang=en&amp;ver=1","custom":{},"displayName":"Text","expandedDisplayName":"Please enter text of the item here."}</span> \
      <span scfieldtype="rich text" scdefaulttext="[No text in field]" contenteditable="true" class="scWebEditInput scEnabledChrome" \
        id="fld_110D559FDEA542EA9C1C8A5DF7E70EF9_A60ACD61A6DB41828329C957982CEC74_en_1_95ab8376df084a139064b0f237dfca8d_67_edit" \
        sc-part-of="field"> \
        <p style="line-height: 22px;">From a single connected platform that also integrates with other customer-facing platforms, to a single view of the customer in a big data marketing repository, to completely eliminating much of the complexity that has previously held marketers back, the latest version of Sitecore makes customer experience highly achievable. Learn how the latest version of Sitecore gives marketers the complete data, integrated tools, and automation capabilities to engage customers throughout an iterative lifecycle – the technology foundation absolutely necessary to win customers for lifes.</p> \
        <p>For further information, please go to the <a href="https://doc.sitecore.net/" target="_blank" title="Sitecore Documentation site">Sitecore Documentation site</a></p> \
      </span> \
    </div> \
  </div> \
  <code type="text/sitecore" chrometype="rendering" kind="open" hintname="Sample Rendering" id="r_B343725A3A93446EA9C83A2CBD3DB489" class="scpm" data-selectable="true"></code> \
  <div sc-part-of="placeholder rendering" class="scEnabledChrome"></div> \
  </div>'};
  }

  render() {
    return (
      <>
      <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </>
    );

  }
}

export default ExpEditor;