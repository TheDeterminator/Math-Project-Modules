let divisor = {
  divisors: [2,3,4],
  result: 0,
  multiply: function(){
    this.result = this.divisors.reduce((total, currentValue) => total * currentValue)
  },
  increment: function(){
    this.divisors = this.divisors.map(x => x+=2)
  }
}


const getPi = function(limit) {
  let pi = 3
  for (let i = 0; i <= limit; i++){
    divisor.multiply()
    if (i % 2 === 0){
      pi += (4/divisor.result)
    } else {
      pi -= (4/divisor.result)
    }
    divisor.increment()
  }
  return pi
}


console.log(getPi(process.argv[2]))