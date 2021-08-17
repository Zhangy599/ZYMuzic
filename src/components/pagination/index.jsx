import React, { memo } from 'react'

import { Pagination } from 'antd'
import { PaginationWrapper } from './style'

export default memo(function ZYPagination(props) {
  const { total, currentPage, pageSize, onPageChange } = props
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === 'next') {
      return <button className="control next">上一页 &gt;</button>;
    }
    return originalElement;
  }
  return (
    <PaginationWrapper>
      <Pagination total={total}
        size="small"
        className="pagination"
        defaultCurrent={1}
        pageSize={pageSize}
        showSizeChanger={false}
        onChange={onPageChange}
        current={currentPage}
        itemRender={itemRender} />
    </PaginationWrapper>
  )
})
