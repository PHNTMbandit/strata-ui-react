import React from 'react'
import { Checkbox } from '../checkbox/checkbox'
import { CheckboxGroup } from './checkbox-group'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Checkbox Group',
  component: CheckboxGroup,
  parameters: {
    docs: {
      subtitle:
        'A group of checkbox components that allows users to select multiple options from a set.',
      description: {
        component:
          'The CheckboxGroup component is used to group multiple checkbox inputs, enabling users to select one or more options from a list.',
      },
    },
  },
  args: {
    defaultValue: [],
  },
  render: (args) => (
    <CheckboxGroup {...args}>
      <Checkbox id="option1" label="Option 1" value="option1" />
      <Checkbox id="option2" label="Option 2" value="option2" />
      <Checkbox id="option3" label="Option 3" value="option3" />
    </CheckboxGroup>
  ),
} satisfies Meta<typeof CheckboxGroup>

type Story = StoryObj<typeof CheckboxGroup>

export const Default: Story = {}
export const Nested: Story = {
  render: (args) => {
    const id = React.useId()
    const [mainValue, setMainValue] = React.useState<string[]>([])
    const [managementValue, setManagementValue] = React.useState<string[]>([])
    const mainPermissions = ['view-dashboard', 'manage-users', 'access-reports']
    const userManagementPermissions = ['create-user', 'edit-user', 'delete-user', 'assign-roles']

    return (
      <CheckboxGroup
        {...args}
        allValues={mainPermissions}
        aria-labelledby={id}
        onValueChange={(value) => {
          if (value.includes('manage-users')) {
            setManagementValue(userManagementPermissions)
          } else if (managementValue.length === userManagementPermissions.length) {
            setManagementValue([])
          }
          setMainValue(value)
        }}
        style={{ marginLeft: '1rem' }}
        value={mainValue}
      >
        <Checkbox
          id={id}
          indeterminate={
            managementValue.length > 0 &&
            managementValue.length !== userManagementPermissions.length
          }
          label="User Permissions"
          parent
          style={{ marginLeft: '-1rem' }}
        />
        <Checkbox label="View Dashboard" value="view-dashboard" />
        <Checkbox label="Access Reports" value="access-reports" />
        <CheckboxGroup
          allValues={userManagementPermissions}
          onValueChange={(value) => {
            if (value.length === userManagementPermissions.length) {
              setMainValue((prev) => Array.from(new Set([...prev, 'manage-users'])))
            } else {
              setMainValue((prev) => prev.filter((v) => v !== 'manage-users'))
            }
            setManagementValue(value)
          }}
          style={{ marginLeft: '1rem' }}
          value={managementValue}
        >
          <Checkbox
            id="manage-users-caption"
            label="Manage Users"
            parent
            style={{ marginLeft: '-1rem' }}
          />
          <Checkbox label="Create User" value="create-user" />
          <Checkbox label="Edit User" value="edit-user" />
          <Checkbox label="Delete User" value="delete-user" />
          <Checkbox label="Assign Roles" value="assign-roles" />
        </CheckboxGroup>
      </CheckboxGroup>
    )
  },
}
