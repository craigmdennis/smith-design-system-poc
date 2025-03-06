import "bootstrap/dist/css/bootstrap.css";
import "../src/assets/main.scss";
import { createBootstrap } from "bootstrap-vue-next";

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => {
      const app = createBootstrap();
      return {
        components: { story },
        template: `<div><story /></div>`,
        setup() {
          return { app };
        },
      };
    },
  ],
};

export default preview;
