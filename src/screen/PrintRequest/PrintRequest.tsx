import { Form, Input, Button, Upload, Modal, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { FileUploadItem } from "@component";
import "./PrintRequest.less";
import { useState } from "react";
import {
  ShowUploadListInterface,
  UploadChangeParam,
} from "antd/lib/upload/interface";
import { FormFile, mapAntFilesToFormFiles } from "@util";
import { createPrintRequest, PrintRequestEntity } from "@service";
import { useHistory } from "react-router-dom";
import { routePath } from "@constant";

const { Dragger } = Upload;
const { TextArea } = Input;
const { confirm } = Modal;

const UPLOAD_LIST_OPTIONS: ShowUploadListInterface = {
  showPreviewIcon: true,
  showDownloadIcon: false,
};
// TODO move this delcaration to a better place
type PrintRequestForm = PrintRequestEntity & {
  upload: File[];
};
const PrintRequest = () => {
  const [form] = Form.useForm<PrintRequestForm>();
  const [files, setFiles] = useState<FormFile[]>([]);
  const history = useHistory();

  const onDraggerChanged = async (info: UploadChangeParam) => {
    const mappedFiles = await mapAntFilesToFormFiles(info.fileList);
    setFiles(mappedFiles);
  };
  const updateFile = (fileUpdated: FormFile) => {
    setFiles(
      files.map((file) => (file.id === fileUpdated.id ? fileUpdated : file))
    );
  };

  const uploadPrintRequest = async (printRequestValues: PrintRequestForm) => {
    const { upload, ...fileRequestEntity } = printRequestValues;
    try {
      await createPrintRequest(fileRequestEntity, files);
      message.success("Pedido de impresion realizado!");
      history.push(routePath.HOME);
    } catch (e) {
      message.error(
        "Algo salio mal! intentalo nuevamente o comunicate conmigo"
      );
    }
  };

  const showConfirmUpload = (printRequestValues: PrintRequestForm) => {
    confirm({
      title: "Confirmar Pedido de impresion",
      okText: "Aceptar",
      cancelText: "Cancelar",
      onOk: () => uploadPrintRequest(printRequestValues),
    });
  };

  const showInvalidUpload = () => {
    message.error("Camplos invalidos o faltantes");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={showConfirmUpload}
      onFinishFailed={showInvalidUpload}
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
        name="phoneNumber"
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
        <Form.Item key={file.id}>
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
          beforeUpload={() => false}
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
