import React from 'react';

import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: "",
    description: (
      <>
        Add the Konami Code as an easter egg to your project in 5 minutes! Works with keyboard or touch events and can be customized as needed.
      </>
    ),
  },
  {
    title: 'Small & Framework Agnostic',
    Svg: "",
    description: (
      <>
        Konami JS has a tiny footprint (6kb, uncompressed) works beautifully with everything form vanilla JavaScript to Vue, React, Angular and Svelte.
      </>
    ),
  },
  {
    title: 'Trusted for 10+ Years',
    Svg: "",
    description: (
      <>
        What do Marvel, Newsweek, HuffPost and Tesla all have in common? They've all put their trust in Konami JS for their easter-egg needs!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
