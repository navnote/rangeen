type ColorPickerProps = {
  label: string;
  color: string;
  setColor: (color: string) => void;
};

export const ColorPicker = ({ label, color, setColor }: ColorPickerProps) => {
  return (
    <div className="flex flex-col gap justify-center items-center">
      <input
        type="color"
        value={color}
        onChange={({ target: { value } }) => setColor(value)}
        className="w-10 h-10 rounded-md bg-transparent cursor-pointer p-0 focus:ring-0 focus:outline-none"
      />
    </div>
  );
};
