class Square {
   constructor(a) {
       this.a = a;
   }

   static help() {
       console.log("Квадрат - прямокутник, у якого всі сторони рівні.");
   }

   length() {
       console.log("Сума довжин сторін квадрата:", 4 * this.a);
   }

   square() {
       console.log("Площа квадрата:", this.a ** 2);
   }

   info() {
       console.log("Характеристики квадрата:");
       console.log("Довжина сторін квадрата:", this.a);
       this.length();
       this.square();
   }
}

class Rectangle extends Square {
   constructor(a, b) {
       super(a);
       this.b = b;
   }

   static help() {
       console.log("Прямокутник - геометрична фігура з двома паралельними сторонами, які необхідно різні.");
   }

   length() {
       console.log("Периметр прямокутника:", 2 * (this.a + this.b));
   }

   square() {
       console.log("Площа прямокутника:", this.a * this.b);
   }

   info() {
       console.log("Характеристики прямокутника:");
       console.log("Довжина прямокутника:", this.a);
       console.log("Ширина прямокутника:", this.b);
       this.length();
       this.square();
   }
}

class Rhombus extends Square {
   constructor(a, alpha, beta) {
       super(a);
       this.alpha = alpha;
       this.beta = beta;
   }

   static help() {
       console.log("Ромб - геометрична фігура з чотирма однаковими сторонами та двома тупими кутами.");
   }

   length() {
       console.log("Периметр ромба:", 4 * this.a);
   }

   square() {
       console.log("Площа ромба:", (this.a ** 2) * Math.sin(this.alpha * Math.PI / 180));
   }

   info() {
       console.log("Інформація про ромб:");
       console.log("Довжина ромба:", this.a);
       console.log("Тупий кут:", this.alpha);
       console.log("Гострий кут:", this.beta);
       this.length();
       this.square();
   }
}

class Parallelogram extends Rectangle {
   constructor(a, b, alpha, beta) {
       super(a, b);
       this.alpha = alpha;
       this.beta = beta;
   }

   static help() {
       console.log("Паралелограм - геометрична фігура з протилежними сторонами рівної довжини та паралельними протилежними сторонами.");
   }

   length() {
       console.log("Периметр паралелограма:", 2 * (this.a + this.b));
   }

   square() {
       console.log("Площа паралелограма:", this.a * Math.sin(this.alpha * Math.PI / 180));
   }

   info() {
       console.log("Інформація про паралелограма:");
       console.log("Довжина паралелограма:", this.a);
       console.log("Ширина паралелограма:", this.b);
       console.log("Тупий кут:", this.alpha);
       console.log("Гострий кут:", this.beta);
       this.length();
       this.square();
   }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const square = new Square(9);
square.info();

const rectangle = new Rectangle(6, 8);
rectangle.info();

const rhombus = new Rhombus(4, 70, 110);
rhombus.info();

const parallelogram = new Parallelogram(7, 9, 50, 130);
parallelogram.info();
