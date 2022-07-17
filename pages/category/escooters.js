import Collections from "../../components/Category/Collections";
import { client } from "../../lib/client";

const escooters = ({ scooter }) => {
  return (
    <div>
      <Collections category={scooter} title="escooters" />
    </div>
  );
};

export default escooters;

export const getServerSideProps = async () => {
  const query = '*[_type == "scooter"]';
  const scooter = await client.fetch(query);

  return {
    props: {
      scooter,
    },
  };
};
