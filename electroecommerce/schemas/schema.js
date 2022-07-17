import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import euc from "./euc";
import skateboard from "./skateboard";
import onewheel from "./onewheel";
import scooter from "./scooter";
import accessories from "./accessories";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([euc,scooter,skateboard,onewheel,accessories]),
});
