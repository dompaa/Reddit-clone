import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import Post from '../../components/Post'
import { GET_POSTS_BY_POST_ID } from '../../graphql/queries'

function PostPage() {
    const router = useRouter()
    //loading, error by choice
    const { data } = useQuery(GET_POSTS_BY_POST_ID, {
        variables: {
            post_id: router.query.postId,
        },
    })

    const post: Post = data?.getPostListByPostId;

  return (
    <div>
        <Post post={post}/>
    </div>
  )
}

export default PostPage