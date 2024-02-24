import type { FC } from 'react';

type Repo = {
  name: string;
  stargazers_count: number;
};

const Index: FC<Repo> = ({ name, stargazers_count }) => {
  return (
    <main>
      <p>{name}</p>
      <p>{stargazers_count}</p>
    </main>
  );
};

export const getServerSideProps = async () => {
  console.log('Fetching data from Github');
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo: Repo = await res.json();
  // Pass data to the page via props
  return { props: repo };
};

export default Index;
