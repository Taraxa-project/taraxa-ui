import React from "react";
import { CssBaseline, Link, List, ThemeProvider } from '@material-ui/core'
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
  items: { label: string, name: string, location?: string, Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>, items?: {label: string, name: string, location?: string}[] }[];
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
  items: { label: string, name: string, location?: string, items?: {label: string, name: string, location?: string}[] }[];
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  location?: string;
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
              Icon={sidebarItem.Icon ? sidebarItem.Icon : undefined}
              location={sidebarItem.location ? sidebarItem.location : ''}
            />
          ))}
        </List>
      </div>
    </ThemeProvider>
  );
}

const SidebarItem = ({ label, items, depthStep, depth, subItem, activeParent, setActiveParent, activeChild, setActiveChild, Icon, location} : SidebarItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItem className={open && subItem && activeChild === label ? 'subItemOpened' : open && activeParent === label ? 'itemOpened' : subItem ? 'subItem' : 'item'} button dense
      onClick={() =>  { 
        if(!subItem) setActiveParent(label); else setActiveChild(label);
        setOpen(!open);
      }}>
        {location ? <Link href={location} className={open && subItem && activeChild === label ? 'whiteLink' : open && activeParent === label ? 'whiteLink' : 'grayLink'}>
            {Icon && <Icon/>}
            <ListItemText style={{ paddingLeft: subItem ? depth * depthStep : 15, marginTop: 0 }}>
              <Font family='Inter'><span>{label}</span></Font>
            </ListItemText>
          </Link>
          :
          <>
          {Icon && <Icon/>}
            <ListItemText style={{ paddingLeft: subItem ? depth * depthStep : 15 }}>
              <Font family='Inter'><span>{label}</span></Font>
            </ListItemText>
          </>
        }
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {open && items.map((subItem) => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 2}
              depthStep={depthStep}
              subItem
              activeParent={activeParent}
              setActiveParent={setActiveParent}
              activeChild={activeChild}
              setActiveChild={setActiveChild}
              label={subItem.label}
              items={subItem.items ? subItem.items : []}
              location={subItem.location ? subItem.location : ''}
            />
          ))}
        </List>
      ) : null}
    </>
  )
}

export default Sidebar;