import { VueConstructor } from "vue";
import keyboard from "./pay.vue";
const zfcPassword = {
  install(
    Vue: { component: (arg0: string, arg1: VueConstructor<keyboard>) => void },
    options: any
  ) {
    Vue.component("vpay", keyboard);
  },
};

export default zfcPassword;
