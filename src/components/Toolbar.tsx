import React from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

interface ToolbarProps {
  setColor: (color: string) => void;
  setBrushSize: (size: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ setColor, setBrushSize }) => {
  return (
    <div className="toolbar">
      <ButtonGroup>
        <Button onClick={() => setColor('#000000')}>Black</Button>
        <Button onClick={() => setColor('#ff0000')}>Red</Button>
        <Button onClick={() => setColor('#00ff00')}>Green</Button>
        <Button onClick={() => setColor('#0000ff')}>Blue</Button>
      </ButtonGroup>
      <Form.Control
        type="number"
        min="1"
        max="100"
        defaultValue="5"
        onChange={(e) => setBrushSize(parseInt(e.target.value))}
      />
    </div>
  );
};

export default Toolbar;
