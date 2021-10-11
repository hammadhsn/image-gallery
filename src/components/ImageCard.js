import React from 'react';

const ImageCard = ({image}) => {
    const tags = image.tags.split(',');


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-4 py-2">

      <div className="font-bold text-purple-600 ">
        Image by {image.user}
      </div>

      <ul>
        <li>
          <strong>Views: </strong>
          {image.views}
        </li>

        <li>
          <strong>Likes: </strong>
          {image.likes}
        </li>

        <li>
          <strong>Downloads: </strong>
          {image.downloads}
        </li>
      </ul>
      </div>

      <div className="px-3 space-x-2">
         {tags.map((tag, index)=>(
             <span key={index} className="inline-block bg-gray-200 font-semibold text-sm px-3 py-2 rounded-full mb-2">
             #{tag}
           </span>
         ))}
      </div>
  


    </div>
    )
}

export default ImageCard;
