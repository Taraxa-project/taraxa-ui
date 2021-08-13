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
  className?: string;
  items: { label: string, Link?: JSX.Element, Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,  items?: {label: string, Link?: JSX.Element, Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>}[] }[];
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
  items: { label: string, Link?: JSX.Element, Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,  items?: {label: string, Link?: JSX.Element, Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>}[] }[];
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
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
  const [activeParent, setActiveParent] = useState('');
  const [activeChild, setActiveChild] = useState('');
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
              activeParent={activeParent}
              setActiveParent={setActiveParent}
              activeChild={activeChild}
              setActiveChild={setActiveChild}
              subItem={false}
              items={sidebarItem.items ? sidebarItem.items : []}
              label={sidebarItem.label}
              Icon={sidebarItem.Icon ? sidebarItem.Icon : undefined}
              Link={sidebarItem.Link ? sidebarItem.Link : undefined}
            />
          ))}
        </List>
      </div>
    </ThemeProvider>
  );
}

const SidebarItem = ({ label, items, depthStep, depth, subItem, activeParent, setActiveParent, activeChild, setActiveChild, Icon, Link} : SidebarItemProps) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <ListItem className={open && subItem && activeChild === label ? 'subItemOpened' : open && activeParent === label ? 'itemOpened' : subItem ? 'subItem' : 'item'} button dense
      onClick={() =>  { 
        if(subItem) setActiveChild(label);
      }}>
        {Link ? <div className={open && subItem && activeChild === label ? 'whiteLink' : open && activeParent === label ? 'whiteLink' : 'grayLink'}>
            {Icon && <Icon/>}
            <ListItemText style={{ paddingLeft: subItem ? depth * depthStep : !items ? (depth + 2) * depthStep : 15, marginTop: 0 }}>
              <Font family='Inter'>{Link}</Font>
            </ListItemText>
          </div>
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
          {open && items.map((subItem, index) => (
            <SidebarItem
            key={`${subItem.label}${index}`}
              depth={depth + 2}
              depthStep={depthStep}
              subItem
              activeParent={activeParent}
              setActiveParent={setActiveParent}
              activeChild={activeChild}
              setActiveChild={setActiveChild}
              label={subItem.label}
              items={subItem.items ? subItem.items : []}
              Link={subItem.Link ? subItem.Link : undefined}
              Icon={subItem.Icon ? subItem.Icon : undefined}
            />
          ))}
        </List>
      ) : null}
    </>
  )
}

export default Sidebar;