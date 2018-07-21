import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts.map(({node: post}) => {
        const { frontmatter } = post
        return (
          <div>
            <h2 style={{fontSize:'1.4em', marginBottom:'0.2em', marginTop:'0.8em'}}>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
              <span style={{fontSize:'0.6em',}}>&nbsp;&mdash;&nbsp;{frontmatter.date}</span>
            </h2>
            <p style={{fontSize:'1.em', marginBottom:'0.4em', marginTop:'0.4em'}}>{frontmatter.excerpt}</p>
            {post.frontmatter.tags.map(tag => {
              return (
                <span>
                  <Link to={`/tags/${tag}`}>
                    {tag}
                  </Link>&nbsp;&nbsp;
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
 query IndexQuery {
   allMarkdownRemark {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           date(formatString: "MMMM DD, YYYY")
           path
           tags
           excerpt
         }
       }
     }
   }
 }
`

export default IndexPage
