import React from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import { noop } from "./constants";

const ContactsMenu = ({ showMenu = true }) => (
  <MenuBar
    showMenu={showMenu}
    title={
      <div className="flex justify-between">
        <Typography style="h2">Contacts</Typography>
      </div>
    }
  >
    <MenuBar.Block active count={200} label="All" />
    <MenuBar.Block count={200} label="Archived" />
    <MenuBar.Block count={0} label="Completed" />
    <MenuBar.Block count={0} label="Phase 2" />
    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
          onClick: noop,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </MenuBar.SubTitle>
    <MenuBar.Search collapse onCollapse={noop} />
    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
        {
          icon: Plus,
        },
        {
          icon: Settings,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </MenuBar.SubTitle>
  </MenuBar>
);

export default ContactsMenu;
