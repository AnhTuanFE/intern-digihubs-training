// function AddProduct() {
//   return (
//     <div>
//       <h1>Trang thêm sản phẩm</h1>
//     </div>
//   );
// }

// export default AddProduct;

import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { useState } from "react";
import "./CSSComonent/AddProduct.css";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const AddProduct = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <div>
      <div className="wrapper">
        <h4>ADD PRODUCTS</h4>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          // disabled={componentDisabled}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Name Product">
            <Input />
          </Form.Item>
          <Form.Item label="Describe">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Cost">
            <InputNumber />
          </Form.Item>
          {/* <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item> */}
          {/* <Form.Item label="Image Products" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item> */}
          <Form.Item label="Link Image">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button>Add Product</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
// export default () => <AddProduct />;
export default AddProduct;
