require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        basePath: '/',
        shopifyLite: true,
        enableWebp: true,
        imageQuality: '95',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/content`,
        name: 'content',
      },
    },
    `gatsby-transformer-remark`
  ],
  siteMetadata: {
    siteUrl: 'https://demo.gatsbystorefront.com',
    gatsbyStorefrontConfig: {
      storeName: 'Loja',
      storeDescription: 'Demo store description',
      email: 'info@gatsbystorefront.com',
      company: 'Gatsby Storefront Inc.',
      location: 'New York, NY',
      address: '1 Centre St.',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'Basic 1',
              type: 'collection',
              handle: 'basic',
              textColor: 'black',
              textBgColor: 'white'
            },
            {
              name: 'Basic 2',
              type: 'collection',
              handle: 'basic',
              textColor: 'white',
              textBgColor: 'primary',
            },
            // {
            //   name: 'Silk Summer Top',
            //   type: 'product',
            //   handle: 'silk-summer-top',
            //   textColor: 'white',
            //   textBgColor: 'primary',
            // },
          ],
        },
        {
          name: 'basic',
          type: 'collection',
          handle: 'basic',
          textColor: 'white',
          textBgColor: 'primary'
        },
        // {
        //   name: 'Garden',
        //   type: 'collection',
        //   handle: 'garden',
        //   textColor: 'white',
        //   textBgColor: 'primary',
        // },
        // {
        //   name: 'Test',
        //   type: 'collection',
        //   handle: 'test-collection',
        //   textColor: 'black',
        //   textBgColor: 'white',
        // },
        {
          name: 'One product',
          type: 'product',
          handle: 'base-1',
          textColor: 'black',
          textBgColor: 'white'
        },
        {
          name: 'Anchor Bracelet Mens',
          type: 'product',
          handle: 'base-2',
          textColor: 'black',
          textBgColor: 'white'
        },
        // {
        //   name: 'Yellow Sofa',
        //   type: 'product',
        //   handle: 'yellow-sofa',
        //   textColor: 'black',
        //   textBgColor: 'white',
        // },
        // {
        //   name: '7 Shakra Bracelet',
        //   type: 'product',
        //   handle: 'chain-bracelet',
        //   textColor: 'black',
        //   textBgColor: 'white',
        // },
        // {
        //   name: 'White Cotton Shirt',
        //   type: 'product',
        //   handle: 'white-cotton-shirt',
        //   textColor: 'white',
        //   textBgColor: 'primary',
        // },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Women's",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'apparel',
              },
              {
                name: 'basic',
                type: 'collection',
                handle: 'basic',
              },
              {
                name: 'One product',
                type: 'product',
                handle: 'red-sports-tee',
              },
            ],
          },
          {
            name: "Men's",
            type: 'header',
            children: [
              {
                name: 'Test',
                type: 'collection',
                handle: 'test-collection',
              },
              {
                name: 'Garden',
                type: 'collection',
                handle: 'garden',
              },
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'apparel',
              },
              {
                name: 'External links',
                type: 'header',
                children: [
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                ],
              },
            ],
          },
          { name: 'Blog', type: 'blog', handle: 'news' },
        ],
      }),
      footerLinks: [
        {
          name: 'Sobre nós',
          link: '/sobre-nos',
        },
        {
          name: 'Termos do serviço',
          link: '/policy/termsOfService',
        },
        {
          name: 'Politica de privacidade',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Devoluções',
          link: '/policy/refundPolicy',
        },
      ],
      locales: 'pt-PT',
      currency: 'EUR',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
