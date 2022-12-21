import React from 'react'
import PostPreview from '../components/post/PostPreview'
import SearchInput from '../components/search/SearchInput'
// import { useParams } from 'react-router-dom'
import UserInfoCard from '../components/user/UserInfoCard'

function User() {
  // const { userId } = useParams()

  return (
    <>
      <div className="m-12">
        <SearchInput />
      </div>
      <div className="mx-12">
        <UserInfoCard
          userName="David"
          userIcon="https://avatars.githubusercontent.com/u/75478661?v=4"
          fansCount={10}
          followingCount={10}
        />
      </div>
      <div className="mx-12 space-y-12 mt-12">
        <PostPreview
          title="ETH 2.0 the merge is coming"
          contentPreview="ETH 2.0 the merge is coming, let's go to Bybit and hold eth!"
          userIcon="https://avatars.githubusercontent.com/u/75478661?v=4"
          userName="David"
          boardName="ETH"
          boardIcon="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png"
          userId={4}
          boardId={3}
          postId={5}
        />
        <PostPreview
          title="ETH 2.0 the merge is coming"
          contentPreview="ETH 2.0 the merge is coming, let's go to Bybit and hold eth!"
          userIcon="https://avatars.githubusercontent.com/u/75478661?v=4"
          userName="David"
          boardName="ETH"
          boardIcon="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png"
          userId={4}
          boardId={3}
          postId={5}
        />
      </div>
    </>
  )
}

export default User