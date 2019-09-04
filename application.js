$(() => {
  console.log('lalala')

  // $.ajax({url: 'http://localhost:3000/api/v2/candidates.json'})
  // let url = 'http://localhost:3000/api/v2/candidates.json'
  // $.get(url, function(data){
  //   // console.log(data)
  //   let candidates = data.map(function(c){
  //     let name = c.name
  //     let party = c.party
  //     let age = c.age
  //     let policy = c.policy
  //     console.log(name)
  //     // let name, party, age, policy = p
      
  //     return `<h2>${name}</h2><ul><li>${party}</li><li>${age}</li><li>${policy}</li></ul>`
  //   })
  //   $('body').append(candidates.join(''))
  // })
  $.ajax({url: 'http://localhost:3000/api/v2/candidates.json'})
  .then(function(data){
    // console.log(data)
    let candidates = data.map(function(c){
      // let name,party,age,policy = c
      let name = c.name
      let party = c.party
      let age = c.age
      let policy = c.policy
      return `<h2>NAME: ${name}</h2><ul><li>PARTY: ${party}</li><li>AGE: ${age}</li><li>POLICY: ${policy}</li></ul>`

    })
    $('body').append(candidates)
    // console.log(id)
  })

  // $.ajax({
  //   url = 'http://localhost:3000/api/v2/candidates.json',
  //   data: {},
  //   beforeSand: function(){},
  //   success: function(){},
  //   errors: function(){},
  //   done: function(){}
  // })



  // console.log('lalala')

  // let myData;
  // $('#fruit-prices').on('click', 'li', function() {
  //   alert('lalala')
  // })
  // let baseUrl = 'https://ubin.io/data'
  // let queryParam = '/vegetables?item=香蕉'
  // $.get(baseUrl + queryParam, function(data) {
  //   myData = data
  //   console.log(data)
  //   $('#fruit-name').text(data.item)
  //   let prices = data.prices.map(function(p) {
  //     let market = p.market
  //     let price = p.price
  //     return `<li>${market} / ${price}</li>`
  //   })
    
  //   $('#fruit-prices').append(prices.join(''))
  // })

  // console.log(myData)

  // console.log('end')
})
