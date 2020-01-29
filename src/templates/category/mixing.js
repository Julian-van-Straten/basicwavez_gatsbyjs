import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../../components/layout"

class MixingTemplate extends Component {
    render() {
        const data = this.props.data

        return(
            <Layout>
            <div>
                <h1>Mixing</h1>

                {data.allWordpressPost.edges.map(({node}) => (
                    <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                        <Link to={node.slug}>
                            <h3>{node.title}</h3>
                        </Link>
                            <div dangerouslySetInnerHTML={{__html: node.categories.link}} />
                                
                    
                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        
                    </div>
                ))}

            </div>
            </Layout>
        )
    }
}

MixingTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default MixingTemplate

export const pageQuery = graphql`
    query mixingQuery {
        allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "mixing"}}}}){
            edges{
                node{
                    id
                    title
                    categories {
                        name
                        link
                      }
                    link
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`