import React from "react";
import { Chip, CssBaseline, ThemeProvider, ChipProps as MChipProps } from '@material-ui/core';
import theme from "../theme";

export interface ChipProps extends MChipProps  {};

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