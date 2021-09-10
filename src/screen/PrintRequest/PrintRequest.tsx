import { Form, Input, Button, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { FileUploadItem } from "@component";
import "./PrintRequest.less";

const { Dragger } = Upload;
const { TextArea } = Input;

const PrintRequest = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={() => {
        console.log("hola");
      }}
      onFinishFailed={() => {
        console.log("hola");
      }}
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: "Por favor ingrese su nombre!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Telefono"
        name="password"
        rules={[{ required: true, message: "Por favor ingrese su telefono!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Direccion"
        name="address"
        rules={[{ required: true, message: "Por favor ingrese su direccion!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Observaciones" name="observations">
        <TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
      </Form.Item>

      <Form.Item>
        <FileUploadItem />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Subir archivo"
        rules={[{ required: true, message: "Por favor suba su archivo!" }]}
      >
        <Dragger name="file">
          <div className="PrintRequest__dragArea">
            <p>
              <InboxOutlined />
            </p>
            <p>Clickee o arrastre para cargar archivos</p>
          </div>
        </Dragger>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PrintRequest;
