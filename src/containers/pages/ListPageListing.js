/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */

import React from 'react';
import ReusableTable from 'containers/ui/ReuseableTable';
import ContextMenuContainer from './ContextMenuContainer';

const ListPageListing = ({
  cols,
  items,
  onContextMenuClick,
  onContextMenu,
  apiUrl,
  onDataUpdate,
  paginationKey,
}) => {
  return (
    <>
      <div>
        <ReusableTable
          columns={cols}
          data={items}
          divided
          apiUrl={apiUrl}
          onDataUpdate={onDataUpdate}
          paginationKey={paginationKey}
        />
      </div>
      <ContextMenuContainer
        onContextMenuClick={onContextMenuClick}
        onContextMenu={onContextMenu}
      />
    </>
  );
};

export default React.memo(ListPageListing);
