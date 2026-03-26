import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextMenu } from "./context-menu";
import { ContextMenuItem } from "./context-menu-item";
import { ContextMenuPopup } from "./context-menu-popup";
import { ContextMenuSeparator } from "./context-menu-separator";
import { ContextMenuSubmenu } from "./context-menu-submenu";
import { ContextMenuSubmenuTrigger } from "./context-menu-submenu-trigger";
import { ContextMenuTrigger } from "./context-menu-trigger";

export default {
  title: "Components/Context Menu",
  component: ContextMenu,
  subcomponents: {
    ContextMenuTrigger,
    ContextMenuPopup,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuSubmenu,
    ContextMenuSubmenuTrigger,
  },
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger>Right Click Me</ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>Option 1</ContextMenuItem>
        <ContextMenuItem>Option 2</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Option 3</ContextMenuItem>
        <ContextMenuSubmenu>
          <ContextMenuSubmenuTrigger>Submenu</ContextMenuSubmenuTrigger>
          <ContextMenuPopup>
            <ContextMenuItem>Sub Option 1</ContextMenuItem>
            <ContextMenuItem>Sub Option 2</ContextMenuItem>
          </ContextMenuPopup>
        </ContextMenuSubmenu>
      </ContextMenuPopup>
    </ContextMenu>
  ),
} satisfies Meta<typeof ContextMenu>;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {};
