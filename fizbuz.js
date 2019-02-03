class Fizbuz{
  go(x){
     
     
      if((x % 5 == 0 && x % 3 ==0)|| (parseInt(x/10) == 5 && x%3 == 0) || (parseInt(x/10) == 3 && x%5 == 0) || x==53 || x == 35  ){
        return "fizzbuzz"
    }else  if(x % 3 == 0 || (parseInt(x/10) == 3) ){
        return "fizz"
    }else if(x % 5 == 0 || (parseInt(x/10) == 5)){
        return "buzz"
    }
  }



}
module.exports = Fizbuz;