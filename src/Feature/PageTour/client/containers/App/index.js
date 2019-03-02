import React from 'react';
import styled from 'styled-components';
import ExpEditor from 'components/ExpEditor/exp-editor.js';
import EditorTour from 'components/EditorTour/editor-tour.js';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <EditorTour />
      <ExpEditor />
      <GlobalStyle />
    </AppWrapper>
  );
}