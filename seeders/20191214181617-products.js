module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      title: 'Apple AirPods',
      description: "aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor",
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRXJ2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083',
      price: 199,
      link: "https://www.apple.com/airpods",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Apple iPhone Pro',
      description: "interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna",
      imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple_iPhone-11-Pro_Most-Powerful-Advanced_091019_big.jpg.large.jpg',
      price: 1000,
      link: "https://www.apple.com/iphone-11-pro",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Apple Watch',
      description: "amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae",
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/44-alu-space-sport-black-nc-s4-1up?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1549036770374',
      price: 499,
      link: "https://www.apple.com/watch",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Vespa Primavera',
      description: "https://www.vespa.com/us_EN/vespa-models/primavera.html",
      imageUrl: 'https://www.vespa.com/dam/jcr:92489b91-681b-4018-ac12-aa3d71276e73/Primavera_Verde_Relax_my19_00.png',
      price: 3000,
      link: "https://www.vespa.com/us_EN/vespa-models/primavera.html",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'New Balance 574 Core',
      description: "risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit",
      imageUrl: 'https://nb.scene7.com/is/image/NB/ml574egb_nb_02_i?$pdpPictLG$',
      price: 84,
      link: "https://www.newbalance.com/pd/574-core/ML574-EG.html",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Tribe Messenger Bike 004',
      description: "turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi",
      imageUrl: 'https://cdn.shopify.com/s/files/1/0604/3445/products/texas_mess.jpg?v=1490109070',
      price: 675,
      link: "https://tribebicycles.com/collections/messenger-series/products/mess-004-tx",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Stumptown Hair Bender Coffee',
      description: "curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla",
      imageUrl: 'https://d1rusy4hxccwbq.cloudfront.net/spree/images/1692/pdp_desktop_large/media.nl?1524324843',
      price: 16,
      link: "https://www.stumptowncoffee.com/products/hair-bender",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
