import React, { useEffect, useState } from "react";
import { Card as MCard, CardActions, CardContent, CssBaseline, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import theme from "../theme";
import Font from "react-font";
import Button from "../Button";
import RModal from 'react-modal';


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
        {children}
      </RModal>
    </ThemeProvider>
  );
}

export default Modal;