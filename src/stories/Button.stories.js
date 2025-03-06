import { BButton, BButtonGroup } from "bootstrap-vue-next";

export default {
  title: "Buttons",
  component: BButton,
  args: {
    label: "Click Me",
    variant: "primary",
    size: "md",
    disabled: false,
    block: false,
  },
  argTypes: {
    label: { control: "text" },
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
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    block: { control: "boolean" },
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

export const AllVariants = () => ({
  components: { BButton, BButtonGroup },
  template: `
    <BButtonGroup>
      <BButton v-for="variant in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']"
        :key="variant"
        :variant="variant">
        {{ variant.charAt(0).toUpperCase() + variant.slice(1) }}
      </BButton>
    </BButtonGroup>
  `,
});
