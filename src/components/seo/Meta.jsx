const { default: Head } = require("next/head");

const getTitle = (title) => `${title} | Womazing`;

const Meta = ({ title, description }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/nav/logo.svg" />
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
    </>
  );
};
export default Meta;
