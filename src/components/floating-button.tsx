import React from 'react';
import { Button } from './ui/button';
import { MessageSquare } from 'lucide-react';

interface Props {
  onClick: () => void
}

const FloatingButton: React.FC<Props> = ({onClick}) => {
  return (
    <div className='fixed bottom-2 right-2 bg-slate-500 rounded-full w-16 h-16 flex items-center justify-center shadow-2xl'>
      <Button
        variant="default"
        size="icon"
        onClick={onClick}
      >
        <MessageSquare className='w-6 h-6' />
      </Button>
    </div>
  )
};

export default FloatingButton;