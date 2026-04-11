import { SpinnerGapIcon, XIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { Meter } from './meter'
import { MeterHeader } from './meter-header'
import { MeterIndicator } from './meter-indicator'
import { MeterLabel } from './meter-label'
import { MeterSubtitle } from './meter-subtitle'
import { MeterTrack } from './meter-track'
import { MeterValue } from './meter-value'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Meter',
  component: Meter,
  subcomponents: {
    MeterIndicator,
    MeterLabel,
    MeterSubtitle,
    MeterTrack,
    MeterValue,
  },
  parameters: {
    subtitle: 'A component for displaying progress or levels.',
    docs: {
      description: {
        component:
          'The Meter component is used to visually represent progress or levels, such as volume or battery life. It can be customized with various styles and behaviors to fit the needs of the application.',
      },
    },
  },
  args: {
    value: 25,
    orientation: 'vertical',
  },
  render: (args) => (
    <Meter className="w-[500px]" {...args}>
      <MeterHeader>
        <MeterLabel>Progress</MeterLabel>
        <MeterValue />
      </MeterHeader>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  ),
} satisfies Meta<typeof Meter>

type Story = StoryObj<typeof Meter>

export const Default: Story = {}

export const Downloading: Story = {
  render: (args) => (
    <Meter className="w-[500px]" {...args}>
      <MeterHeader>
        <MeterLabel>
          <SpinnerGapIcon className="animate-spin" />
          Downloading File...
        </MeterLabel>
        <MeterValue />
      </MeterHeader>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
      <MeterSubtitle>Please wait while the file is being downloaded.</MeterSubtitle>
      <Button tone="error" className={'w-full'} size={'medium'}>
        <XIcon weight="bold" /> Cancel
      </Button>
    </Meter>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <Meter className="w-[500px]" {...args}>
      <MeterLabel>
        Progress
        <SpinnerGapIcon className="animate-spin" />
      </MeterLabel>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
      <MeterValue />
      <Button size={'iconSmall'} tone="error">
        <XIcon weight="bold" />
      </Button>
    </Meter>
  ),
}
