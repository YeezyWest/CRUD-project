import React from "react";

const ArticleCollection = ({ collection }) => {
  return (
    <div className="bg-white shadow rounded">
    <ul>
      {collection.map(article =>
        <li>
           <a href="" className="block hover:bg-gray-100">
             <div className="p-4">
                <div className="flex justify-between item-center">
                  <div className="text-lg text-blue-400">
                  {article.title}
                  </div>
                  <div className="ml-2">
                     {article.tag_list.map(tag=>
                     <div className="inline-flex ml-1 px-2 text-xs rounded-full bg-gray-200 text-gray-700">
                       {tag}
                     </div>
                     )} 
                  </div>
                </div>
             </div>
           </a>
        </li>
        
      )}
      </ul>
    </div>
  );
};

export default ArticleCollection;
