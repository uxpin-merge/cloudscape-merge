import React from 'react';
import ModalBase, { ModalProps } from '@cloudscape-design/components/modal';
/**
 * @uxpindocurl https://cloudscape.design/components/modal/
 * @uxpindescription A user interface element subordinate to an application's main window. It prevents interaction with the main page content, but keeps it visible with the modal as a child window in front of it.
 */
const Modal = (props: ModalProps) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    setVisible(props.visible)
  }, [props]);

  return (
    <ModalBase
      {...props}
      onDismiss={() => setVisible(false)}
      visible={visible}
    />
  )
};

export default Modal;
