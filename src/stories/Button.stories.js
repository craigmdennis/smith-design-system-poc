import { BButton } from "bootstrap-vue-next";

export default {
  title: "BootstrapVue/Buttons",
  component: BButton,
  argTypes: {
    label: { control: "text", defaultValue: "Click Me" },
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
      defaultValue: "primary",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    disabled: { control: "boolean", defaultValue: false },
    block: { control: "boolean", defaultValue: false },
  },
};

const Template = (args) => ({
  components: { BButton },
  setup() {
    return { args };
  },
  template: `<BButton v-bind="args">{{ args.label }}</BButton>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
  variant: "primary",
  size: "md",
  disabled: false,
  block: false,
};
