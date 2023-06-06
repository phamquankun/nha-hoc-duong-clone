import Button from "@/components/Button";
import Modal from "@/components/Modal";
import RadioButton from "@/components/RadioButton";
import Select from "@/components/Select";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const options = {
  status: [
    { value: "0", label: "Bình thường" },
    { value: "1", label: "Sâu" },
    { value: "2", label: "Trám sâu lại" },
    { value: "3", label: "Trám tốt" },
    { value: "4", label: "Mất do sâu" },
    { value: "5", label: "Mất lí do khác" },
    { value: "6", label: "Bít hố rãnh" },
    { value: "7", label: "Trụ, cầu" },
    { value: "8", label: "Chưa mọc" },
    { value: "9", label: "Loại trừ" },
  ],
  demand: [
    { value: "0", label: "Không" },
    { value: "1", label: "Trám 1 mặt" },
    { value: "2", label: "Trám ≥ 2 mặt" },
    { value: "3", label: "Mão" },
    { value: "4", label: "Veneer" },
    { value: "5", label: "Điều trị tủy" },
    { value: "6", label: "Nhổ răng" },
    { value: "F", label: "Sealants" },
    { value: "P", label: "Trám phòng ngừa" },
  ],
  position: [
    { value: "Nh", label: "Mặt nhai" },
    { value: "N", label: "Mặt ngoài" },
    { value: "T", label: "Mặt trong" },
    { value: "G", label: "Mặt gần" },
    { value: "X", label: "Mặt xa" },
  ],
};
const ToothModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Tình trạng răng số xxx"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">1. Tình trạng răng</h1>
            <div className="flex flex-wrap  gap-4">
              {options.status.map((status) => (
                <RadioButton
                  label={status.label}
                  name="status-group"
                  id={status.value}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-bold">2. Tình vệ sinh răng miệng (OHI-S)</h1>
            <div className="grid grid-cols-2 gap-8">
              <Select
                label="Chỉ số mảng bám (PI)"
                fullWidth
                className="basis-1/2"
              />
              <Select
                label="Chỉ số vôi răng (CI)"
                fullWidth
                className="basis-1/2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-bold">3. Nhu cầu điều trị</h1>
            <div className="grid grid-cols-12 gap-8">
              <Select label="Mặt nhai" fullWidth className="col-span-4" />
              <Select label="Mặt ngoài" fullWidth className="col-span-4" />
              <Select label="Mặt trong" fullWidth className="col-span-4" />
              <Select label="Mặt gần" fullWidth className="col-span-4" />
              <Select label="Mặt xa" fullWidth className="col-span-4" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-6">
            <Button>Lưu</Button>
            <Button onClick={() => setIsOpen(false)}>Huỷ</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ToothModal;
