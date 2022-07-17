import React from "react";
import Collections from "../../components/Category/Collections";
import { client } from "../../lib/client";

const eucs = ({ euc }) => {
  return (
    <div>
      <Collections category={euc} title="eucs" />
    </div>
  );
};

export default eucs;

export const getServerSideProps = async () => {
  const query = '*[_type == "euc"]';
  const euc = await client.fetch(query);

  return {
    props: {
      euc,
    },
  };
};
