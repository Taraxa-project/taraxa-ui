import React from "react";
import { Chip, CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from "../theme";

export interface ChipProps  {
  clickable: boolean;
  color?: 'default'
  | 'primary'
  | 'secondary';
  avatar?: JSX.Element;
  deleteIcon?: JSX.Element;
  disabled?: boolean;
  icon?: JSX.Element;
  label: string;
  size?: 'medium'
  | 'small';
  onDelete?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
  variant: 'default'
  | 'outlined';
  onClick?: ((event: any) => void) | undefined;
  className?: string;
  style?: React.CSSProperties | undefined
};


const Pill = ({
  clickable,
  color,
  avatar,
  deleteIcon,
  disabled,
  icon,
  label,
  size,
  onDelete,
  variant,
  onClick,
  className,
  style
}: ChipProps) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Chip
        clickable={clickable} color={color} avatar={avatar} deleteIcon={deleteIcon} disabled={disabled} icon={icon} label={label} size={size} onDelete={onDelete} variant={variant} onClick={onClick} className={className} style={style}
      />
    </ThemeProvider>
  );
};

export default Pill;