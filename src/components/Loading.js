import PropagateLoader from 'react-spinners/PropagateLoader';
import { css } from '@emotion/react';

export default function Loading() {
  return (
    <PropagateLoader
      css={css`
        margin: 5% 50%;
        display: block;
      `}
      color="#0d6efd"
      size={20}
    />
  );
}
