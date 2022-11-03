import * as React from 'react';
import App from './components/app';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
if (container !== null) {
    const root = createRoot(container!);
    root.render(<App color="Yellow" />);
}