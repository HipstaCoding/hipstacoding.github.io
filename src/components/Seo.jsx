import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo() {
  const { site } = useStaticQuery(query);

  const { title, description, siteUrl, image, keywords } = site.siteMetadata;

  return (
    <Helmet>
      <html lang="ru" prefix="og: https://ogp.me/ns#" />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta name="title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="keywords" content={keywords.join(" ")} />
      <meta property="twitter:card" content="summary_large_image"></meta>
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
        keywords
      }
    }
  }
`;
