import React, { Fragment } from 'react';

const CollectionStats = props => {
    const { skip, limit, productsNum } = props;

    let from;
    skip === 0 ? (from = 1) : (from = skip);

    let to;
    skip + limit > productsNum ? (to = productsNum) : (to = skip + limit);

    return (
        <Fragment>
            Resultados {from} - {to} de {productsNum} artigos.
        </Fragment>
    );
};

export default CollectionStats;
