import React from 'react';
import { useRouter } from 'next/router';
import { Pane, Heading, SearchInput } from 'evergreen-ui';

type HeaderProps = {
  transcript: string;
};

const Header: React.FC<HeaderProps> = ({ transcript }) => {
  const router = useRouter();

  return (
    <Pane display="flex" flex={1}>
      <Pane display="flex" alignItems="center">
        <Heading size={800} fontWeight="bold" onClick={() => router.push('/')}>
          News Now
        </Heading>
      </Pane>
      <Pane display="flex" flex={1} marginLeft={20}>
        <SearchInput
          height={48}
          width="100%"
          placeholder="Search"
          value={transcript}
        />
      </Pane>
    </Pane>
  );
};

export default Header;
