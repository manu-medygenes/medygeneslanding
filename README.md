# MyGenes Landing Page

A complete Hebrew landing page for MyGenes genetic testing service, built with HTML, CSS, and JavaScript.

## 📁 Project Structure

```
MyGenesLanging page/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Countdown timer and interactions
├── images/             # All image assets (see below)
└── README.md           # This file
```

## 🖼️ Required Images

Place all images in the `images/` folder with these exact names:

### Logo & Branding
- **logo.png** - MyGenes logo (transparent background recommended)
  - Recommended size: 400x100px or similar aspect ratio

### Hero Section
- **before-after-left.jpg** - After transformation photo (left side)
  - Size: 800x600px minimum
- **before-after-right.jpg** - Before transformation photo (right side)
  - Size: 800x600px minimum

### Media Logos (7 images)
- **media-1.png** through **media-7.png** - Major Israeli media outlet logos
  - Size: 200x100px each
  - Should include logos from Israeli TV, newspapers, etc.

### Content Sections
- **quote-image.jpg** - Main educational/explanatory image
  - Size: 1200x600px
- **chart-85.png** - 85% genetic compatibility chart/graphic
  - Size: 400x400px
- **chart-40.png** - 40% genetic compatibility chart/graphic
  - Size: 400x400px
- **genetic-profile-1.jpg** - First genetic profile example
  - Size: 600x300px
- **genetic-profile-2.jpg** - Second genetic profile example
  - Size: 600x300px

### Testimonials
- **testimonial-video.jpg** - Main testimonial video thumbnail (Danielle Lotem)
  - Size: 1200x800px
- **testimonial-1.jpg** - Miri Abu Hadera (24) before/after
  - Size: 800x600px
- **testimonial-2.jpg** - Yair Tirosh (53) before/after
  - Size: 800x600px
- **testimonial-3.jpg** - Batya (62) before/after
  - Size: 800x600px
- **testimonial-4.jpg** - Hadva Elishe (47) before/after
  - Size: 800x600px

### Education Section
- **education-1.jpg** - First educational image
  - Size: 1200x700px
- **education-2.jpg** - Second educational image
  - Size: 1200x700px

### Social Proof (Facebook-style posts)
- **fb-icon.png** - Facebook icon (blue background)
  - Size: 64x64px
- **user-avatar-1.jpg** through **user-avatar-3.jpg** - User profile photos
  - Size: 100x100px each (circular recommended)
- **fb-post-image-1.jpg** - Food/meal photo for Facebook post
  - Size: 800x600px

### Bottom Section
- **bottom-media-1.png** through **bottom-media-3.png** - Additional media logos
  - Size: 200x100px each

## 🎨 Design Features

- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **RTL Support** - Right-to-left layout for Hebrew text
- ✅ **Live Countdown Timer** - Creates urgency with real-time countdown
- ✅ **Smooth Animations** - Fade-in effects on scroll
- ✅ **Sticky Top Banner** - Always visible call-to-action
- ✅ **Modern UI** - Clean, professional design with orange/red accent colors
- ✅ **Social Proof** - Facebook-style testimonial posts
- ✅ **Multiple CTAs** - Strategic placement throughout the page
- ✅ **FAQ Section** - Comprehensive answers to common questions

## 🎯 Key Sections

1. **Top Countdown Banner** - Urgent call-to-action with timer
2. **Header** - Logo and branding
3. **Hero Section** - Main headline with before/after transformation
4. **Media Credibility Bar** - Trust signals from major outlets
5. **Educational Content** - Genetic compatibility explanation
6. **Success Stories** - Multiple testimonial formats
7. **FAQ Section** - Detailed answers to questions
8. **Social Proof Posts** - Facebook-style user testimonials
9. **Final CTA** - Strong closing call-to-action with countdown

## 🚀 Getting Started

1. **Add Your Images**
   - Place all required images in the `images/` folder
   - Use the exact filenames listed above
   - Optimize images for web (compress to reduce file size)

2. **Customize Content**
   - Edit `index.html` to update text, phone numbers, etc.
   - Modify `styles.css` to adjust colors, fonts, spacing
   - Update `script.js` for countdown duration or analytics

3. **Configure CTA Links**
   - Update button click handlers in `script.js`
   - Add your booking/form URL or modal logic
   - Integrate with your CRM or scheduling system

4. **Add Analytics**
   - Insert Google Analytics tracking code
   - Add Facebook Pixel
   - Configure conversion tracking

5. **Test**
   - Open `index.html` in a browser
   - Test on mobile devices
   - Verify all links and interactions work

## 🔧 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-green: #4CAF50;
    --dark-green: #45a049;
    --orange: #ff6b35;
}
```

### Countdown Timer
Adjust duration in `script.js`:
```javascript
const countdownEnd = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours
```

### Call-to-Action
Update button behavior in `script.js` or link directly in HTML:
```html
<button class="cta-button" onclick="window.location.href='YOUR_BOOKING_URL'">
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Conversion Optimization Tips

1. **Fast Loading** - Optimize and compress all images
2. **Clear CTAs** - Multiple buttons throughout the page
3. **Social Proof** - Real testimonials with photos
4. **Urgency** - Countdown timers create FOMO
5. **Trust Signals** - Media logos and hospital partnership
6. **Mobile-First** - Most traffic will be mobile
7. **Easy Contact** - Prominent phone number and booking buttons

## 📞 Support & Contact

For questions about implementation or customization, please contact your web development team.

## 🔒 Security Notes

- Always use HTTPS in production
- Validate all form inputs
- Protect user data according to Israeli privacy laws
- Implement GDPR/privacy compliance features

## 📈 Next Steps

1. ✅ Add all images to the `images/` folder
2. ⬜ Set up domain and hosting
3. ⬜ Install SSL certificate
4. ⬜ Configure email/form submission
5. ⬜ Add analytics tracking
6. ⬜ Set up A/B testing
7. ⬜ Integrate with CRM/booking system
8. ⬜ Launch and monitor performance

---

**Built with ❤️ for MyGenes**

