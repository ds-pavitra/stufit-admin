import React from 'react';
import { Card, CardBody } from 'reactstrap';

// import IntlMessages from 'helpers/IntlMessages';
import { PolarAreaChart } from 'components/charts';

// import { polarAreaChartData } from 'data/charts';

const ProductCategoriesPolarArea = ({
  data,
  chartClass = 'chart-container',
}) => {
  return (
    <Card>
      <CardBody>
        {/* <CardTitle>
          <IntlMessages id="dashboards.product-categories" />
        </CardTitle> */}
        <div className={chartClass} style={{ height: '330px' }}>
          <PolarAreaChart shadow data={data} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCategoriesPolarArea;
