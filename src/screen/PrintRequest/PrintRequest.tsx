import { Form, Input, Button, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { FileUploadItem } from "@component";
import "./PrintRequest.less";
import { useState } from "react";
import {
  ShowUploadListInterface,
  UploadChangeParam,
} from "antd/lib/upload/interface";
import { FormFile, mapAntFilesToFormFiles } from "@util";

const { Dragger } = Upload;
const { TextArea } = Input;

const UPLOAD_LIST_OPTIONS: ShowUploadListInterface = {
  showPreviewIcon: true,
  showDownloadIcon: false,
};

const PrintRequest = () => {
  const [form] = Form.useForm();
  const [files, setFiles] = useState<FormFile[]>([]);

  const onDraggerChanged = async (info: UploadChangeParam) => {
    const mappedFiles = await mapAntFilesToFormFiles(info.fileList);
    setFiles(mappedFiles);
  };

  const updateFile = (fileUpdated: FormFile) => {
    setFiles(
      files.map((file) => (file.id === fileUpdated.id ? fileUpdated : file))
    );
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={() => {
        console.log("hola");
      }}
      onFinishFailed={() => {
        console.log("hola failed");
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

      {files.map((file) => (
        <Form.Item id={file.id}>
          <FileUploadItem
            file={file}
            onRingedChanged={(ringed) => updateFile({ ...file, ringed })}
            onSideTypeChanged={(sideType) => updateFile({ ...file, sideType })}
          />
        </Form.Item>
      ))}

      <Form.Item
        name="upload"
        label="Subir archivo"
        rules={[{ required: true, message: "Por favor suba su archivo!" }]}
      >
        <Dragger
          name="file"
          showUploadList={UPLOAD_LIST_OPTIONS}
          onChange={onDraggerChanged}
        >
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
