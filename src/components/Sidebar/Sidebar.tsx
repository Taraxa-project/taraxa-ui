import React from "react";
import { CssBaseline, List, ThemeProvider } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import theme from "../theme";
import Font from "react-font";
import '../app.scss';
import { useState } from "react";


export interface SidebarProps  {
  disablePadding?: boolean;
  dense?: boolean;
  depthStep?: 0;
  depth?: 0;
  className?: string;
  items: { label?: string, name?: string; Link?: JSX.Element,  items?: {label?: string, name?: string, Link?: JSX.Element}[] }[];
};

interface SidebarItemProps  {
  label?: string; 
  name?: string;
  depthStep: number;
  depth: number;
  subItem: boolean;
  items: { label?: string, name?: string; Link?: JSX.Element, items?: {label?: string, name?: string, Link?: JSX.Element}[] }[];
  Link?: JSX.Element;
};

const Sidebar = ({
  disablePadding,
  dense,
  depthStep,
  depth,
  items,
  className,
}: SidebarProps) => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="sidebar">
        <List disablePadding={disablePadding} dense={dense} className={className ? className : ''}>
          {items.map((sidebarItem, index) => (
            <SidebarItem
              key={`${sidebarItem.label}${index}`}
              depthStep={depthStep ? depthStep : 10}
              depth={depth ? depth : 0}
              subItem={false}
              items={sidebarItem.items ? sidebarItem.items : []}
              label={sidebarItem.label ? sidebarItem.label : ""}
              Link={sidebarItem.Link ? sidebarItem.Link : undefined}
              name={sidebarItem.name ? sidebarItem.name : undefined}
            />
          ))}
        </List>
      </div>
    </ThemeProvider>
  );
}

const SidebarItem = ({ label, items, depthStep, depth, subItem, Link, name} : SidebarItemProps) => {
  const pathname = window.location.pathname.length > 1 ? window.location.pathname.substring(1) : window.location.pathname;
  if(name === pathname) console.log(pathname)
  return (
    <>
      <ListItem className={name === pathname && subItem ? 'subItemOpened' : name === pathname && !subItem ? 'itemOpened' : name === 'dashboard' && pathname === '/' && !subItem ? 'itemOpened' : subItem ? 'subItem' : !subItem && items.length < 1 ? 'soloItem' : 'item'} button dense>
        {Link ? <div className='grayLink'>
            <ListItemText style={{ paddingLeft: subItem ? depth * depthStep : !items ? (depth + 2) * depthStep : 15, marginTop: 0 }}>
              {Link}
            </ListItemText>
          </div>
          :
          <>
            <ListItemText style={{ paddingLeft: subItem ? depth * depthStep : 15 }}>
              {label}
            </ListItemText>
          </>
        }
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem, index) => (
            <SidebarItem
              key={`${subItem.label}${index}`}
              depth={depth + 2}
              depthStep={depthStep}
              subItem              
              label={subItem.label}
              items={subItem.items ? subItem.items : []}
              Link={subItem.Link ? subItem.Link : undefined}
              name={subItem.name ? subItem.name : undefined}
            />
          ))}
        </List>
      ) : null}
    </>
  )
}

export default Sidebar;