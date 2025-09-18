'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaArrowLeft, FaSave, FaEye, FaImage, FaTag } from 'react-icons/fa'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  status: 'Published' | 'Draft'
  image: string
  readTime: string
  featured: boolean
  views: number
  date: string
}

const EditBlogPost = () => {
  const params = useParams()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Dr. Sarah Smith',
    category: 'Homeopathy Basics',
    status: 'Draft' as 'Published' | 'Draft',
    image: '',
    readTime: '5 min read',
    featured: false
  })
  const [isPreview, setIsPreview] = useState(false)
  const [loading, setLoading] = useState(true)

  const categories = [
    'Homeopathy Basics',
    'Mental Health',
    'Pediatric Care',
    'Allergies',
    'Women\'s Health',
    'Homeopathy Science',
    'Lifestyle Disorders',
    'Respiratory Health',
    'Digestive Health'
  ]

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${params.id}`)
        if (response.ok) {
          const post: BlogPost = await response.json()
          setFormData({
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            author: post.author,
            category: post.category,
            status: post.status,
            image: post.image,
            readTime: post.readTime,
            featured: post.featured
          })
        } else {
          alert('Post not found')
          router.push('/admin')
        }
      } catch (error) {
        console.error('Error fetching post:', error)
        alert('Failed to load post')
        router.push('/admin')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchPost()
    }
  }, [params.id, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch(`/api/blog/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Blog post updated successfully!')
        router.push('/admin')
      } else {
        const error = await response.json()
        alert(`Error: ${error.error}`)
      }
    } catch (error) {
      console.error('Error updating blog post:', error)
      alert('Failed to update blog post. Please try again.')
    }
  }

  const handlePreview = () => {
    setIsPreview(!isPreview)
  }

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/admin"
                className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Back to Admin
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Edit Blog Post</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePreview}
                className="btn-secondary inline-flex items-center"
              >
                <FaEye className="mr-2" />
                {isPreview ? 'Edit' : 'Preview'}
              </button>
              <button
                onClick={handleSubmit}
                className="btn-primary inline-flex items-center"
              >
                <FaSave className="mr-2" />
                Update Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                    Post Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter a compelling title for your blog post"
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-semibold text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
                    placeholder="Write a brief summary of your post (this will appear on the blog listing page)"
                  />
                </div>

                {/* Content */}
                <div>
                  <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
                    Content *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={15}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
                    placeholder="Write your blog post content here. You can use HTML tags for formatting like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, etc."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    You can use HTML tags for formatting. Example: &lt;h2&gt;Heading&lt;/h2&gt;, &lt;p&gt;Paragraph&lt;/p&gt;, &lt;ul&gt;&lt;li&gt;List item&lt;/li&gt;&lt;/ul&gt;
                  </p>
                </div>

                {/* Image URL */}
                <div>
                  <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                    Featured Image URL
                  </label>
                  <div className="flex space-x-3">
                    <input
                      type="url"
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                    <button
                      type="button"
                      className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                    >
                      <FaImage />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Use high-quality images (800x600px recommended). You can use Unsplash, Pexels, or upload to your own server.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Publish Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="author" className="block text-sm font-semibold text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="readTime" className="block text-sm font-semibold text-gray-700 mb-2">
                    Reading Time
                  </label>
                  <input
                    type="text"
                    id="readTime"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="5 min read"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                    Featured Post
                  </label>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Writing Tips</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Use clear, engaging headlines</li>
                <li>• Break content into short paragraphs</li>
                <li>• Include relevant images</li>
                <li>• Use bullet points for lists</li>
                <li>• Add subheadings for structure</li>
                <li>• Keep content informative and helpful</li>
              </ul>
            </div>

            {/* HTML Help */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">HTML Formatting Help</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div><code>&lt;h2&gt;Heading&lt;/h2&gt;</code> - Large heading</div>
                <div><code>&lt;h3&gt;Subheading&lt;/h3&gt;</code> - Medium heading</div>
                <div><code>&lt;p&gt;Paragraph&lt;/p&gt;</code> - Paragraph text</div>
                <div><code>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</code> - Bullet list</div>
                <div><code>&lt;strong&gt;Bold&lt;/strong&gt;</code> - Bold text</div>
                <div><code>&lt;em&gt;Italic&lt;/em&gt;</code> - Italic text</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditBlogPost
