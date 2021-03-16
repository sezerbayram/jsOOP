

//class Nokta

class Nokta {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

}

class Ucgen {
    constructor (nokta1, nokta2, nokta3){
        this.nokta1 = nokta1;
        this.nokta2 = nokta2;
        this,nokta3 = nokta3;
    }
    calcEnvironment = calcEnv();
    calcArea = calcArea();
}
   calcEnv = (a,b,c,env) => {

    a = Math.sqrt((nokta2.x-nokta1.x)*(nokta2.x-nokta1.x)+(nokta2.y-nokta1.y)*(nokta2.y-nokta1.y));
    b = Math.sqrt((nokta2.x-nokta3.x)*(nokta2.x-nokta3.x)+(nokta2.y-nokta3.y)*(nokta2.y-nokta3.y)); 
    c = Math.sqrt((nokta3.x-nokta1.x)*(nokta3.x-nokta1.x)+(nokta3.y-nokta1.y)*(nokta3.y-nokta1.y));
    
    return a+b+c;
    }

    calcArea = (result) => {
        //Alan(ABC)=1/2 |x1.y2+x2.y3+x3.y1−(y1.x2+y2.x3+y3.x1)| ile bulunur.
      result = 0.5 * Math.abs(nokta1.x*nokta2.y + nokta2.x*nokta3.y +nokta3.x*nokta1.y - (nokta1.y*nokta2.x + nokta2.y*nokta3.x + nokta3.y*nokta1.x));
      return result;


    }



    var nokta1 = new Nokta(3,5);
    var nokta2 = new Nokta(7,5);
    var nokta3 = new Nokta(7,8);


const ucgen = new Ucgen(nokta1,nokta2,nokta3);
  console.log(ucgen.calcEnvironment);
  console.log(ucgen.calcArea)
