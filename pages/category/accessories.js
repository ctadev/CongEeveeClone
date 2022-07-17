import Collections from "../../components/Category/Collections";
import { client } from "../../lib/client";

const accessories = ({ accessory }) => {
  return (
    <div>
      <Collections category={accessory} title="accessories" />
    </div>
  );
};

export default accessories;

export const getServerSideProps = async () => {
  const query = '*[_type == "accessories"]';
  const accessory = await client.fetch(query);

  return {
    props: {
      accessory,
    },
  };
};
