import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const about = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 px-5">
          <h3 className="mt-4 text-xl">このブログについて</h3>
          <p className="text-lg mt-4">
            React、React Framework(Gatsby.js/Next.js)、React
            Libraryについての情報をアウトプットするブログです。
          </p>
        </div>
        <div className="md:w-1/2 px-5">
          <h3 className="mt-4 text-xl">このブログで使用している技術</h3>
          <ul className="mt-4">
            <li>
              <a
                href="https://www.gatsbyjs.org/"
                className="hover:text-gray-500"
              >
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
      </div>
    </Layout>
  );
};

export default about;
