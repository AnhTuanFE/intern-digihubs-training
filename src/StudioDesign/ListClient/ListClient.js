import clsx from "clsx";
import styles from "./ListClient.module.css";
import { Menu, Layout, Button } from "antd";
function ListClient() {
  return (
    <div>
      <div>
        <Layout>
          <Menu className={clsx(styles.menu)}>
            <div className={clsx(styles.menu_item_client)}>
              <div className={clsx(styles.wrap_introduce_client)}>
                <h1 className={clsx(styles.introduce_client_title)}>
                  Our Client
                </h1>
                <p className={clsx(styles.introduce_client_content)}>
                  Several selected clients, who already believe in our service.
                </p>
              </div>
            </div>
            <Menu.Item className={clsx(styles.menu_item)}>
              <div className={clsx(styles.wrap_logo)}>
                <img
                  src="./images/google.png"
                  alt="logo"
                  className={clsx(styles.logo)}
                />
              </div>
            </Menu.Item>
            <Menu.Item className={clsx(styles.menu_item)}>
              <div className={clsx(styles.wrap_logo)}>
                <img
                  src="./images/airbnb.png"
                  alt="logo"
                  className={clsx(styles.logo)}
                />
              </div>
            </Menu.Item>
            <Menu.Item className={clsx(styles.menu_item)}>
              <div className={clsx(styles.wrap_logo)}>
                <img
                  src="./images/uber1.png"
                  alt="logo"
                  className={clsx(styles.logo)}
                />
              </div>
            </Menu.Item>
            <Menu.Item className={clsx(styles.menu_item)}>
              <div className={clsx(styles.wrap_logo)}>
                <img
                  src="./images/amazon.png"
                  alt="logo"
                  className={clsx(styles.logo)}
                />
              </div>
            </Menu.Item>
          </Menu>
        </Layout>
      </div>
    </div>
  );
}

export default ListClient;
