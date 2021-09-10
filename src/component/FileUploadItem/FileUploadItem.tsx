// import { UploadFile } from "antd/lib/upload/interface";
import { Select, Checkbox, Divider, Form, Space } from "antd";
import "./FileUploadItem.less";

const { Option } = Select;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  // file: UploadFile;
  // pages?: number;
}

const SINGLE_SIDED_OPTION = {
  value: "singleSided",
  label: "Simple faz",
};

const DOUBLE_SIDED_OPTION = {
  value: "doubleSided",
  label: "Doble faz",
};

const SELECT_OPTIONS = [SINGLE_SIDED_OPTION, DOUBLE_SIDED_OPTION];

// eslint-disable-next-line no-empty-pattern
const FileUploadItem = ({}: Props) => (
  <>
    <Divider plain>fileName - Pages: 50</Divider>
    <Space>
      <Form.Item className="FileUploadItem__FormItem" required>
        <Select defaultValue={SINGLE_SIDED_OPTION.value} onChange={() => {}}>
          {SELECT_OPTIONS.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item className="FileUploadItem__FormItem" required>
        <Checkbox onChange={() => {}}>Anillar</Checkbox>
      </Form.Item>
    </Space>
  </>
);

export default FileUploadItem;
