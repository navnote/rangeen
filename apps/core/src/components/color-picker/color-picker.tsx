type ColorPickerProps = {
  label: string;
  color: string;
  setColor: (color: string) => void;
};

export const ColorPicker = ({ label, color, setColor }: ColorPickerProps) => {
  return (
    <div className="gap flex flex-col items-center justify-center">
      <input
        type="color"
        value={color}
        onChange={({ target: { value } }) => setColor(value)}
        className="h-10 w-10 cursor-pointer rounded-md bg-transparent p-0 focus:outline-none focus:ring-0"
      />
    </div>
  );
};
