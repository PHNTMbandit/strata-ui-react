import { SpinnerGapIcon, XIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Meter } from "./meter";
import { MeterIndicator } from "./meter-indicator";
import { MeterLabel } from "./meter-label";
import { MeterSubtitle } from "./meter-subtitle";
import { MeterTrack } from "./meter-track";
import { MeterValue } from "./meter-value";

export default {
  title: "Components/Meter",
  component: Meter,
  subcomponents: {
    MeterIndicator,
    MeterLabel,
    MeterSubtitle,
    MeterTrack,
    MeterValue,
  },
  parameters: {
    subtitle: "A component for displaying progress or levels.",
    docs: {
      description: {
        component:
          "The Meter component is used to visually represent progress or levels, such as volume or battery life. It can be customized with various styles and behaviors to fit the needs of the application.",
      },
    },
  },
  args: {
    value: 25,
    max: 100,
    orientation: "vertical",
  },
  render: (args) => (
    <Meter className="w-[500px]" {...args}>
      <MeterLabel>Progress</MeterLabel>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
      <MeterValue />
    </Meter>
  ),
} satisfies Meta<typeof Meter>;

type Story = StoryObj<typeof Meter>;

export const Default: Story = {};

export const Downloading: Story = {
  render: (args) => (
    <Meter className="w-[500px]" {...args}>
      <MeterLabel>
        Downloading File...
        <SpinnerGapIcon className="animate-spin" />
      </MeterLabel>
      <MeterValue />
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
      <MeterSubtitle>75% downloaded</MeterSubtitle>
    </Meter>
  ),
};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
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
      <Button size={"iconSmall"} tone="error">
        <XIcon weight="bold" />
      </Button>
    </Meter>
  ),
};
