import React from 'react';
import SelectBase, { SelectProps } from '@cloudscape-design/components/select';

type OptionDefinition = NonNullable<SelectProps['selectedOption']>;

interface ExtendedSelectProps extends Omit<SelectProps, 'selectedOption' | 'onChange'> {
  /**
   * ID of the selected option. Use null to clear the selection.
   * @uxpinbind onChange
   */
  selectedOptionId: string | null;

  /**
   * Called when the selection changes. Sends back the new selectedOptionId.
   */
  onChange?: (selectedId: string | null) => void;
}

const Select = ({ selectedOptionId, options = [], onChange, ...rest }: ExtendedSelectProps) => {
  const selectedOption = options.find(opt => opt.value === selectedOptionId) ?? null;

  return (
    <SelectBase
      {...rest}
      options={options}
      selectedOption={selectedOption}
      onChange={(e) => {
        const selected = e.detail.selectedOption;
        onChange?.(selected?.value ?? null);
      }}
    />
  );
};

export default Select;
