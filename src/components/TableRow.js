import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({title,length,rating,genres,awards}) => {
    return (
        <tr>
        <td>{title}</td>
        <td>{length}</td>
        <td>{rating}</td>
        <td>
            <ul>
            {genres.map((gen, i) => <li key={gen + i} >{gen}</li>)}
            </ul>
        </td>
        <td>{awards}</td>
      </tr>
    );
};


TableRow.propTypes = {
    title : PropTypes.string,
    length : PropTypes.number,
    rating : PropTypes.number,
    genres : PropTypes.array,
    awards : PropTypes.number
};

TableRow.defaultProps = {
    title : " ",
    length : " ",
    rating : "-",
    genres : ["Sin categoría"],
    awards : 0
}

export default TableRow;