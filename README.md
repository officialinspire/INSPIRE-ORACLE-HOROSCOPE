# 🌙 INSPIRE COSMIC BLUEPRINT

<div align="center">

![INSPIRE Logo](logo.png)

**A mystical astrology web app guided by Azeban the Oracle**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## 🦝 About

**INSPIRE COSMIC BLUEPRINT** is an interactive astrology web application that combines ancient wisdom with modern design. Guided by Azeban the Oracle—a mystical raccoon astrologer—users discover personalized cosmic insights, zodiac archetypes, and daily oracle readings.

This project embodies the INSPIRE brand ethos: **Tech × Nature × Resistance × Self-Mastery**

### Key Highlights

- 🎯 **Personalized Readings** - Dynamic horoscopes based on birth data
- 🌟 **Zodiac Archetypes** - 12 unique INSPIRE-flavored personas
- 🎨 **Nature-Themed Design** - Immersive forest starfield aesthetic
- 🎵 **Atmospheric Audio** - Background music with smooth fade-in
- 📱 **Fully Responsive** - Mobile-first design that works everywhere
- ⚡ **Zero Dependencies** - Pure vanilla HTML/CSS/JavaScript

---

## ✨ Features

### 🔮 Core Functionality

#### **1. Birth Profile Generator**
Enter your birth details to receive:
- **Sun Sign** - Your primary zodiac sign with symbol
- **Element** - Fire, Earth, Air, or Water with personality insights
- **Modality** - Cardinal, Fixed, or Mutable energy type
- **Sacred Triad** - Physical, Spiritual, and Psychological traits/virtues

#### **2. INSPIRE Archetypes**
12 unique archetypes mapped to zodiac signs:
- ♈ **Aries** → The Shock Trooper
- ♉ **Taurus** → The Builder
- ♊ **Gemini** → The Signal Jammer
- ♋ **Cancer** → The Memory Keeper
- ♌ **Leo** → The Beacon
- ♍ **Virgo** → The Systems Analyst
- ♎ **Libra** → The Diplomat
- ♏ **Scorpio** → The Shadow Operative
- ♐ **Sagittarius** → The Scout
- ♑ **Capricorn** → The Architect
- ♒ **Aquarius** → The Hacker
- ♓ **Pisces** → The Dream Diver

Each archetype includes:
- 🎯 **Core Directive** - Your primary purpose
- ⚠️ **Shadow Pattern** - Potential pitfalls
- ⬆️ **Upgrade Path** - Growth strategies

#### **3. Oracle Readings**
Dynamic horoscope generation based on:
- Current hour (24 hourly traits/virtues)
- Day of week (7 daily influences)
- Season (4 seasonal energies)
- Your zodiac sign's characteristics

#### **4. Celestial Wheel Chart**
SVG-based zodiac wheel visualization with:
- 12 zodiac segments with glyphs
- Highlighted user's sun sign
- Cosmic gradient styling

#### **5. Background Music**
- Atmospheric looping soundtrack
- Smooth 3-second fade-in (0 → 30% volume)
- Autoplay with mobile-friendly fallback
- Browser compatibility handling

---

## 🎨 Design Philosophy

### Visual Aesthetic
- **Neo-Native Mysticism** - Tech meets ancient wisdom
- **Forest Starfield** - Nature-inspired cosmic background
- **Wood Panel UI** - Warm, organic card design
- **Golden Accents** - Celestial bronze and gold palette

### Typography
- **Cinzel** - Elegant serif for headings
- **Raleway** - Clean sans-serif for body text
- **Orbitron** - Tech-inspired for branding

### Color Scheme
```css
Primary Gold:     #d4af37
Bronze:           #cd7f32
Wood Brown:       #5a3c28
Cream:            #f5e6d3
Dark Brown:       #3c2819
Accent Copper:    #b8860b
```

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup with accessibility
- **CSS3** - Custom properties, gradients, animations
- **Vanilla JavaScript** - ES6+ with no frameworks

### Features Implementation
- **SVG Graphics** - Scalable zodiac wheel
- **Web Audio API** - Background music control
- **CSS Grid/Flexbox** - Responsive layouts
- **CSS Animations** - Smooth transitions and effects

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📥 Installation

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/inspire-cosmic-blueprint.git
cd inspire-cosmic-blueprint
```

2. **Open in browser**
```bash
# Simply open index.html in any modern browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

That's it! No build process, no dependencies, no setup.

### File Structure
```
inspire-cosmic-blueprint/
├── index.html                      # Main HTML file
├── styles.css                      # All styles
├── script.js                       # All JavaScript
├── horoscope-background-music.mp3  # Background audio
├── azeban-astrologer.png          # Azeban character
├── background-desktop.png          # Desktop background
├── background-mobile.png           # Mobile background
├── logo.png                        # INSPIRE logo
└── README.md                       # This file
```

---

## 🚀 Usage

### Basic Usage

1. **Enter Birth Information**
   - Name/Nickname (optional)
   - Date of Birth (required)
   - Time of Birth (optional)
   - Place of Birth (optional)

2. **Generate Blueprint**
   - Click "Reveal My Cosmic Blueprint"
   - View personalized profile
   - Read oracle guidance

3. **Explore Features**
   - **New Reading** - Enter different birth data
   - **Refresh Wisdom** - Generate new oracle reading

### Embedding in Shopify

```html
<!-- Add to Shopify page HTML -->
<div id="cosmic-blueprint-container">
  <iframe 
    src="https://yourdomain.com/inspire-horoscope/" 
    width="100%" 
    height="2000px" 
    frameborder="0"
    style="border: none; overflow: hidden;">
  </iframe>
</div>
```

### Customization

#### Change Background Music
Replace `horoscope-background-music.mp3` or update in `index.html`:
```html
<source src="your-music-file.mp3" type="audio/mpeg">
```

#### Adjust Music Volume
Edit `script.js` line 829:
```javascript
fadeInAudio(audio, 0.3, 3000); // volume: 0.0-1.0, duration: ms
```

#### Modify Archetype Descriptions
Edit the text in `script.js` starting at line 223:
```javascript
const ARCHETYPE_DATA = {
    'The Shock Trooper': {
        coreDirective: 'Your custom text here...',
        // ... more properties
    }
};
```

#### Update Color Scheme
Modify CSS variables in `styles.css`:
```css
:root {
    --gold-primary: #d4af37;
    --bronze: #cd7f32;
    /* Add custom colors */
}
```

---

## 🧠 How It Works

### Zodiac Sign Calculation
```javascript
// Date-based zodiac determination
function getZodiacSign(month, day) {
    // Hard-coded date ranges for each sign
    // Returns sign object with element, modality, archetype
}
```

### Horoscope Generation
```javascript
// Multi-factor synthesis:
1. User's zodiac sign → element & modality
2. Current temporal influences:
   - Hour trait/virtue (24 options)
   - Day trait/virtue (7 options)
   - Season trait/virtue (4 options)
3. Sentence fragments from 5 categories:
   - Opening, Element, Shadow, Action, Closing
4. Deterministic randomization using date seed
```

### Sacred Triad System
Each zodiac sign has three dimensions:
- **Physical** - Trait & Virtue (body/action)
- **Spiritual** - Trait & Virtue (soul/purpose)
- **Psychological** - Trait & Virtue (mind/growth)

### Music Fade-In Algorithm
```javascript
// 50-step volume interpolation
targetVolume = 0.3
steps = 50
stepDuration = 3000ms / 50 = 60ms
volumeIncrement = 0.3 / 50 = 0.006

// Each 60ms: volume += 0.006
// After 3000ms: volume = 0.3
```

---

## 📊 Data Architecture

### Profile Object Structure
```javascript
{
    name: String,
    dob: Date,
    time: String (optional),
    place: String (optional),
    sunSign: String,
    sunSymbol: String,
    element: String,
    modality: String,
    archetype: String,
    elementText: String,
    modalityText: String,
    physicalTrait: String,
    physicalVirtue: String,
    spiritualTrait: String,
    spiritualVirtue: String,
    psychologicalTrait: String,
    psychologicalVirtue: String,
    coreDirective: String,
    shadowPattern: String,
    upgradePath: String,
    hourTrait: String,
    hourVirtue: String,
    dayTrait: String,
    dayVirtue: String,
    seasonTrait: String,
    seasonVirtue: String
}
```

---

## 🎯 Roadmap

### Planned Features
- [ ] Moon sign calculation (requires birth time)
- [ ] Rising sign calculation (requires birth time + location)
- [ ] Full house system with planetary positions
- [ ] Save/share readings functionality
- [ ] Print-friendly horoscope export
- [ ] Multi-language support
- [ ] Dark/light theme toggle
- [ ] Accessibility improvements (WCAG AAA)

### Under Consideration
- [ ] Daily horoscope API integration
- [ ] Compatibility calculator (synastry)
- [ ] Natal chart PDF generation
- [ ] Customizable archetype system
- [ ] User accounts with reading history

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Maintain vanilla JS (no frameworks)
- Keep CSS scoped with `inspire-horoscope-` prefix
- Test on mobile and desktop browsers
- Follow existing code style
- Update README if adding features

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

### Created By
**INSPIRE Clothing** - [www.inspireclothing.art](https://www.inspireclothing.art)

### Character Design
**Azeban the Oracle** - Original INSPIRE mascot character

### Fonts
- [Cinzel](https://fonts.google.com/specimen/Cinzel) by Natanael Gama
- [Raleway](https://fonts.google.com/specimen/Raleway) by Matt McInerney
- [Orbitron](https://fonts.google.com/specimen/Orbitron) by Matt McInerney

### Inspiration
- Traditional astrology wisdom
- Native American storytelling traditions
- Neo-shamanic mysticism
- Cyberpunk aesthetics

---

## 📧 Contact

**INSPIRE Clothing**
- Website: [www.inspireclothing.art](https://www.inspireclothing.art)
- Email: contact@inspireclothing.art
- Hashtag: #teamINSPIRE

---

## 🌟 Support

If you find this project helpful, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs and issues
- 💡 Suggesting new features
- 🎨 Sharing your customizations
- 🛍️ Supporting INSPIRE Clothing

---

<div align="center">

**✨ Ancient wisdom meets modern insight — an art & storytelling journey ✨**

**#teamINSPIRE** 🦝🌙⚡

Made with 💜 by INSPIRE Clothing

</div>
