import React from 'react';
import {HeadersContext} from '../utils/HeadersContext';
import TdInner from './TdInner';

const Td = (props: any) => (
  // @ts-ignore
  <HeadersContext.Consumer>{([headers]) => <TdInner {...props} headers={headers} />}</HeadersContext.Consumer>
);

export default Td;
