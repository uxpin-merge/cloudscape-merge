import React from 'react';
import SelectBase, { SelectProps } from '@cloudscape-design/components/select';

type OptionDefinition = NonNullable<SelectProps['selectedOption']>;

interface ExtendedSelectProps extends Omit<SelectProps, 'selectedOption' | 'onChange'> {
  /**
   * ID of the selected option. Use null to clear the selection.
   */
  selectedOptionId: string | null;

  /**
   * Called when the selection changes. Sends back the new selectedOptionId.
   */
  onChange?: (selectedId: string | null) => void;

  /**
   *
   * @uxpinignoreprop
   */
  uxpinOnChange: (prevValue:any, nextValue:any, propertyName:string) => void
}

const Select = ({ selectedOptionId, uxpinOnChange, options = [], onChange, ...rest }: ExtendedSelectProps) => {
  const selectedOption = options.find(opt => opt.value === selectedOptionId) ?? null;

  return (
    <SelectBase
      {...rest}
      options={options}
      selectedOption={selectedOption}
      onChange={(e) => {
        const selected = e.detail.selectedOption;
        onChange?.(selected?.value ?? null);
        // @uxpinbind does not work when component is passed in JSON property
        uxpinOnChange(selectedOptionId, selected?.value ?? null, 'selectedOptionId')
      }}
    />
  );
};

export default Select;
