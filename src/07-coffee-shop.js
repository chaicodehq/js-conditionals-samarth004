/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  
  

  if (!['small', 'medium', 'large'].includes(size)) {
    return -1;
  }

  if (!['regular', 'latte', 'cappuccino','mocha'].includes(type)) {
    return -1;
  }

const extraOptionals = 
  extras.whippedCream && extras.extraShot ? 0.50 + 0.75 :
 extras.whippedCream ?  0.50 : extras.extraShot ?  0.75 :0.00;


   if(type === 'regular'){
        
      if(size === 'small'){
         return Number((3.00 + extraOptionals).toFixed(2))
      }else if(size === 'medium'){
         return Number((4.00 + extraOptionals).toFixed(2))
      }else if(size === 'large'){
        return  Number((5.00 + extraOptionals).toFixed(2))
      }
         
    }else if(type === 'latte'){
      if(size === 'small'){
        return Number((3.00 + 1.00+ extraOptionals).toFixed(2))
     }else if(size === 'medium'){
        return Number((4.00 +1.00 + extraOptionals).toFixed(2))
     }else if(size === 'large'){
       return ((5.00 + 1.00 + extraOptionals).toFixed(2))
     }
    }else if(type === 'cappuccino'){
      if(size === 'small'){
        return Number((3.00 + 1.50+ extraOptionals).toFixed(2))
     }else if(size === 'medium'){
        return Number((4.00 +1.50 + extraOptionals).toFixed(2))
     }else if(size === 'large'){
       return  Number(size (5.00 + 1.50 + extraOptionals).toFixed(2))
     }
    }else if(type === 'mocha'){
      if(size === 'small'){
        return Number((3.00 + 2.00+ extraOptionals).toFixed(2))
     }else if(size === 'medium'){
        return Number((4.00 +2.00 + extraOptionals).toFixed(2))
     }else if(size === 'large'){
       return  Number((5.00 + 2.00 + extraOptionals).toFixed(2))
     }
    }

   
}
