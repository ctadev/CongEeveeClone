import Collections from "../../components/Category/Collections";
import { client } from "../../lib/client";

const onewheels = ({ onewheels }) => {
  return (
    <div>
      <Collections category={onewheels} title="onewheels" />
    </div>
  );
};

export default onewheels;

export const getServerSideProps = async () => {
  const query = '*[_type == "onewheel"]';
  const onewheels = await client.fetch(query);

  return {
    props: {
      onewheels,
    },
  };
};
