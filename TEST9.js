        // BEGIN (write your solution here)
        const smallestDivisor = (num) => {
           if (num <= 0) {
            return NaN;
           }
           if (num === 1) {
            return num;
           }
           let divisor = 2;    
            while (num % divisor !== 0) {
              divisor = divisor + 1;    
           }
            return divisor;
           }
        // END
        export default smallestDivisor;