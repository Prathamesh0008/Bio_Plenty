// MetaTags.js
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MetaTags = ({
  title = "Bioplentypeps",
  canonicalUrl = "https://www.bioplentypeps.com/",
  description = "Bio Plenty™ creates highly purified peptides, proteins, and amino acid derivatives for research. With advanced synthesis and strict quality control, ensure 99% purity.",
  keywords = "Peptides, Peptide capsules, Peptide blends, IGF-1 proteins, Cosmetic peptides, High-quality peptides, Research peptides, Pharmaceutical peptides, Peptide formulation services, Bulk API peptides, Peptide manufacturing, Peptide suppliers, Bioplentypeps, Biotechnology company, Life sciences company, Pharmaceutical research company, Protein synthesis services, Peptide expertise, Leading peptide supplier, Innovative peptide solutions, High-quality peptide products"
}) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="canonical" href={canonicalUrl} />
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
  </Helmet>
);

MetaTags.propTypes = {
  title: PropTypes.string,
  canonicalUrl: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaTags;
