import * as React from 'react';
import Modal from '../Modal';
import Box from '../../Box/Box';
import SpaceBetween from '../../SpaceBetween/SpaceBetween';
import Button from '../../Button/Button';

export default (
  <Modal
    uxpId="modal-1"
    footer={
      <Box float="right" uxpId="modal-box-1">
        <SpaceBetween direction="horizontal" size="xs" uxpId="modal-spacebetween-1">
          <Button variant="link" uxpId="modal-button-1">
            Cancel
          </Button>
          <Button variant="primary" uxpId="modal-button-2">
            Ok
          </Button>
        </SpaceBetween>
      </Box>
    }
    header="Modal title"
  >
    Your description should go here
  </Modal>
);
