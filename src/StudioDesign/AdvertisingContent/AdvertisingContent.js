import clsx from "clsx";
import styles from "./AdvertisingContent.module.css";
import { Button } from "antd";
function AdvertisingContent() {
  return (
    <div>
      <div className={clsx(styles.wrap_introduction)}>
        <div className={clsx(styles.introduction)}>
          <div style={{ paddingLeft: "40px" }}>
            <h1 className={clsx(styles.introduction_title)}>
              Digital Product Agency
            </h1>
            <p className={clsx(styles.introduction_content)}>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <Button size="large" className={clsx(styles.introduction_button)}>
              Contact Now
            </Button>
          </div>
          <div className={clsx(styles.wrap_rectangle)}>
            <img
              src="./images/hinhchunhat.png"
              alt="hinhchunhat"
              className={clsx(styles.rectangle)}
            />
          </div>
        </div>
        <div className={clsx(styles.wrap_slider)}>
          <img
            src="./images/slider.jpg"
            alt="slider"
            className={clsx(styles.slider)}
          />
        </div>
      </div>
    </div>
  );
}

export default AdvertisingContent;
