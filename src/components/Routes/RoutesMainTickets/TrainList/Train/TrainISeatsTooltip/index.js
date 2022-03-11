import React from 'react';

function TrainSeatsTooltip() {
  return (
    <div className="seats-tooltip">
      <table>
        <tr>
          <td className="seats-tooltip__type">верхние</td>
          <td className="seats-tooltip__amount">88</td>
          <td className="seats-tooltip__price">1 920 Р</td>
        </tr>
        <tr>
          <td className="seats-tooltip__type">нижние</td>
          <td className="seats-tooltip__amount">88</td>
          <td className="seats-tooltip__price">10 920 Р</td>
        </tr>
      </table>
    </div>
  );
}

export default TrainSeatsTooltip;
