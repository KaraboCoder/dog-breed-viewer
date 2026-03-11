import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex items-center p-4 space-x-3 text-destructive border border-destructive/20 bg-destructive/5 rounded-lg">
    <AlertCircle className="w-5 h-5 flex-shrink-0" />
    <p className="text-sm font-medium">{message}</p>
  </div>
);

export default ErrorMessage;
