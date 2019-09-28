       /* TEST 13 */
       import square from './square';
       // BEGIN (write your solution here)
       import { getTriangleArea } from './myMathModule';
       const solution = (n) => getTriangleArea(n, square(n) / 2);
       export default solution;
       // END//