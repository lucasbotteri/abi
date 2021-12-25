import { Select, Checkbox, Divider, Form, Space } from "antd";
import { FormFile, isSideType, SideType } from "@util";
import "./FileUploadItem.less";

const { Option } = Select;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  file: FormFile;
  onRingedChanged: (isRinged: boolean) => void;
  onSideTypeChanged: (optionSelected: SideType) => void;
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

const FileUploadItem = ({
  file,
  onRingedChanged,
  onSideTypeChanged,
}: Props) => {
  const { pages, ringed, sideType, name } = file;
  const fileNameText = name || "sin nombre";
  const pagesAmount = pages || "cantidad desconocida";

  const dividerTitle = `Archivo ${fileNameText} - Paginas ${pagesAmount} `;

  const onSafeSideTypeChanged = (value: string) => {
    const castedValue: SideType = isSideType(value) ? value : "singleSided";
    onSideTypeChanged(castedValue);
  };

  return (
    <>
      <Divider plain>{dividerTitle}</Divider>
      <Space>
        <Form.Item className="FileUploadItem__FormItem" required>
          <Select
            defaultValue={SINGLE_SIDED_OPTION.value}
            value={sideType}
            onChange={(value) => {
              onSafeSideTypeChanged(value);
            }}
          >
            {SELECT_OPTIONS.map((option) => (
              <Option id={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item className="FileUploadItem__FormItem" required>
          <Checkbox
            onChange={() => {
              onRingedChanged(!ringed);
            }}
            checked={ringed}
          >
            Anillar
          </Checkbox>
        </Form.Item>
      </Space>
    </>
  );
};

export default FileUploadItem;
