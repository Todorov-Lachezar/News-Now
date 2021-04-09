import React from 'react';
import { Pane } from 'evergreen-ui';

type ContainerProps = {
  maxWidth?: number;
};

const Container: React.FC<ContainerProps> = ({ children, maxWidth }) => (
  <Pane display="flex" flex={1} justifyContent="center">
    <Pane width="100%" maxWidth={maxWidth || 800} paddingX="10">
      {children}
    </Pane>
  </Pane>
);

export default Container;
