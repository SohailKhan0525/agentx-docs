import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function NotFound():React.JSX.Element {
  return <Layout title="Page not found"><main className="agentx404"><div><span className="agentx404Code">404</span><h1>This route does not exist.</h1><p>The page may have moved. Head back to the documentation and continue from there.</p><Link className="agentx404Button" to="/docs/intro">Open documentation →</Link></div></main></Layout>;
}
