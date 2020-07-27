import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "./image";

const Bio = () => {
  const occupations = ["Web Developer", "Content Creator"];
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <div className="border border-gray-500 rounded shadow p-4 mt-5">
      <div className="flex flex-col items-center md:flex-row">
        <Image className="w-20 h-20 flex-shrink-0" />
        <div className="flex flex-col md:w-2/3 md:ml-3">
          <h2 className="md:text-lg lg:text-xl">
            {data.site.siteMetadata.author}
          </h2>
          <ul className="flex text-xs font-thin">
            {occupations.map((occupation, i) => (
              <li className="">
                {occupations.length - 1 === i
                  ? `${occupation}`
                  : `${occupation}/`}
              </li>
            ))}
          </ul>
          <p className="mt-2">
            Junior Web Developerです。JavaとJavaScript(React)に興味があります。
            <br />
            このブログでは、React関連のアウトプットが中心です。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
