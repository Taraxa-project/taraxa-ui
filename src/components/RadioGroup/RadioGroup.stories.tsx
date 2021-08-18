import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import RadioGroup, { RadioGroupProps } from "./RadioGroup";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
} as Meta;

const Template: Story<RadioGroupProps> = (args) => <RadioGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = { name: "Test" };
