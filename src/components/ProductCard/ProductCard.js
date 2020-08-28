import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function ProductCard ({row}) {
    return (
      
        <TableRow
            tabIndex={-1}
            key={row.name} 
        >
                      
            <TableCell padding="checkbox">
            </TableCell>
            <TableCell component="th"  scope="row" padding="none">
            <img width="110" src={row.thumbnail}/>{row.name}
            </TableCell>
            <TableCell align="right">${row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
                      
        </TableRow>
      
    );
};
