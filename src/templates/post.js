import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"
import "./post.css"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <div className="post-container">
                    <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            featured_media {
                localFile {
                    url
                }
            }
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`