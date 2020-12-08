import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const SVGMarkup: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="svg11699" viewBox="0 0 724.18 806.76" version="1.1">
    <g id="layer1" transform="translate(1193.5 499.59)">
      <g id="g11676" transform="matrix(0 -17.254 17.254 0 10443 -2252.9)">
        <path id="path11666" d="m-134.38 309.5c0 4.1683-3.3791 7.5474-7.5474 7.5474s-7.5474-3.3791-7.5474-7.5474 3.3791-7.5474 7.5474-7.5474 7.5474 3.3791 7.5474 7.5474z" transform="translate(1.1045 -949.48)"/>
        <path id="path11668" d="m-134.38 309.5c0 4.1683-3.3791 7.5474-7.5474 7.5474s-7.5474-3.3791-7.5474-7.5474 3.3791-7.5474 7.5474-7.5474 7.5474 3.3791 7.5474 7.5474z" transform="translate(32.767 -949.48)"/>
        <path id="path11670" d="m-134.38 309.5c0 4.1683-3.3791 7.5474-7.5474 7.5474s-7.5474-3.3791-7.5474-7.5474 3.3791-7.5474 7.5474-7.5474 7.5474 3.3791 7.5474 7.5474z" transform="translate(16.936 -976.35)"/>
        <rect id="rect11672" transform="rotate(-60.001)" height="3" width="27.692" y="-443.73" x="488.22"/>
        <rect id="rect11674" transform="matrix(-.5 -.86603 -.86603 .5 0 0)" height="3" width="27.692" y="-226.9" x="613.16"/>
      </g>
    </g>
  </svg>
);

const ShareIcon = (props: CustomIconComponentProps) => <Icon component={SVGMarkup} {...props} />;

export default ShareIcon;