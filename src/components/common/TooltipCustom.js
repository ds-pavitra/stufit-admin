import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const TooltipCustom = ({ placement, target, body }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <span>
      <Tooltip
        placement={placement}
        isOpen={tooltipOpen}
        target={target}
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        {body}
      </Tooltip>
    </span>
  );
};
export default TooltipCustom;
