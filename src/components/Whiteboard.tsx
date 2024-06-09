import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import Toolbar from './Toolbar';
import Chat from './Chat';
import '../styles/Whiteboard.css';

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const canvas = new fabric.Canvas('whiteboard', {
      isDrawingMode: true,
    });
    canvas.freeDrawingBrush.color = color;
    canvas.freeDrawingBrush.width = brushSize;
    canvasRef.current = canvas;

    // Add undo, redo functionality, and WebSocket connection

    return () => {
      canvas.dispose();
    };
  }, [color, brushSize]);

  return (
    <div className="whiteboard-container">
      <Toolbar setColor={setColor} setBrushSize={setBrushSize} />
      <canvas id="whiteboard" width={800} height={600}></canvas>
      <Chat />
    </div>
  );
};

export default Whiteboard;
