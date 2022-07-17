import { useState } from "react";
import Image from "next/image";
import s from "./collections.module.scss";
import { urlFor } from "../../lib/client";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ReactPaginate from "react-paginate";

const Collections = ({ category, title }) => {
  const [products, setProducts] = useState(category);
  const [pageNumber, setPageNumber] = useState(0);

  const showProducts = 15;
  const paginateProducts = pageNumber * showProducts;

  const pageCount = Math.ceil(products.length / showProducts);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = products
    .slice(paginateProducts, paginateProducts + showProducts)
    .map((product) => {});

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const stars = {
    star: function (rating) {
      const starPercent = (rating / 5) * 100;
      const starRounded = `${Math.round(starPercent / 10) * 10}%`;
      return starRounded;
    },
  };

  return (
    <main className={s.collections}>
      <div className={s.inner_container}>
        <section className={s.title}>
          <h1>{title}</h1>
          <aside>
            <div className={s.filter}>
              <p>Filter by</p>
              <select name="filter" id="filter">
                <option value="all">All</option>
                <option value="gotway">Gotway</option>
                <option value="king song">King Song</option>
                <option value="veteran sherman">Veteran Sherman</option>
              </select>
            </div>

            <div className={s.sort}>
              <p>Sort by</p>
              <select name="sort" id="sort">
                <option value="best selling">Best selling</option>
                <option value="a-z">Alphabeth, A-Z</option>
                <option value="z-a">Alphabeth, Z-A</option>
                <option value="low">Price, Low to High</option>
                <option value="high">Price, High to Low</option>
                <option value="old">Date, Old to New</option>
                <option value="new">Date, New to Old</option>
              </select>
            </div>
          </aside>
        </section>

        <section className={s.products_container}>
          {products
            .slice(paginateProducts, paginateProducts + showProducts)
            ?.map((categories) => (
              <Link
                href={`/category/${title}/${categories.slug.current}`}
                key={categories._id}
              >
                <div className={s.product}>
                  <div className={s.image_container}>
                    <Image
                      src={urlFor(categories.mainImage[0]).url()}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      className={s.image}
                    />
                  </div>
                  <h4>{categories.name}</h4>
                  {categories.ratings && (
                    <div className={s.rating}>
                      <div className={s.star_container}>
                        <div className={s.outer_star}>
                          <StarOutlineIcon className={s.icon} />
                          <StarOutlineIcon className={s.icon} />
                          <StarOutlineIcon className={s.icon} />
                          <StarOutlineIcon className={s.icon} />
                          <StarOutlineIcon className={s.icon} />
                          <div
                            className={s.inner_star}
                            style={{
                              width: `${stars.star(categories.ratings)}`,
                            }}
                          >
                            <StarIcon className={s.icon} />
                            <StarIcon className={s.icon} />
                            <StarIcon className={s.icon} />
                            <StarIcon className={s.icon} />
                            <StarIcon className={s.icon} />
                          </div>
                        </div>
                      </div>
                      <p className={s.reviews_text}>
                        &nbsp;{categories.reviews} reviews
                      </p>
                    </div>
                  )}
                  {categories.sales ? (
                    <div className={s.price_container}>
                      <p className={s.strike_through}>
                        {formatter.format(categories.price)}
                      </p>
                      <p>{formatter.format(categories.sales)}</p>
                    </div>
                  ) : (
                    <div className={s.price_container}>
                      <p>{formatter.format(categories.price)}</p>
                    </div>
                  )}
                  <h5>View</h5>
                  {categories.sales && <div className={s.sales}>Sale</div>}
                </div>
              </Link>
            ))}
        </section>

        <section className={s.pagination}>
          {products.length > 15 && (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={s.paginationBtns}
              previousClassName={s.previousBtn}
              nextLinkClassName={s.nextBtn}
              disabledClassName={s.paginationDisabled}
              activeClassName={s.paginationActive}
            />
          )}
        </section>
      </div>
    </main>
  );
};

export default Collections;
