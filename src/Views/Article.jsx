import React from 'react'
import { useParams } from 'react-router-dom';
import blogData from '../blogData';

const Article = () => {

    const { id } = useParams()
    const result = blogData.filter(blog => blog.id === id);
    console.log(result)

    const articletitle = result.map(item => {
      return (
        <>
          <div className="article">
            <img className="article-img" src={item.img} />
            <h1 className="article-title">{item.title}</h1>
            {/* <h1 className="article-title">{item.title2}</h1> */}
            <h2 className="upload-date-article" >{item.date}</h2>
            {/* <div dangerouslySetInnerHTML={{ __html: item.contentPartOne }} /> */}
            <h3 className="article-content-1"  dangerouslySetInnerHTML={{ __html: item.contentPartOne }} ></h3>
            <p className="article-quote">{item.contentQuoteOne}</p>
            <img className="article-img-2" src={item.imgSecondary} />
            <p className="article-quote-2">{item.contentQuoteTwo}</p>
            <h3 className="article-content-2" dangerouslySetInnerHTML={{ __html: item.contentPartTwo }}></h3>
            <h3 classname="article-steps"  dangerouslySetInnerHTML={{ __html: item.contentStep}}></h3>
          </div>
        </>
      )


    })
    return (
      <div>
        {articletitle}
      </div>
    )
}

export default Article


//<img src={`../images/${props.item.coverImg}`} className="card--image" />