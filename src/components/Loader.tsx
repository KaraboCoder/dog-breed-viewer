import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => (
  <div className="flex flex-col items-center justify-center p-8 space-y-4">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
    <p className="text-sm text-muted-foreground font-medium">{message}</p>
  </div>
);

export default Loader;
