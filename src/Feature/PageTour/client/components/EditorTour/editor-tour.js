import React from 'react'
import Tour from 'reactour'
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Rendering from './rendering';
import Field from './field';

const STEP_PREFIX = 'data-tour-step';

class EditorTour extends React.Component {

  steps = [
    {
      selector: '',
      content: () => "Welcome! Lets navigate through this page!"
    }
  ]

  state = {
    isTourOpen: false,
    isShowingMore: false
  };

  queryRenderingsCodeElements = () => document.querySelectorAll('[chrometype="rendering"]')

  queryFields = (elem) => elem.querySelectorAll('[contenteditable="true"]');

  getRenderingContentElement = (elem) => elem.nextElementSibling;

  getRenderingName = (elem) => elem.attributes['hintname'].value;

  getFieldType = (elem) => elem.attributes['scfieldtype'].value;

  getFieldName = (elem) => {
    let text = elem.previousElementSibling.innerText; let fp = text.indexOf("Name\":\"") + 7; let lp = text.indexOf("\"", fp);
    return text.substring(fp, lp)
  }

  buildTourSteps = () => {
    let steps = [];
    let runningIndex = 1;

    let renderingElems = this.queryRenderingsCodeElements();
    renderingElems.forEach((renderingElem) => {
      let contentElem = this.getRenderingContentElement(renderingElem);
      contentElem.setAttribute(STEP_PREFIX, runningIndex);
      let fieldElems = this.queryFields(contentElem);
      let nextRenderingIndex = runningIndex + fieldElems.length + 1;

      steps.push({
        selector: `[${STEP_PREFIX}="${runningIndex}"]`,
        content: ({ goTo }) => (<Rendering name={this.getRenderingName(renderingElem)} goTo={goTo} next={nextRenderingIndex} />)
      });
      runningIndex++;

      fieldElems.forEach((fieldElem, fieldIndex) => {
        fieldElem.setAttribute(STEP_PREFIX, runningIndex);
        steps.push({
          selector: `[${STEP_PREFIX}="${runningIndex}"]`,
          content: ({ goTo }) => (<Field
            name={this.getFieldName(fieldElem)}
            type={this.getFieldType(fieldElem)}
            parentComponent={this.getRenderingName(renderingElem)}
            goTo={goTo} next={nextRenderingIndex} />)
        });
        runningIndex++;
      });
    });

    return steps;
  }

  componentDidMount() {
    window.addEventListener("keyup", this.keyHandling);
    this.steps = [...this.steps, ...this.buildTourSteps()]
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.keyHandling);
  }

  closeTour = () => {
    this.setState({ isTourOpen: false });
  };

  openTour = () => {
    this.setState({ isTourOpen: true });
  };

  disableBody = target => disableBodyScroll(target);
  enableBody = target => enableBodyScroll(target);

  render() {
    return (
      <>
        <button onClick={this.openTour}>Let's go</button>
        <Tour
          startAt={0}
          steps={this.steps}
          maskClassName="mask"
          className="helper"
          rounded={5}
          isOpen={this.state.isTourOpen}
          onAfterOpen={this.disableBody}
          onBeforeClose={this.enableBody}
          onRequestClose={this.closeTour} />
      </>
    );

  }
}

export default EditorTour;