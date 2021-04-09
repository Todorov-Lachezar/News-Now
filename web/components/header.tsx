import React from 'react';
import { Pane, Heading, SearchInput } from 'evergreen-ui';

const Header: React.FC = () => (
  <Pane display="flex" flex={1}>
    <Pane display="flex" alignItems="center">
      <Heading size={800} fontWeight="bold">
        News Now
      </Heading>
    </Pane>
    <Pane display="flex" flex={1} marginLeft={20}>
      <SearchInput
        height={48}
        width="100%"
        placeholder="Search"
        value="Give me news about bitcoin..."
      />
    </Pane>
  </Pane>
);

export default Header;
