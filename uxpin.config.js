module.exports = {
  components: {
    categories: [
      {
        name: 'Completed',
        include: [
          'src/components/Alert/Alert.tsx',
          'src/components/AnchorNavigation/AnchorNavigation.tsx',
          'src/components/AppLayout/AppLayout.tsx',
          'src/components/Badge/Badge.tsx',
          'src/components/Box/Box.tsx',
          'src/components/BreadcrumbGroup/BreadcrumbGroup.tsx',
          'src/components/Button/Button.tsx',
          'src/components/ButtonDropdown/ButtonDropdown.tsx',
          'src/components/ButtonGroup/ButtonGroup.tsx',
          'src/components/Cards/Cards.tsx',
          'src/components/Calendar/Calendar.tsx',
          'src/components/Checkbox/Checkbox.tsx',
          'src/components/CodeEditor/CodeEditor.tsx',
          'src/components/ColumnLayout/ColumnLayout.tsx',
          'src/components/Container/Container.tsx',
          'src/components/ContentLayout/ContentLayout.tsx',
          'src/components/CopyToClipboard/CopyToClipboard.tsx',
          'src/components/DateInput/DateInput.tsx',
          'src/components/DatePicker/DatePicker.tsx',
          'src/components/Drawer/Drawer.tsx',
          'src/components/ExpandableSection/ExpandableSection.tsx',
          'src/components/FileInput/FileInput.tsx',
          'src/components/Flashbar/Flashbar.tsx',
          'src/components/Grid/Grid.tsx',
          'src/components/Header/Header.tsx',
          'src/components/HelpPanel/HelpPanel.tsx',
          'src/components/Icon/Icon.tsx',
          'src/components/Input/Input.tsx',
          'src/components/Link/Link.tsx',
          'src/components/Modal/Modal.tsx',
          'src/components/Pagination/Pagination.tsx',
          'src/components/Popover/Popover.tsx',
          'src/components/ProgressBar/ProgressBar.tsx',
          'src/components/RadioGroup/RadioGroup.tsx',
          'src/components/Select/Select.tsx',
          'src/components/SideNavigation/SideNavigation.tsx',
          'src/components/Slider/Slider.tsx',
          'src/components/SpaceBetween/SpaceBetween.tsx',
          'src/components/Spinner/Spinner.tsx',
          'src/components/SplitPanel/SplitPanel.tsx',
          'src/components/Steps/Steps.tsx',
          'src/components/StatusIndicator/StatusIndicator.tsx',
          'src/components/Tabs/Tabs.tsx',
          'src/components/Tiles/Tiles.tsx',
          'src/components/Toggle/Toggle.tsx',
          'src/components/ToggleButton/ToggleButton.tsx',
        ],
      },
      {
        name: 'TODO',
        include: [
          'src/components/AreaChart/AreaChart.tsx',
          'src/components/AttributeEditor/AttributeEditor.tsx',
          'src/components/Autosuggest/Autosuggest.tsx',
          'src/components/BarChart/BarChart.tsx',
          'src/components/CollectionPreferences/CollectionPreferences.tsx',
          'src/components/DateRangePicker/DateRangePicker.tsx',
          'src/components/FileDropzone/FileDropzone.tsx',
          'src/components/FileTokenGroup/FileTokenGroup.tsx',
          'src/components/FileUpload/FileUpload.tsx',
          'src/components/Form/Form.tsx',
          'src/components/FormField/FormField.tsx',
          'src/components/Hotspot/Hotspot.tsx',
          'src/components/KeyValuePairs/KeyValuePairs.tsx',
          'src/components/LineChart/LineChart.tsx',
          'src/components/LiveRegion/LiveRegion.tsx',
          'src/components/MixedLineBarChart/MixedLineBarChart.tsx',
          'src/components/Multiselect/Multiselect.tsx',
          'src/components/PieChart/PieChart.tsx',
          'src/components/PromptInput/PromptInput.tsx',
          'src/components/PropertyFilter/PropertyFilter.tsx',
          'src/components/S3ResourceSelector/S3ResourceSelector.tsx',
          'src/components/SegmentedControl/SegmentedControl.tsx',
          'src/components/Table/Table.tsx',
          'src/components/TagEditor/TagEditor.tsx',
          'src/components/TextContent/TextContent.tsx',
          'src/components/TextFilter/TextFilter.tsx',
          'src/components/Textarea/Textarea.tsx',
          'src/components/TimeInput/TimeInput.tsx',
          'src/components/TokenGroup/TokenGroup.tsx',
          'src/components/TopNavigation/TopNavigation.tsx',
          'src/components/TutorialPanel/TutorialPanel.tsx',
          'src/components/Wizard/Wizard.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
    settings: { useUXPinProps: true, useConvertingToUXPinClassic: true },
  },
  name: 'Cloudscape Design System',
};
