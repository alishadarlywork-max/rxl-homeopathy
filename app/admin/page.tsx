import Link from 'next/link'
import { FaPlus, FaArrowLeft, FaEdit, FaEye, FaClock } from 'react-icons/fa'
import { getBlogPosts } from '@/lib/blog-data'
import AdminActions from '@/app/components/AdminActions'

const AdminPanel = () => {
  const blogPosts = getBlogPosts()
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Back to Website
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Link 
                href="/admin/availability"
                className="btn-secondary inline-flex items-center"
              >
                <FaClock className="mr-2" />
                Manage Availability
              </Link>
              <Link 
                href="/admin/blog/new"
                className="btn-primary inline-flex items-center"
              >
                <FaPlus className="mr-2" />
                New Post
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-gray-900">{blogPosts.length}</div>
            <div className="text-gray-600">Total Posts</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {blogPosts.filter(post => post.status === 'Published').length}
            </div>
            <div className="text-gray-600">Published</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-yellow-600">
              {blogPosts.filter(post => post.status === 'Draft').length}
            </div>
            <div className="text-gray-600">Drafts</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">
              {blogPosts.reduce((sum, post) => sum + post.views, 0)}
            </div>
            <div className="text-gray-600">Total Views</div>
          </div>
        </div>

        {/* Blog Posts Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Blog Posts</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blogPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {post.title}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-2">
                          {post.excerpt}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          By {post.author}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-800">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        post.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {post.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {new Date(post.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <AdminActions postId={post.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/admin/blog/new"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-dashed border-gray-300 hover:border-primary-400 group"
          >
            <div className="text-center">
              <FaPlus className="mx-auto text-3xl text-gray-400 group-hover:text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Create New Post</h3>
              <p className="text-gray-600 text-sm">Add a new blog post with rich content and images</p>
            </div>
          </Link>

          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-dashed border-gray-300">
            <div className="text-center">
              <FaEdit className="mx-auto text-3xl text-gray-400 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Categories</h3>
              <p className="text-gray-600 text-sm">Organize posts with custom categories</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-dashed border-gray-300">
            <div className="text-center">
              <FaEye className="mx-auto text-3xl text-gray-400 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">View Analytics</h3>
              <p className="text-gray-600 text-sm">Track post performance and engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
