import React from 'react'
import get from 'lodash/get'

class Courses extends React.Component {
    render() {
        const courses = get(this, 'props.data.allContentfulCourse.edges')

        return(
            <div>
                <h1>Courses</h1>
                {courses.map(({ node }) => {
                    return(
                        <div key={node.slug}>{node.title}</div>
                    )
                })}
            </div>
        )
    }
}

export default Courses

export const pageQuery = graphql`
    query CourseIndexQuery {
        allContentfulCourse {
            edges {
                node {
                    title
                }
            }
        }
    }
`
