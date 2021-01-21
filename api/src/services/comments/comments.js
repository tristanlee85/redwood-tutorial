import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const comments = ({ postId }) => {
  return db.comment.findMany({ where: { postId } })
}

export const createComment = ({ input }) => {
  return db.comment.create({
    data: input,
  })
}

export const deleteComment = ({ id }) => {
  console.info('deleteComment')
  return db.comment.delete({
    where: { id },
  })
}

export const Comment = {
  post: (_obj, { root }) =>
    db.comment.findOne({ where: { id: root.id } }).post(),
}
