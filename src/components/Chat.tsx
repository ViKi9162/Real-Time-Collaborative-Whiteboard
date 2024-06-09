import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div className="chat">
      <ListGroup>
        {messages.map((msg, index) => (
          <ListGroup.Item key={index}>{msg}</ListGroup.Item>
        ))}
      </ListGroup>
      <Form>
        <Form.Group controlId="chatMessage">
          <Form.Control
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
        </Form.Group>
        <Button onClick={handleSend}>Send</Button>
      </Form>
    </div>
  );
};

export default Chat;
