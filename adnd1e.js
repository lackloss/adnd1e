import {adnd1e} from "./module/config.js";
import Adnd1eItemSheet from "./module/sheets/Adnd1eItemSheet.js";

Hooks.once("init", function(){
  console.log("adnd1e | Initializing AD&D 1st edition module");

  CONFIG.adnd1e = adnd1e;

  Items.unregisterSheet("core",ItemSheet);
  Items.registerSheet("adnd1e", Adnd1eItemSheet, {makeDefault: true});
});