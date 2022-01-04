import React from 'react';

function TrainItemSeatsTooltip() {
  return (
    <div className="train__options__seats__tooltip">
      <table>
        <tr>
          <td className="train__options__seats__tooltip__type">верхние</td>
          <td className="train__options__seats__tooltip__amount">88</td>
          <td className="train__options__seats__tooltip__price">1 920 Р</td>
        </tr>
        <tr className="train__options__seats__reserved-seat">
          <td className="train__options__seats__type">нижние</td>
          <td className="train__options__seats__amount">88</td>
          <td className="train__options__seats__price">10 920 Р</td>
        </tr>
      </table>
    </div>
  );
}

export default TrainItemSeatsTooltip;
