export default {
  name: "scooter",
  title: "Scooter",
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
