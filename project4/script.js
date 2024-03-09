function MyMathPower(b, n) {
   let result = 1;
 
   if (n < 0) {
       console.error("Показник степеня має бути невід'ємним числом");
       return;
   }

   for (let i = 0; i < n; i++) {
       result *= b;
   }

   console.log(`The ${n}th power of ${b} equals ${result}`);
}

function MyMathPowerDefault1(b, n) {
   b = b || 2;
   n = n || 3;
   MyMathPower(b, n);
}

function MyMathPowerDefault2(b = 2, n = 3) {
   MyMathPower(b, n);
}

function TestAllFunctions() {
   MyMathPowerDefault1(2, 3);
   MyMathPowerDefault1(2);
   MyMathPowerDefault1(undefined, 3);
   MyMathPowerDefault1();
   MyMathPowerDefault2(2, 3);
   MyMathPowerDefault2(2);
   MyMathPowerDefault2(undefined, 3);
   MyMathPowerDefault2();
}

TestAllFunctions();
