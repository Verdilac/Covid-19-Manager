import React from 'react';
import Box from '@material-ui/core/Box';
import ProductAddBtn from './ProductAddBtn';
import StockSearch from './StockSearch'

export default function LineSection() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1} flexGrow={1} >
          <StockSearch/>
        </Box>
        <Box p={1} >
          <ProductAddBtn/>
        </Box>
      </Box>
    </div>
  );
}
