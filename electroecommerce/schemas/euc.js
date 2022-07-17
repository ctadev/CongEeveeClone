export default {
  name: "euc",
  title: "EUC",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "mainImage",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "sales",
      title: "Sales",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      title: "Brand",
      name: "brand",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Gotway", value: "gotway" },
          { title: "InMotion", value: "inmotion" },
          { title: "King Song", value: "kingsong" },
          { title: "Veteran Sherman", value: "veteran" },
        ],
      },
    },
    {
      title: "Ratings",
      name: "ratings",
      type: "number",
    },
    {
      title: "Reviews",
      name: "reviews",
      type: "number",
    },
  ],
};
