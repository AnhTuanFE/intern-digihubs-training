import clsx from "clsx";
import styles from "./TypicalProduct.module.css";
function TypicalProduct() {
  return (
    <div>
      <div className={clsx(styles.wrap_typical_products)}>
        <div className={clsx(styles.typical_products)}>
          <div className={clsx(styles.typical_products_image_content)}>
            <div className={clsx(styles.wrap_typical_products_image)}>
              <img
                className={clsx(styles.typical_products_image)}
                src="./images/slider.jpg"
                alt="typical products"
              />
            </div>
            <div className={clsx(styles.typical_products_content)}>
              <div className={clsx(styles.typical_products_content_info)}>
                <h1 className={clsx(styles.typical_products_content_tittle)}>
                  Great Digital Product Agency since 2016
                </h1>
                <p className={clsx(styles.typical_products_content_main)}>
                  Our Business Plan is a written document describing a company's
                  core business activites, Objectives, and how it plans to
                  achieve its goals. Our goal is to provide our client high
                  quality Product with modern idea accordingly their budgets and
                  according thir reuirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypicalProduct;
