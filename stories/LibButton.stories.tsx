import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {LibButton} from "../src";

export default {
    title: "Components/LibButton",
    component: LibButton
} as ComponentMeta<typeof LibButton>;

const Template: ComponentStory<typeof LibButton> = () => <LibButton/>;

export const Primary = Template.bind({});