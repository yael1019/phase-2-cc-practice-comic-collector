import { useEffect, useState } from 'react'
function Comic({ com, handleRemove }) {
  const [showImage, setShowImage] = useState(true)
  return (
    <div className="comic-item" onClick={() => setShowImage(!showImage)}>
      {
        showImage
          ?
          <img src={com.image_url} alt={"Comic Issue Image"} />
          :
          <>
            <h3>{com.title}</h3>
            <h4>{com.issue}</h4>
          </>
      }
      <button onClick={ () => handleRemove(com.id) }>Remove</button>

    </div>
  )

}

export default Comic
