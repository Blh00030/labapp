import React, { useState } from 'react';
import Modal from './Modal';

function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card" style={{ 
      width: '22vw',
      backgroundColor: '#000000', 
      color: '#ffffff', 
      border: '1px solid #333' 
    }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#ffffff' }}>Card Title</h5>
        <p className="card-text" style={{ color: '#ffffff' }}>
          Some quick example text to build on the card title.
        </p>
        <button 
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
          style={{
            
          }}
        >
          Launch
        </button>

        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </div>
  );
}

export default Card;