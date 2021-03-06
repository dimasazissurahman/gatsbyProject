import React from 'react'
import { Link } from 'gatsby'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Post = ({ title, author, date, path, body }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle><Link to={path}>{title}</Link></CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> by {" "}
                    <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <Link to={path} className="btn btn-outline-primary float-right">More</Link>
            </CardBody>
        </Card>
    )
}
export default Post
