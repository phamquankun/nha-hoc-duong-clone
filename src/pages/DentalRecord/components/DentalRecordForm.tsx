import Button from "@/components/Button";
import Input from "@/components/Input";
import Table from "@/components/Table";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Odontogram from "./Odontogram";
import Select from "@/components/Select";

interface Props {}

const columns = [
  {
    title: "STT",
    dataIndex: "stt",
  },
  {
    title: "Phiếu khám",
    dataIndex: "pk",
  },
  {
    title: "Nơi khám",
    dataIndex: "nk",
  },
  {
    title: "Bác sĩ khám",
    dataIndex: "bsk",
  },
  {
    title: "Chẩn đoán",
    dataIndex: "cd",
  },
];

const data = [
  {
    stt: 1,
    pk: 21,
    nk: "hcm",
    bsk: "bs kkk",
    cd: "sida",
  },
  {
    stt: 2,
    pk: 1,
    nk: "ha noi",
    bsk: "bs cuong",
    cd: "cancer",
  },
];

const DentalRecordForm = (props: Props) => {
  return (
    <div className="flex  flex-col gap-8 py-16">
      <div className="grid grid-cols-4 gap-10">
        <Input label="Phiếu khám" />
        <Input label="Ngày khám" />
        <Input label="Nơi khám" />
        <Input label="Bác sĩ khám" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold"> I. Thông tin bệnh nhân</h1>
        <div className="grid grid-cols-4 grid-rows-4 gap-x-8 gap-y-2">
          <div className="relative">
            <Input
              label="Mã bệnh nhân"
              addOnAfter={
                <button onClick={() => alert("s")} className="">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
              }
            />
          </div>

          <Input label="Họ và tên" />

          <Input label="Ngày sinh" type="date" />

          <Input label="Giới tính" />

          <div className="col-span-2 ">
            <Input label="Trường học" fullWidth />
          </div>

          <Input label="Lớp" />

          <Input label="Vùng địa dư" />

          <Input label="Quốc tịch" />

          <Input label="Dân tọc" />

          <Input label="Người giám hộ" />

          <Input label="SDT" />

          <Input label="Số CCCD/ Mã định danh công dân" />
          <Input label="Ngày cấp" />
          <Input label="Nơi cấp" />
          <Input label="Mã thẻ BHYT" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold"> II. Tiền sử bệnh</h1>
        <div className="grid grid-cols-4 gap-10"></div>
        <div className="grid grid-cols-4 gap-10"></div>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-4">
            <Input label="Ghi chú" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold"> II. Quá trình khám bệnh</h1>
        <div className="grid grid-cols-4 place-items-center gap-10">
          <Input label="Từ ngày" type="date" />
          <Input label="Đến ngày" type="date" />
          <div className="place-self-end justify-self-start">
            <Button>Tìm kiếm</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-4">
            <Input label="Ghi chú" />
          </div>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>

      <h1 className="text-lg font-bold">1. Tình trạng răng</h1>
      <Odontogram />

      <h1 className="text-lg font-bold">2. Điều trị</h1>
      <div className="grid grid-cols-4 gap-10">
        <Select label="Nhóm dịch vụ" />
        <Select label="Dịch vụ" />
        <Input label="Bác sĩ thực hiện" />
        <div className=" self-end">
          <Button>Thêm</Button>
        </div>
      </div>
    </div>
  );
};
export default DentalRecordForm;
