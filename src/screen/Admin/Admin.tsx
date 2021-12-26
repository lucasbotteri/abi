import { mapPrintRequestEntityToRow } from "@util";
import { useGetPrintRequests } from "@service";
import { Table } from "antd";

const COLUMNS = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Numero de telefono",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Cantidad de archivos",
    dataIndex: "fileCount",
    key: "fileCount",
  },
];

const Admin = () => {
  const [printRequests, loading] = useGetPrintRequests();
  const printRequestsRows =
    printRequests?.map(mapPrintRequestEntityToRow) || [];

  return loading ? (
    <>loading...</>
  ) : (
    <Table columns={COLUMNS} dataSource={printRequestsRows} />
  );
};

export default Admin;
