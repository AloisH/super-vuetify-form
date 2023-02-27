import * as components from "./components";

const SuperForm = {
  install(Vue: any) {
    Vue.component("SuperForm", components.SuperForm);
  },
};

export default SuperForm;
