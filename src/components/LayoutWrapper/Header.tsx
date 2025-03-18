import CommonContainer from 'src/components/box/CommonContainer';
import ThemeButton from 'src/components/buttons/ThemeButton';

export default function Header() {
  return (
    <div className="fixed z-[1205] h-[55px] w-full border-b-black-350 bg-grey-50">
      <CommonContainer className="flex h-full items-center justify-between">
        <ThemeButton />
      </CommonContainer>
    </div>
  );
}
