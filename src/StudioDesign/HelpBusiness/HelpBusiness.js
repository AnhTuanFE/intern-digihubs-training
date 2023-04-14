import clsx from "clsx";
import styles from "./HelpBusiness.module.css";
import { Space } from "antd";
function HelpBusiness() {
  return (
    <div>
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.question)}>
          <h1 className={clsx(styles.question_title)}>
            How can we help your Business?
          </h1>
          <p className={clsx(styles.question_content)}>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <div className={clsx(styles.field)}>
          <div className={clsx(styles.wrap_row)}>
            <div className={clsx(styles.field_row, styles.field_row_temp1)}>
              <div className={clsx(styles.field_row_child)}>
                <div className={clsx(styles.field_row_child1)}>
                  <div className={clsx(styles.field_row_content)}>
                    <div className={clsx(styles.wrap_icon)}>
                      <img
                        className={clsx(styles.icon)}
                        src="./images/iconSearch.png "
                        alt=" icon"
                      />
                    </div>
                    <h1 className={clsx(styles.field_row_content_title)}>
                      Business Idea Planning
                    </h1>
                    <p className={clsx(styles.content_field)}>
                      We present you a proposal and discuss niffty-gritty like
                    </p>
                  </div>
                </div>
              </div>
              <div className={clsx(styles.field_row_child)}>
                <div className={clsx(styles.field_row_child1)}>
                  <div className={clsx(styles.field_row_content)}>
                    <div className={clsx(styles.wrap_icon)}>
                      <img
                        className={clsx(styles.icon)}
                        src="./images/iconSearch.png "
                        alt=" icon"
                      />
                    </div>
                    <h1 className={clsx(styles.field_row_content_title)}>
                      Development Website and App
                    </h1>
                    <p className={clsx(styles.content_field)}>
                      Communication protocols apart from engagement models
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(styles.field_row, styles.field_row_temp2)}>
              <div className={clsx(styles.field_row_child)}>
                <div className={clsx(styles.field_row_child1)}>
                  <div className={clsx(styles.field_row_content)}>
                    <div className={clsx(styles.wrap_icon)}>
                      <img
                        className={clsx(styles.icon)}
                        src="./images/iconSearch.png "
                        alt=" icon"
                      />
                    </div>
                    <h1 className={clsx(styles.field_row_content_title)}>
                      Financial Planning System
                    </h1>
                    <p className={clsx(styles.content_field)}>
                      Protocols apart from aengage models, pricing billing
                    </p>
                  </div>
                </div>
              </div>
              <div className={clsx(styles.field_row_child)}>
                <div className={clsx(styles.field_row_child1)}>
                  <div className={clsx(styles.field_row_content)}>
                    <div className={clsx(styles.wrap_icon)}>
                      <img
                        className={clsx(styles.icon)}
                        src="./images/iconSearch.png "
                        alt=" icon"
                      />
                    </div>
                    <h1 className={clsx(styles.field_row_content_title)}>
                      Market Analysis Project
                    </h1>
                    <p className={clsx(styles.content_field)}>
                      Protocols apart from aengage models, pricing billing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpBusiness;
