import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const about = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="px-8 mt-5 max-w-screen-lg">
        <h3 className="mt-4 text-xl">このブログについて</h3>
        <p className="text-lg mt-4">
          React、React Framework(Gatsby.js/Next.js)、React
          Libraryについての情報をアウトプットするブログです。
        </p>
        <h3 className="mt-4 text-xl">このブログで使用している技術</h3>
        <ul>
          <li>
            <a href="https://www.gatsbyjs.org/" className="hover:text-gray-500">
              Gatsby.js
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/"
              className="href hover:text-gray-500"
            >
              Tailwind CSS
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default about;
