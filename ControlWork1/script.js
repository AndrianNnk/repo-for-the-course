// Контрольна робота №1 Нанюка Андріана Віталійовича
// Варіант 1

// Завдання 1
function TriangleArea(base = 5, height = 4)
    {
        const area = (base * height) / 2;
        console.log("Площа трикутника:", area);
    }
TriangleArea(3, 6);
TriangleArea(); 

// Завдання 2
function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination)
    {
        this.color = color;
        this.avgSpeed = avgSpeed;
        this.maxAltitude = maxAltitude;
        this.brand = brand;
        this.pointOfDestination = pointOfDestination;
    }

Jet.prototype.AssignPilot = function(name, yearsOfExperiance, hasChildren)
    {
        this.pilot =
        {
            name: name,
            yearsOfExperiance: yearsOfExperiance,
            hasChildren: hasChildren
        };
    };
const myJet = new Jet("white", 900, 15000, "Bombardier", "Milan")
myJet.AssignPilot("Barry Seal", 20, true)
console.log(myJet)

// Завдання 3
class EquilateralTriangle
    {
        constructor(equalSide)
            {
                this.equalSide = equalSide;
            }
    get EqualSide()
        {
            return this.equalSide;
        }
    }

    class Triangle extends EquilateralTriangle 
        {
            constructor(equalSide, base)
                {
                    super(equalSide);
                    this.base = base;
                }
    
            static Area(equalSide, base)
                {
                    return (base/4)*(Math.sqrt(4 * (equalSide*equalSide)-(base*base)))
                }
        }
const myTriangle = new Triangle(4,7);
console.log("Основа: ", myTriangle.base);
console.log("Бічна сторона: ", myTriangle.equalSide);
console.log("Площа: ", Triangle.Area(myTriangle.equalSide, myTriangle.base));

// Завдання 4

function AddGenerator(num)
    {
        return function(x)
            {
                return num + x;
            };
    }

const addSeven = AddGenerator(7);
console.log(addSeven(13));

const addTen = AddGenerator(10);
console.log(addTen(5));
