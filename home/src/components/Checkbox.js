import React, { useState } from 'react';

export default function CheckBox() {
  const [rememberMe, setRememberMe] = useState(false);

  // rest of your component code here

  return (
    <div>
      {/* remember me checkbox */}
      <div>
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      {/* rest of your sign-in form */}
    </div>
  );
}
