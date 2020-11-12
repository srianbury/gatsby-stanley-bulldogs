function getSiteText(data, key) {
  if (
    data &&
    data.allContentfulSiteText &&
    data.allContentfulSiteText.edges &&
    data &&
    data.allContentfulSiteText &&
    data.allContentfulSiteText.edges[0] &&
    data.allContentfulSiteText.edges[0].node
  ) {
    return data.allContentfulSiteText.edges[0].node[key];
  } else {
    return "";
  }
}

export { getSiteText };
