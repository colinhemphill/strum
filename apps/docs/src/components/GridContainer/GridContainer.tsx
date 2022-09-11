import { PropsWithChildren } from 'react';
import { gridContainerStyle } from '../../styles/layout.css';

const GridContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={gridContainerStyle}>{children}</div>;
};

export default GridContainer;
