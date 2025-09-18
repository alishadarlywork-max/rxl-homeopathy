'use client'

import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import Link from 'next/link'

interface AdminActionsProps {
  postId: number
}

const AdminActions = ({ postId }: AdminActionsProps) => {
  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      try {
        const response = await fetch(`/api/blog/${id}`, {
          method: 'DELETE',
        })

        if (response.ok) {
          alert('Post deleted successfully!')
          window.location.reload() // Refresh to show updated list
        } else {
          const error = await response.json()
          alert(`Error: ${error.error}`)
        }
      } catch (error) {
        console.error('Error deleting post:', error)
        alert('Failed to delete post. Please try again.')
      }
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Link
        href={`/blog/${postId}`}
        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
        title="View Post"
      >
        <FaEye />
      </Link>
      <Link
        href={`/admin/blog/edit/${postId}`}
        className="p-2 text-gray-400 hover:text-green-600 transition-colors"
        title="Edit Post"
      >
        <FaEdit />
      </Link>
      <button
        onClick={() => handleDelete(postId)}
        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
        title="Delete Post"
      >
        <FaTrash />
      </button>
    </div>
  )
}

export default AdminActions
