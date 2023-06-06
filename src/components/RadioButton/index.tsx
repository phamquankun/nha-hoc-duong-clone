interface Props {
  id?: string;
  label?: string;
  name: string;
}
const RadioButton = ({ id, label, name }: Props) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={name}
        type="radio"
        defaultChecked={false}
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label
        htmlFor={id}
        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
    </div>
  );
};
export default RadioButton;
