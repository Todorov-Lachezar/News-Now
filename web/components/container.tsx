import React from 'react';
import { Pane } from 'evergreen-ui';

const Container: React.FC = ({ children }) => (
  <Pane display="flex" flex={1} justifyContent="center">
    <Pane width="100%" maxWidth={800}>
      {children}
    </Pane>
  </Pane>
);

export default Container;
