import React from 'react';
import SelectOption from './SelectOption';

/**
 * Кастомная выпадашка select
 */

function Select({ options }) {

  // TODO logic: https://dev.to/ashwinkumar0505/create-custom-select-component-in-react-compound-components-pattern-typescript-3kdd
  // https://codesandbox.io/s/heuristic-nightingale-mhurf?file=/src/components/select/select.tsx
  return (
    <ul className="custom-select custom-select_collapsed">
      {options.map((option, index) => (
        <SelectOption option={option} key={index} />
      ))}
    </ul>
  );
}

export default Select;
