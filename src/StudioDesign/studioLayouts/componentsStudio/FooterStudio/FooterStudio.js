import clsx from "clsx";
import styles from "./FooterStudio.module.css";
import { Col, Divider, Row } from "antd";
function FooterStudio() {
  return (
    <div>
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.footer)}>
          <div className={clsx(styles.footer_item)}>
            <h1 className={clsx(styles.title1)}>
              <span className={clsx(styles.title_span)}>A+</span> Studio
            </h1>
            <p className={clsx(styles.content_title1)}>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <div>icon</div>
          </div>
          <div className={clsx(styles.footer_item1)}>
            <Row>
              <Col className="gutter-row" span={6}>
                <div className={clsx(styles.row_item)}>
                  <h1 className={clsx(styles.title)}>What we do</h1>
                  <p>web Design</p>
                  <p>web Design</p>
                  <p>web Design</p>
                  <p>web Design</p>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className={clsx(styles.row_item)}>
                  <h1 className={clsx(styles.title)}>What we do</h1>
                  <p>web Design</p>
                  <p>web Design</p>
                  <p>web Design</p>
                  <p>web Design</p>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className={clsx(styles.row_item)}>
                  <h1 className={clsx(styles.title)}>What we do</h1>
                  <p>web Design</p>
                  <p>web Design</p>
                  <p>web Design</p>
                  <p>web Design</p>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className={clsx(styles.row_item)}>
                  <h1 className={clsx(styles.title)}>What we do</h1>
                  <p>web Design</p>
                  <p>web Design</p>
                  <p>web Design</p>
                  <p>web Design</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterStudio;
