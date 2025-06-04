import { name, greet } from './modules/user.js';
import showMessage from './modules/helper.js';


(function() {
        const secret = "Секрет IIFE";
        console.log("Внутри IIFE:", secret);
      })();
      
// console.log(secret);


greet(name);
showMessage(); 