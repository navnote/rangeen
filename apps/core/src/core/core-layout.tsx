import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/navigation/navigation';

export const CoreLayout = () => {
  return (
    <div className="bg-background text-foreground flex flex-col">
      <Navigation />
      <Outlet />
    </div>
  );
};
