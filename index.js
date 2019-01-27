const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();

const callback = (error, response, data) => {
    if(error)
        return
        console.dir(error);

    return console.dir(data);
}

publicClient
.getProduct24HrStats('ETC-USD')
  .then(data => {
    // work with data
    console.dir(data);
  })
  .catch(error => {
    // handle the error
    console.dir(error);
  });

  publicClient
.getProduct24HrStats('ETH-USD')
  .then(data => {
    // work with data
    console.dir(data);
  })
  .catch(error => {
    // handle the error
    console.dir(error);
  });

  publicClient
  .getProduct24HrStats('LTC-USD')
    .then(data => {
      // work with data
      console.dir(data);
    })
    .catch(error => {
      // handle the error
      console.dir(error);
    });

// publicClient
// .getCurrencies()
//   .then(data => {
//     // work with data
//     console.dir(data);
//   })
//   .catch(error => {
//     // handle the error
//     console.dir(error);
//   });