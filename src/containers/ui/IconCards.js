/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import IconCard from 'components/cards/IconCard';

import data from 'data/iconCards';

const IconCards = () => {
  return (
    <Row>
      <Colxx xxs="12">
        {/* <CardTitle className="mb-4">
          <IntlMessages id="cards.icon-card" />
        </CardTitle> */}
        <Row className="icon-cards-row mb-2 mt-0">
          {data.map((item, index) => (
            <Colxx
              style={{ minWidth: '33%' }}
              key={`icon_card_${index}`}
              xxs="12"
              sm="6"
              md="4"
              lg="3"
            >
              <IconCard {...item} className="mb-4" />
            </Colxx>
          ))}
        </Row>
      </Colxx>
    </Row>
  );
};

export default IconCards;
