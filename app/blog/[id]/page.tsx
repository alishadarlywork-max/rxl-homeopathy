import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaArrowLeft, FaTag, FaShareAlt, FaBookmark } from 'react-icons/fa'
import { getBlogPost, getBlogPosts, incrementViewCount } from '../../../lib/blog-data'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.id)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The requested blog post could not be found.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Increment view count
  incrementViewCount(params.id)

  return (
    <div className="pt-20">
      {/* Back Button */}
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <FaTag className="text-primary-600" />
              <span className="text-primary-600 font-medium">{post.category}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between border-b border-gray-200 pb-8">
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <FaUser />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                  <FaBookmark />
                </button>
                <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                  <FaShareAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaUser className="text-primary-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.author}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Sarah Smith is a licensed homeopathic practitioner with over 15 years of experience 
                    in natural healing. She specializes in constitutional homeopathy and has helped hundreds 
                    of patients achieve optimal health through personalized treatment plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getBlogPosts().filter(p => p.id !== post.id && p.status === 'Published').slice(0, 2).map((relatedPost) => (
                <article key={relatedPost.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <FaTag className="text-primary-600 text-sm" />
                      <span className="text-primary-600 text-sm font-medium">{relatedPost.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
                    >
                      Read More
                      <FaArrowLeft className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Enjoyed This Article?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Subscribe to our newsletter for more health insights, homeopathy tips, 
              and wellness advice delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage
