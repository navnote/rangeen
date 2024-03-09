import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/navigation/navigation';

export const CoreLayout = () => {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <Navigation />
      <Outlet />
    </div>
  );
};
