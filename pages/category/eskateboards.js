import Collections from "../../components/Category/Collections";
import { client } from "../../lib/client";

const eskateboards = ({ skateboard }) => {
  return (
    <div>
      <Collections category={skateboard} title="eskateboards" />
    </div>
  );
};

export default eskateboards;

export const getServerSideProps = async () => {
  const query = '*[_type == "skateboard"]';
  const skateboard = await client.fetch(query);

  return {
    props: {
      skateboard,
    },
  };
};
