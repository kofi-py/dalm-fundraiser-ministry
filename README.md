# Dimension Abundant Life Ministries Website

## 🎉 Welcome!

This is a modern, professional website for Dimension Abundant Life Ministries, showcasing your global impact and community outreach efforts.

## 📁 File Structure

```
dimension-ministry-website/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── data.js            # Content data (projects, testimonials, events, gallery)
└── script.js          # Interactive functionality
```

## 🚀 Features

### 1. **Hero Section**
- Eye-catching introduction with animated background
- Clear call-to-action buttons
- Responsive design

### 2. **Impact Section**
- Ghana School Renovation
- Jamaica Relief Barrels
- Chrysalis Center Support
- Community Food Ministry
- Interactive cards with stats and hover effects

### 3. **Testimonials**
- 5 testimonials from Ghana, Jamaica, Hartford, and local community
- Beautiful card design with avatars
- Responsive grid layout

### 4. **Upcoming Events**
- Family Bingo Night (Feb 14)
- Outdoor Worship Concert (Mar 23)
- Community Health Fair (Apr 15)
- Youth Leadership Summit (May 20)
- Mission Trip Preparation (Jun 10)
- Summer BBQ & Baptism Service (Jul 4)

### 5. **Gallery**
- 6 ministry photos showcasing your work
- Hover effects with captions
- Responsive masonry-style layout

### 6. **Giving Section**
- Direct link to online giving page
- Impact statistics
- Compelling call-to-action

### 7. **Footer**
- Social media links (Facebook, Instagram, YouTube)
- Contact information
- Copyright notice

## 🎨 Design Features

- **Modern Typography**: Bebas Neue (headlines), Playfair Display (elegant text), Montserrat (body)
- **Color Scheme**: Navy blue primary, gold accents, vibrant gradients
- **Animations**: Scroll reveal effects, hover transitions, smooth scrolling
- **Responsive**: Works beautifully on desktop, tablet, and mobile
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## ✏️ How to Customize

### Update Content (data.js)

**Add/Edit Impact Projects:**
```javascript
const impactProjects = [
    {
        title: "Your Project Title",
        location: "Location",
        description: "Description...",
        stats: [
            { number: "100+", label: "People Helped" }
        ],
        tag: "Category",
        image: "image-url.jpg"
    }
];
```

**Add/Edit Testimonials:**
```javascript
const testimonials = [
    {
        text: "Testimonial text...",
        author: "Author Name",
        location: "Location",
        initial: "A"
    }
];
```

**Add/Edit Events:**
```javascript
const upcomingEvents = [
    {
        date: "JAN 15",
        time: "6:00 PM - 8:00 PM",
        title: "Event Title",
        description: "Description...",
        tag: "Category",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
];
```

**Add/Edit Gallery Images:**
```javascript
const galleryImages = [
    { 
        url: "image-url.jpg", 
        caption: "Image Caption" 
    }
];
```

### Update Styles (styles.css)

**Change Colors:**
```css
:root {
    --primary: #1a1a2e;      /* Dark navy */
    --accent: #f39c12;       /* Orange/gold */
    --gold: #d4af37;         /* Gold accent */
}
```

**Adjust Spacing:**
Look for `padding` and `margin` properties in relevant sections.

**Modify Animations:**
Adjust animation durations and delays in keyframes and transition properties.

## 🌐 How to Deploy

### Option 1: Simple Hosting
1. Upload all files to any web hosting service
2. Make sure files are in the same directory
3. Access via your domain or hosting URL

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repository-name`

### Option 3: Netlify (Recommended)
1. Drag and drop the folder to Netlify
2. Get instant deployment with HTTPS
3. Free custom domain support

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **No Build Process**: Ready to deploy as-is
- **Lightweight**: Fast loading times
- **SEO Friendly**: Semantic HTML, meta tags
- **Performance**: Optimized images, lazy loading

## 📞 Support

For questions or customization help, contact the church administration.

## 🙏 Mission Statement

*"Helping Ordinary People Live Extraordinary Lives"*

Dimension Abundant Life Ministries is committed to spreading hope, love, and tangible support to communities in Ghana, Jamaica, Connecticut, and beyond.

---

**Made with ❤️ for Dimension Abundant Life Ministries**
