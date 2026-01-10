import ThemeButton from 'src/components/buttons/ThemeButton';

export default function Header() {
  return (
    <div className="border-b-black-350 bg-grey-50 fixed z-1205 h-[55px] w-full">
      <div className="container flex h-full items-center justify-between">
        <ThemeButton />
      </div>
    </div>
  );
}
