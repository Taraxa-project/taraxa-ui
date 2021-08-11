import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: 'string'},
    description: { control: 'string'},
    onClickText: { control: 'string'}
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = { title: "Staking", description: "Earn rewards while helping to secure Taraxa's network", onClickText: "Get Started" };
