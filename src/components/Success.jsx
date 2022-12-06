import React from 'react';

export const Success = ({ count }) => {
  return (
      <div class="success-block">
          <img src="/assets/success.svg" alt="Success" />
          <h3>Успіх!</h3>
          <p>Всім {count} користувачам було відправлене запрошення.</p>
          <button onClick={() => window.location.reload()} className="send-invite-btn">
              Назад
          </button>
      </div>
  );
};
