import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import GitHubButton from 'react-github-btn'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle margin">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin--xs"
            to="/docs/intro">
            Get Started!
          </Link>

          {/* <Link
            className="button button--secondary button--lg margin--xs"
            to="/docs/intro">

            View on GitHub
          </Link> */}

        </div>
        
        <div className={styles.badges}>
          <GitHubButton href="https://github.com/georgemandis/konami-js" data-size="large" data-show-count="true" aria-label="Star georgemandis/konami-js on GitHub">Star</GitHubButton>
          &nbsp;
          <GitHubButton href="https://github.com/sponsors/georgemandis" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @georgemandis on GitHub">Sponsor</GitHubButton>
        </div>
        <div className={styles.badges}>
          <a href="https://npmjs.org/package/konami"
          ><img src="https://img.shields.io/npm/v/konami.svg" alt="Version"
            /></a>{" "}
          <a href="https://npmjs.org/package/konami"
          ><img
              src="https://img.shields.io/npm/dw/konami.svg"
              alt="Downloads/week"
            /></a>{" "}
          <a
            href="https://github.com/georgemandis/konami-js/blob/master/package.json"
          ><img src="https://img.shields.io/npm/l/konami.svg" alt="License"
            /></a>

        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
