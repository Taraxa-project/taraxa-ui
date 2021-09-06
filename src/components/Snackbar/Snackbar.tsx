import React from 'react';
import MSnackbar, { SnackbarProps as MSnackbarProps } from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import './snackbar-styles.scss';

export interface SnackbarProps extends MSnackbarProps  {
  severity: 'success' | 'warning' | 'error' | 'info',
  message: string;
};

const Snackbar = ({
  severity,
  open,
  autoHideDuration,
  onClose,
  message,
}: SnackbarProps) => {

  return (
    
      <MSnackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
        <Alert severity={severity}>
          {message}
        </Alert>
      </MSnackbar>
  );
}

export default Snackbar;