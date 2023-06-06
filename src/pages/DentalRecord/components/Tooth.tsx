interface Props {
  position: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Tooth = ({ position, onClick }: Props) => {
  return (
    <button className="flex flex-col items-center" onClick={onClick}>
      <div className="h-10 w-10 border border-black" />
      <span>{position}</span>
    </button>
  );
};
export default Tooth;
