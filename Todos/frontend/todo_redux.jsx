import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  
  ReactDOM.render(<Root />, root);
});

function Root() {
  return <h1>Todos App</h1>;
}