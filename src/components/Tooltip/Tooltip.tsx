import React from "react";
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from "../theme";
import useStyles from "./tooltip-styles";
import {Tooltip as MTooltip, TooltipProps as MTooltipProps} from '@material-ui/core';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Text from "../Text";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#40465F',
    color: 'white',
    minWidth: 400,
    fontSize: theme.typography.pxToRem(10),
  },
}))(MTooltip);

export interface TooltipProps {
  title: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
  id?: string;
};


const Tooltip = ({
  title,
  Icon,
  className,
  id,
}: TooltipProps) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <div>
        <HtmlTooltip
          className={className}
          id={id}
          title={
            <div className={classes.tooltip}>
              <Text label={title} variant="body1" color="primary" />
            </div>
          }
          enterTouchDelay={200}
        >
          <span><Icon/></span>
        </HtmlTooltip>
      </div>
    </ThemeProvider>
  );
};

export default Tooltip;