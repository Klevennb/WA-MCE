export const addFollow = (followerId: string, followerName: string) => ({
      type: 'ADD_FOLLOW',
      payload: {
        followerId,
        followerName
      }});