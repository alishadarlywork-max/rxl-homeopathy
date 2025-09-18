import { NextRequest, NextResponse } from 'next/server'
import { getBlogPosts, addBlogPost } from '@/lib/blog-data'

export async function GET() {
  try {
    const posts = getBlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.title || !body.excerpt || !body.content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const newPost = addBlogPost({
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author || 'Dr. Sarah Smith',
      date: new Date().toISOString().split('T')[0],
      category: body.category || 'Homeopathy Basics',
      image: body.image || '',
      readTime: body.readTime || '5 min read',
      featured: body.featured || false,
      status: body.status || 'Draft'
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 })
  }
}
