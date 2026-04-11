import {
  CardsIcon,
  ClipboardIcon,
  CommandIcon,
  CopyIcon,
  ScissorsIcon,
  TrashIcon,
} from '@phosphor-icons/react'
import { Kbd } from '../kbd'
import { KbdGroup } from '../kbd/kbd-group'
import { ContextMenu } from './context-menu'
import { ContextMenuCheckboxItem } from './context-menu-checkbox-item'
import { ContextMenuGroup } from './context-menu-group'
import { ContextMenuGroupLabel } from './context-menu-group-label'
import { ContextMenuItem } from './context-menu-item'
import { ContextMenuPopup } from './context-menu-popup'
import { ContextMenuRadioGroup } from './context-menu-radio-group'
import { ContextMenuRadioItem } from './context-menu-radio-item'
import { ContextMenuSeparator } from './context-menu-separator'
import { ContextMenuShortcut } from './context-menu-shortcut'
import { ContextMenuSubmenu } from './context-menu-submenu'
import { ContextMenuSubmenuTrigger } from './context-menu-submenu-trigger'
import { ContextMenuTrigger } from './context-menu-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Context Menu',
  component: ContextMenu,
  subcomponents: {
    ContextMenuTrigger,
    ContextMenuPopup,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuSubmenu,
    ContextMenuSubmenuTrigger,
    ContextMenuGroup,
    ContextMenuGroupLabel,
    ContextMenuCheckboxItem,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuShortcut,
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
} satisfies Meta<typeof ContextMenu>

type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {}

export const Icons: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger>Right Click Me</ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>
          <CopyIcon weight="bold" /> Copy
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardIcon weight="bold" /> Paste
        </ContextMenuItem>
        <ContextMenuItem>
          <ScissorsIcon weight="bold" /> Cut
        </ContextMenuItem>
        <ContextMenuItem>
          <CardsIcon weight="bold" /> Select All
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem tone="error">
          <TrashIcon weight="bold" /> Delete
        </ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  ),
}

export const Shortcuts: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger>Right Click Me</ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>
          <CopyIcon weight="bold" /> Copy
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardIcon weight="bold" /> Paste
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>V</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ScissorsIcon weight="bold" /> Cut
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>X</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <CardsIcon weight="bold" /> Select All
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>A</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem tone="error">
          <TrashIcon weight="bold" /> Delete
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>⌫</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  ),
}

export const Groups: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger>Right Click Me</ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Group 1</ContextMenuGroupLabel>
          <ContextMenuItem>Option 1</ContextMenuItem>
          <ContextMenuItem>Option 2</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Group 2</ContextMenuGroupLabel>
          <ContextMenuItem>Option 3</ContextMenuItem>
          <ContextMenuItem>Option 4</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuPopup>
    </ContextMenu>
  ),
}

export const RadioAndCheckboxItems: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger>Right Click Me</ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Checkbox Group</ContextMenuGroupLabel>
          <ContextMenuCheckboxItem>Checkbox Item</ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Radio Group</ContextMenuGroupLabel>
          <ContextMenuRadioGroup>
            <ContextMenuRadioItem value="option1">Radio Option 1</ContextMenuRadioItem>
            <ContextMenuRadioItem value="option2">Radio Option 2</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuPopup>
    </ContextMenu>
  ),
}
