import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResizeableHandle } from "./resizeable-handle";
import { ResizeablePanel } from "./resizeable-panel";
import { ResizeablePanelGroup } from "./resizeable-panel-group";

export default {
  title: "Components/Resizeable",
  component: ResizeablePanelGroup,
  subcomponents: {
    ResizeableHandle,
    ResizeablePanel,
  },
  parameters: {
    docs: {
      subtitle: "A set of components for creating resizable panels.",
      description: {
        component:
          "The Resizeable component provides a flexible way to create resizable panels in your application. It consists of three main components: ResizeablePanelGroup, ResizeablePanel, and ResizeableHandle. The ResizeablePanelGroup serves as a container for the panels, while the ResizeablePanel represents each individual panel that can be resized. The ResizeableHandle is used to allow users to adjust the size of the panels by dragging the handle. This component is ideal for creating layouts where users need to adjust the size of different sections dynamically.",
      },
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof ResizeablePanelGroup>;

type Story = StoryObj<typeof ResizeablePanelGroup>;

export const Horizontal: Story = {
  render: (args) => (
    <ResizeablePanelGroup {...args} className="min-h-[200px] rounded-xl border border-outline">
      <ResizeablePanel defaultSize={"25%"}>
        <div className="flex h-full items-center justify-center p-md">
          <span>Header</span>
        </div>
      </ResizeablePanel>
      <ResizeableHandle />
      <ResizeablePanel className="bg-green-500" defaultSize={"50%"}>
        <div className="flex h-full items-center justify-center p-md">
          <span>Content</span>
        </div>
      </ResizeablePanel>
      <ResizeableHandle />
      <ResizeablePanel className="bg-blue-500" defaultSize={"25%"}>
        <div className="flex h-full items-center justify-center p-md">
          <span>Footer</span>
        </div>
      </ResizeablePanel>
    </ResizeablePanelGroup>
  ),
};
export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <ResizeablePanelGroup
      {...args}
      className="min-h-[500px] min-w-[350px] rounded-xl border border-outline"
    >
      <ResizeablePanel defaultSize={"25%"}>
        <div className="flex h-full items-center justify-center p-md">
          <span>Header</span>
        </div>
      </ResizeablePanel>
      <ResizeableHandle />
      <ResizeablePanel className="bg-green-500" defaultSize={"50%"}>
        <div className="flex h-full items-center justify-center p-md">
          <span>Content</span>
        </div>
      </ResizeablePanel>
      <ResizeableHandle />
      <ResizeablePanel className="bg-blue-500" defaultSize={"25%"}>
        <div className="flex h-full items-center justify-center p-md">
          <span>Footer</span>
        </div>
      </ResizeablePanel>
    </ResizeablePanelGroup>
  ),
};

export const WithHandle: Story = {
  render: (args) => (
    <ResizeablePanelGroup {...args} className="min-h-[200px] rounded-xl border border-outline">
      <ResizeablePanel defaultSize={"25%"}>
        <div className="flex h-full items-center justify-center p-md">
          <span>Header</span>
        </div>
      </ResizeablePanel>
      <ResizeableHandle withHandle />
      <ResizeablePanel className="bg-green-500" defaultSize={"50%"}>
        <div className="flex h-full items-center justify-center p-md">
          <span>Content</span>
        </div>
      </ResizeablePanel>
      <ResizeableHandle withHandle />
      <ResizeablePanel className="bg-blue-500" defaultSize={"25%"}>
        <div className="flex h-full items-center justify-center p-md">
          <span>Footer</span>
        </div>
      </ResizeablePanel>
    </ResizeablePanelGroup>
  ),
};

export const Mixed: Story = {
  render: (args) => (
    <ResizeablePanelGroup
      {...args}
      className="min-h-[500px] min-w-[350px] rounded-xl border border-outline"
      orientation="vertical"
    >
      <ResizeablePanel defaultSize={"30%"}>
        <div className="flex h-full items-center justify-center bg-red-500 p-md">
          <span>Top Panel</span>
        </div>
      </ResizeablePanel>
      <ResizeableHandle />
      <ResizeablePanel defaultSize={"70%"}>
        <ResizeablePanelGroup orientation="horizontal">
          <ResizeablePanel defaultSize={"40%"}>
            <div className="flex h-full items-center justify-center bg-green-500 p-md">
              <span>Left</span>
            </div>
          </ResizeablePanel>
          <ResizeableHandle />
          <ResizeablePanel defaultSize={"60%"}>
            <div className="flex h-full items-center justify-center bg-blue-500 p-md">
              <span>Right</span>
            </div>
          </ResizeablePanel>
        </ResizeablePanelGroup>
      </ResizeablePanel>
    </ResizeablePanelGroup>
  ),
};
