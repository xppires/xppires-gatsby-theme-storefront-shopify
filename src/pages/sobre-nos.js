import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import { Helmet } from 'react-helmet';
import Layout from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Layout';


const AboutPage = props => {
    // const { title, body } = props.data.pages.nodes[0];
    const title = props.data.sobreNos.frontmatter.title;
    const body = props.data.sobreNos.html
    const { storeName } = props.data.store.siteMetadata.gatsbyStorefrontConfig;
    return (
        <Layout>
            <Flex flexWrap="wrap" px={2} pt={3} mx="auto" style={{ maxWidth: 1300 }}>
                <Helmet title={title} titleTemplate={`%s — ${storeName}`} defer={false}>
                    <meta name="description" content={title} />
                </Helmet>
                <Heading as="h1" fontSize={[30, 36, 42]} my={3}>
                    {title}
                </Heading>
                <Box dangerouslySetInnerHTML={{ __html: body }}></Box>
            </Flex>
        </Layout>
    );
};



export const aboutPageQuery = graphql`
  query aboutPageQuery {
    sobreNos: markdownRemark(frontmatter: {title: {eq: "Sobre Nós"}}) {
        frontmatter {
        title
        }
        html
    }
    store: site {
      siteMetadata {
        gatsbyStorefrontConfig {
          storeName
        }
      }
    }
  }
`;

export default AboutPage;
