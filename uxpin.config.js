module.exports = {
  components: {
    categories: [
      {
        name: 'Completed',
        include: [
          'src/components/Alert/Alert.tsx',
          'src/components/AnnotationContext/AnnotationContext.tsx',
          'src/components/AnchorNavigation/AnchorNavigation.tsx',
          'src/components/AppLayout/AppLayout.tsx',
          'src/components/AttributeEditor/AttributeEditor.tsx',
          'src/components/Autosuggest/Autosuggest.tsx',
          'src/components/Badge/Badge.tsx',
          'src/components/Board/Board.tsx',
          'src/components/BoardWrapper/BoardWrapper.tsx',
          'src/components/BoardWrapperItem/BoardWrapperItem.tsx',
          'src/components/Box/Box.tsx',
          'src/components/BreadcrumbGroup/BreadcrumbGroup.tsx',
          'src/components/Button/Button.tsx',
          'src/components/ButtonDropdown/ButtonDropdown.tsx',
          'src/components/ButtonGroup/ButtonGroup.tsx',
          'src/components/Cards/Cards.tsx',
          'src/components/Calendar/Calendar.tsx',
          'src/components/Checkbox/Checkbox.tsx',
          'src/components/CodeView/CodeView.tsx',
          'src/components/CodeEditor/CodeEditor.tsx',
          'src/components/CollectionPreferences/CollectionPreferences.tsx',
          'src/components/ColumnLayout/ColumnLayout.tsx',
          'src/components/Container/Container.tsx',
          'src/components/ContentLayout/ContentLayout.tsx',
          'src/components/CopyToClipboard/CopyToClipboard.tsx',
          'src/components/DateInput/DateInput.tsx',
          'src/components/DatePicker/DatePicker.tsx',
          'src/components/DateRangePicker/DateRangePicker.tsx',
          'src/components/Drawer/Drawer.tsx',
          'src/components/ExpandableSection/ExpandableSection.tsx',
          'src/components/FileDropzone/FileDropzone.tsx',
          'src/components/FileInput/FileInput.tsx',
          'src/components/FileTokenGroup/FileTokenGroup.tsx',
          'src/components/FileUpload/FileUpload.tsx',
          'src/components/Flashbar/Flashbar.tsx',
          'src/components/Form/Form.tsx',
          'src/components/FormField/FormField.tsx',
          'src/components/Grid/Grid.tsx',
          'src/components/Header/Header.tsx',
          'src/components/HelpPanel/HelpPanel.tsx',
          'src/components/Hotspot/Hotspot.tsx',
          'src/components/Icon/Icon.tsx',
          'src/components/Input/Input.tsx',
          'src/components/KeyValuePairs/KeyValuePairs.tsx',
          'src/components/Link/Link.tsx',
          'src/components/LiveRegion/LiveRegion.tsx',
          'src/components/Modal/Modal.tsx',
          'src/components/Multiselect/Multiselect.tsx',
          'src/components/Pagination/Pagination.tsx',
          'src/components/Popover/Popover.tsx',
          'src/components/ProgressBar/ProgressBar.tsx',
          'src/components/PromptInput/PromptInput.tsx',
          'src/components/PropertyFilter/PropertyFilter.tsx',
          'src/components/RadioGroup/RadioGroup.tsx',
          'src/components/S3ResourceSelector/S3ResourceSelector.tsx',
          'src/components/SegmentedControl/SegmentedControl.tsx',
          'src/components/Select/Select.tsx',
          'src/components/SideNavigation/SideNavigation.tsx',
          'src/components/Slider/Slider.tsx',
          'src/components/SpaceBetween/SpaceBetween.tsx',
          'src/components/Spinner/Spinner.tsx',
          'src/components/SplitPanel/SplitPanel.tsx',
          'src/components/Steps/Steps.tsx',
          'src/components/StatusIndicator/StatusIndicator.tsx',
          'src/components/Tabs/Tabs.tsx',
          'src/components/TagEditor/TagEditor.tsx',
          'src/components/Textarea/Textarea.tsx',
          'src/components/TextContent/TextContent.tsx',
          'src/components/TextFilter/TextFilter.tsx',
          'src/components/Tiles/Tiles.tsx',
          'src/components/TimeInput/TimeInput.tsx',
          'src/components/Toggle/Toggle.tsx',
          'src/components/ToggleButton/ToggleButton.tsx',
          'src/components/TokenGroup/TokenGroup.tsx',
          'src/components/TopNavigation/TopNavigation.tsx',
          'src/components/TutorialPanel/TutorialPanel.tsx',
          'src/components/Wizard/Wizard.tsx',
          'src/components/WizardWrapper/WizardWrapper.tsx',
          'src/components/WizardWrapperItem/WizardWrapperItem.tsx',
        ],
      },
      {
        name: 'HTML',
        include: [
          'src/components/HtmlComponents/HtmlHeading/HtmlHeading.jsx',
          'src/components/HtmlComponents/HtmlText/HtmlText.jsx',
          'src/components/HtmlComponents/HtmlDiv/HtmlDiv.jsx',
          'src/components/HtmlComponents/HtmlList/HtmlList.jsx',
          'src/components/HtmlComponents/HtmlListItem/HtmlListItem.jsx',
          'src/components/HtmlComponents/HtmlTable/HtmlTable.jsx',
          'src/components/HtmlComponents/HtmlTableHead/HtmlTableHead.jsx',
          'src/components/HtmlComponents/HtmlTableBody/HtmlTableBody.jsx',
          'src/components/HtmlComponents/HtmlTableHeading/HtmlTableHeading.jsx',
          'src/components/HtmlComponents/HtmlTableRow/HtmlTableRow.jsx',
          'src/components/HtmlComponents/HtmlTableCell/HtmlTableCell.jsx',
          'src/components/HtmlComponents/HtmlTag/HtmlTag.jsx',
        ],
      },
      {
        name: 'TODO',
        include: [
          'src/components/AreaChart/AreaChart.tsx',
          'src/components/BarChart/BarChart.tsx',
          'src/components/LineChart/LineChart.tsx',
          'src/components/MixedLineBarChart/MixedLineBarChart.tsx',
          'src/components/PieChart/PieChart.tsx',
          'src/components/Table/Table.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'Cloudscape Design System',
  settings: {
    useAI: { name: 'Cloudscape Design System (Amazon)', documentationUrl: 'https://cloudscape.design/components/', systemPrompt: `
      All Component Rules:
      - Do not include props that are functions or objects containing functions.
      - Only use primitive props (string, number, boolean, null, undefined) and plain objects or arrays without any functions.
      - Avoid inline arrow functions, callbacks, or event handlers in JSX.
      Container Component Rules:
      - props header and footer must always be defined.
      - If no specific content is needed for header or footer, use an empty string ("").
      - Do not omit header or footer under any circumstance.
      Pagination Component Rules:
      - omit ariaLabels property
      Cards Component Rules:
      - completely omit  cardDefinition property, it's generated automatically based on items property
      Table Component Rules:
      - columnDefinitions must be an array of objects:
        {
          id: string;
          header: string;
          sortingField?: string;
          isRowHeader?: boolean;
        }
      
      - items must be an array like:
        {
          name: string;
          alt?: string;
          description?: string;
          type?: string;
          size?: string;
        }
      - Do not pass functions in columnDefinitions (like cell or renderItem).
      Wizard Component Rules:
      - In the \`i18nStrings\` object, completely omit any properties that are functions, specifically:
        - stepNumberLabel
        - collapsedStepsLabel
        - skipToButtonLabel
      - Do not include these properties at all in the generated code, even as strings.
      - Only include the other properties as usual.
       Board Component Rules:
       - items must be an array of objects:
        {
          id: string;
          rowSpan?: number;
          columnSpan?: number;
          data: {
              title: string;
              content: React.ReactElement;
          };
        }
        - you can only include empty and items properties at all in the generated code
    ` },
    useUXPinProps: true,
    useConvertingToUXPinClassic: true
  },
};
