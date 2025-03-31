/*import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });*/
import React from 'react';
    import { createRoot } from 'react-dom/client';
    import App from './App';
    
    it('renders without crashing', () => {
      const div = document.createElement('div');
      const root = createRoot(div);
      root.render(<App />);
    });
    
    describe('Addition', () => {
      it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
      });
    });
