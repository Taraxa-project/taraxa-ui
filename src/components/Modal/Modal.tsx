import React, { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from "../theme";
import RModal from 'react-modal';
import Button from "../Button";
import '../app.scss';

export interface ModalProps  {
  title: string;
  children: JSX.Element;
  show: boolean;
  parentElementID: string;
  onRequestClose: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  id?: string;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Modal = ({ children, show, title, parentElementID, onRequestClose, id }: ModalProps) => {
  const { height, width } = useWindowDimensions();
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#282C3E",
      overflow: 'auto',
      outline: 'none',
      maxHeight: `${height - 50}px`,
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.5)",
    },
    close: {

    }
  };

  RModal.setAppElement(`#${parentElementID}`);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RModal
        onRequestClose={onRequestClose}
        isOpen={show}
        style={customStyles}
        contentLabel={title}
        id={id}
      >
        <Button label="X" onClick={onRequestClose} className="modalClose" />
        {children}
      </RModal>
    </ThemeProvider>
  );
}

export default Modal;