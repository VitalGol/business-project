import Flag from './flag';
import ThemeToggle from './theme-toggle';
import TopMenu from './top-menu';

export default function TopHeader() {
  return (
    <div className="flex justify-between items-center m-auto py-3">
      <div className="flex flex-row  justify-center items-center gap-2">
        <Flag />
        <ThemeToggle />
      </div>
      <TopMenu />
    </div>
  );
}
