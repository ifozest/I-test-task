import React from 'react';

/**
 * Display in case there are no Links
 */
function LinkListEmptyData() {
  return (
    <div className="empty-data">
      <h2>
        Your History is empty!
      </h2>
      <h2>
        Enter long link in to the input field and we will shorten it for you!
      </h2>
    </div>
  );
}

export default LinkListEmptyData;
