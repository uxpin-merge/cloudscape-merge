import React, { ReactNode } from 'react';
import ModalBase, { ModalProps } from '@cloudscape-design/components/modal';
import Button from '../Button/Button';

export interface ExtendedModalProps extends ModalProps {
  onOk?: () => {},
  onCancel?: () => {},
}

/**
 * @uxpindocurl https://cloudscape.design/components/modal/
 * @uxpindescription A user interface element subordinate to an application's main window. It prevents interaction with the main page content, but keeps it visible with the modal as a child window in front of it.
 */
const Modal = (props: ExtendedModalProps) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    setVisible(props.visible)
  }, [props]);


  const modifiedFooter = props.footer && React.isValidElement(props.footer)
    ? React.cloneElement(
      props.footer,
      props.footer.props,
      recursivelyModifyChildren(
        props.footer.props.children,
        props.onOk,
        props.onCancel
      )
    )
    : props.footer;


  return (
    <ModalBase
      {...props}
      footer={modifiedFooter}
      onDismiss={() => setVisible(false)}
      visible={visible}
    />
  )
};

const recursivelyModifyChildren = (
  children: ReactNode,
  onOk?: () => void,
  onCancel?: () => void
): ReactNode => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const props = { ...child.props };
    if (props.children) {
      props.children = recursivelyModifyChildren(props.children, onOk, onCancel);
    }

    if (child.props.uxpButtonType === 'ok') {
      console.log('kirwa');
      props.onClick = onOk;
    }

    if (child.props.uxpButtonType  === 'cancel') {
      props.onClick = onCancel;
    }

    return React.cloneElement(child, props);
  });
};

export default Modal;
