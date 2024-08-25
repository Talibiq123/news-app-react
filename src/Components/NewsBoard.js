import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0401cd1fa0724a5ea9509d161ab43211`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching the news:', error));
  }, [category]);

  

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {
        articles.map((news, index) => {
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })
      }
    </div>
  )
}

//   return (
//     <div>
//       <h1>Top Headlines</h1>
//       <ul>
//         {articles.map((article, index) => (
//           <li key={index}>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               {article.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default NewsBoard;


// import React, { useEffect, useState } from 'react';

// const NewsBoard = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    
//     fetch(url)
//       .then(response => response.json())
//       .then(data => setArticles(data.articles)) 
//       .catch(error => console.error('Error fetching the news:', error));
//   }, []);

//   return (
//     <div>
//       <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
//       <h1>Top Headlines</h1>
//       {articles.length === 0 ? (
//         <p>No news available</p>
//       ) : (
//         <ul>
//           {articles.map((article, index) => (
//             <li key={index}>
//               <a href={article.url} target="_blank" rel="noopener noreferrer">
//                 {article.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default NewsBoard;
