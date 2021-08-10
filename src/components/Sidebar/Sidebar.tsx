import React from "react";
import { CssBaseline, List, ThemeProvider } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import theme from "../theme";
import Font from "react-font";
import './sidebar.css';
import { useState } from "react";


export interface SidebarProps  {
  disablePadding?: boolean;
  dense?: boolean;
  depthStep?: 0;
  depth?: 0;
  items: { label: string, name: string, items?: {label: string, name: string}[] }[];
};

interface SidebarItemProps  {
  label: string; 
  depthStep: number;
  depth: number;
  subItem: boolean;
  activeParent: string;
  setActiveParent: React.Dispatch<React.SetStateAction<any>>;
  activeChild: string;
  setActiveChild: React.Dispatch<React.SetStateAction<any>>;
  items: { label: string, name: string, items?: {label: string, name: string}[] }[];
};

const Sidebar = ({
  disablePadding,
  dense,
  depthStep,
  depth,
  items,
}: SidebarProps) => {
  const [activeParent, setActiveParent] = useState('');
  const [activeChild, setActiveChild] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="sidebar">
        <List disablePadding={disablePadding} dense={dense}>
          {items.map((sidebarItem, index) => (
            <SidebarItem
              key={`${sidebarItem.name}${index}`}
              depthStep={depthStep ? depthStep : 10}
              depth={depth ? depth : 0}
              activeParent={activeParent}
              setActiveParent={setActiveParent}
              activeChild={activeChild}
              setActiveChild={setActiveChild}
              subItem={false}
              items={sidebarItem.items ? sidebarItem.items : []}
              label={sidebarItem.label}
            />
          ))}
        </List>
      </div>
    </ThemeProvider>
  );
}

const SidebarItem = ({ label, items, depthStep, depth, subItem, activeParent, setActiveParent, activeChild, setActiveChild} : SidebarItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItem className={open && subItem && activeChild === label ? 'subItemOpened' : open && activeParent === label ? 'itemOpened' : subItem ? 'subItem' : ''} button dense
      onClick={() =>  { 
        if(!subItem) setActiveParent(label); else setActiveChild(label);
        setOpen(!open);
      }}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <Font family='Inter'><span>{label}</span></Font>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {open && items.map((subItem) => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              subItem
              activeParent={activeParent}
              setActiveParent={setActiveParent}
              activeChild={activeChild}
              setActiveChild={setActiveChild}
              label={subItem.label}
              items={subItem.items ? subItem.items : []}
            />
          ))}
        </List>
      ) : null}
    </>
  )
}

export default Sidebar;