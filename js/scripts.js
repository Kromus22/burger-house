import { scrolls } from "./scrolls.js";
import { validation } from "./validation.js";
import { prices } from "./prices.js";

const init = () => {
  scrolls();
  validation();
  prices();
}

init();
