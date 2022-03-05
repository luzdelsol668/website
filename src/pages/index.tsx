import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useEffect } from "react";

function HomepageHeader() {
  return (
    <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="tracking-tight font-extrabold text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Manage your server</span>{" "}
          <span className="block">without fighting the terminal</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
          Server control panel based on Docker.
        </p>
        <div className="mt-12">
          <Link
            className="flex-inline items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white hover:text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <TailwindDarkMode />
      <HomepageHeader />
      <main style={{ height: 400 }}>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}

function TailwindDarkMode() {
  const { isDarkTheme } = useColorMode();
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
  return null;
}