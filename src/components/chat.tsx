import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IMessage } from '../interface/chat';
import USERS from '../data/users.json';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from './ui/select';
import { ILinkedInUser } from '../interface/user';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Chat: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [to, setTo] = useState<string | undefined>();
  const [messages, setMessages] = useState<IMessage[]>(JSON.parse(localStorage.getItem('chat-messages') || '[]'));

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    localStorage.setItem('chat-messages', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    const messageData = {
      from: parseInt(id || '', 10),
      to: parseInt(to || '', 10),
      message: currentMessage
    };

    setMessages([...messages, messageData]);
    setCurrentMessage('');
  }

  return (
    <Card className='fixed bottom-2 right-20 w-[350px] bg-white shadow-2xl'>
      <CardHeader>
        <CardTitle>Chat</CardTitle>
        <CardDescription>Send and receive messages</CardDescription>
      </CardHeader>

      <CardContent>
        <div className='w-full h-[150px] border-2 border-solid border-slate-500 mb-4'>
          <ul className='w-full h-full overflow-auto p-4'>
            {
              messages.filter((msg: IMessage) => msg.from === parseInt(id || '', 10) || msg.to === parseInt(id || '', 10))
                .map((msg: IMessage, idx: number) => (
                  <li key={idx} className='mb-4 bg-slate-100 p-2 rounded-sm'>
                    <p>To: {USERS.find((user) => user.id === msg.to)?.firstName}</p>
                    <p>From: {USERS.find((user) => user.id === msg.from)?.firstName}</p>
                    <p>message: {msg.message}</p>
                  </li>
              ))
            }
          </ul>
        </div>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='to-user'>TO:</Label>
              <Select onValueChange={(id) => setTo(id)}>
                <SelectTrigger id="to-user">
                  <SelectValue placeholder="Select user" />
                </SelectTrigger>
                <SelectContent position='popper' className='bg-white'>
                  {
                    USERS.map((user: ILinkedInUser) => (
                      <SelectItem
                        key={user.id}
                        value={user.id.toString()}
                      >
                        {user.firstName}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='message'>Message</Label>
              <Input
                id='message'
                placeholder='Message...'
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button variant="default" onClick={sendMessage}>Send</Button>
      </CardFooter>
    </Card>
  )
};

export default Chat;