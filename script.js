// ============================================
// INSPIRE COSMIC BLUEPRINT - SCRIPT
// With Personality & Virtue System
// ============================================

// === EDITABLE TEXT: START ===

// Zodiac Sign Data
const ZODIAC_DATA = {
    aries: {
        name: 'Aries',
        symbol: '♈',
        element: 'Fire',
        modality: 'Cardinal',
        archetype: 'The Shock Trooper',
        dates: { start: { month: 3, day: 21 }, end: { month: 4, day: 19 } }
    },
    taurus: {
        name: 'Taurus',
        symbol: '♉',
        element: 'Earth',
        modality: 'Fixed',
        archetype: 'The Builder',
        dates: { start: { month: 4, day: 20 }, end: { month: 5, day: 20 } }
    },
    gemini: {
        name: 'Gemini',
        symbol: '♊',
        element: 'Air',
        modality: 'Mutable',
        archetype: 'The Signal Jammer',
        dates: { start: { month: 5, day: 21 }, end: { month: 6, day: 20 } }
    },
    cancer: {
        name: 'Cancer',
        symbol: '♋',
        element: 'Water',
        modality: 'Cardinal',
        archetype: 'The Memory Keeper',
        dates: { start: { month: 6, day: 21 }, end: { month: 7, day: 22 } }
    },
    leo: {
        name: 'Leo',
        symbol: '♌',
        element: 'Fire',
        modality: 'Fixed',
        archetype: 'The Beacon',
        dates: { start: { month: 7, day: 23 }, end: { month: 8, day: 22 } }
    },
    virgo: {
        name: 'Virgo',
        symbol: '♍',
        element: 'Earth',
        modality: 'Mutable',
        archetype: 'The Systems Analyst',
        dates: { start: { month: 8, day: 23 }, end: { month: 9, day: 22 } }
    },
    libra: {
        name: 'Libra',
        symbol: '♎',
        element: 'Air',
        modality: 'Cardinal',
        archetype: 'The Diplomat',
        dates: { start: { month: 9, day: 23 }, end: { month: 10, day: 22 } }
    },
    scorpio: {
        name: 'Scorpio',
        symbol: '♏',
        element: 'Water',
        modality: 'Fixed',
        archetype: 'The Shadow Operative',
        dates: { start: { month: 10, day: 23 }, end: { month: 11, day: 21 } }
    },
    sagittarius: {
        name: 'Sagittarius',
        symbol: '♐',
        element: 'Fire',
        modality: 'Mutable',
        archetype: 'The Scout',
        dates: { start: { month: 11, day: 22 }, end: { month: 12, day: 21 } }
    },
    capricorn: {
        name: 'Capricorn',
        symbol: '♑',
        element: 'Earth',
        modality: 'Cardinal',
        archetype: 'The Architect',
        dates: { start: { month: 12, day: 22 }, end: { month: 1, day: 19 } }
    },
    aquarius: {
        name: 'Aquarius',
        symbol: '♒',
        element: 'Air',
        modality: 'Fixed',
        archetype: 'The Hacker',
        dates: { start: { month: 1, day: 20 }, end: { month: 2, day: 18 } }
    },
    pisces: {
        name: 'Pisces',
        symbol: '♓',
        element: 'Water',
        modality: 'Mutable',
        archetype: 'The Dream Diver',
        dates: { start: { month: 2, day: 19 }, end: { month: 3, day: 20 } }
    }
};

// Element Descriptions
const ELEMENT_TEXT = {
    Fire: 'Fire signs burn with raw initiative and creative force. You move through resistance, not around it. Your energy ignites projects, people, and movements.',
    Earth: 'Earth signs build the infrastructure of reality. You understand that vision without execution is hallucination. Your power lies in manifesting the tangible.',
    Air: 'Air signs operate in the realm of signal and pattern. You see connections others miss, translate between worlds, and navigate information like a native element.',
    Water: 'Water signs read the emotional weather of any room. You sense what\'s unspoken, hold space for transformation, and understand that depth beats speed every time.'
};

// Modality Descriptions
const MODALITY_TEXT = {
    Cardinal: 'Cardinal energy initiates cycles. You\'re the one who starts the movement, breaks the silence, makes the first move. Leadership is your default mode.',
    Fixed: 'Fixed energy holds the center. Once you commit, you become unmovable. Your superpower is sustained focus when everyone else has moved on.',
    Mutable: 'Mutable energy adapts and translates. You shape-shift between contexts, see multiple angles simultaneously, and thrive in transition zones.'
};

// === PERSONALITY & VIRTUE SYSTEM ===

// Hourly Traits & Virtues (24 hours)
const HOURLY_VIRTUES = {
    0: { trait: 'Rebirth', virtue: 'Renewal' },
    1: { trait: 'Introspection', virtue: 'Wisdom' },
    2: { trait: 'Dreaminess', virtue: 'Imagination' },
    3: { trait: 'Sensitivity', virtue: 'Compassion' },
    4: { trait: 'Determination', virtue: 'Endurance' },
    5: { trait: 'Awakening', virtue: 'Hope' },
    6: { trait: 'Clarity', virtue: 'Mindfulness' },
    7: { trait: 'Activity', virtue: 'Discipline' },
    8: { trait: 'Social Warmth', virtue: 'Kindness' },
    9: { trait: 'Drive', virtue: 'Purpose' },
    10: { trait: 'Logic', virtue: 'Integrity' },
    11: { trait: 'Inspiration', virtue: 'Creativity' },
    12: { trait: 'Balance', virtue: 'Harmony' },
    13: { trait: 'Certainty', virtue: 'Resolve' },
    14: { trait: 'Expression', virtue: 'Honesty' },
    15: { trait: 'Adaptability', virtue: 'Patience' },
    16: { trait: 'Curiosity', virtue: 'Learning' },
    17: { trait: 'Willpower', virtue: 'Responsibility' },
    18: { trait: 'Connection', virtue: 'Loyalty' },
    19: { trait: 'Reflection', virtue: 'Gratitude' },
    20: { trait: 'Mystery', virtue: 'Intuition' },
    21: { trait: 'Comfort', virtue: 'Nurturing' },
    22: { trait: 'Depth', virtue: 'Truth' },
    23: { trait: 'Transcendence', virtue: 'Acceptance' }
};

// Days of the Week
const DAILY_VIRTUES = {
    0: { day: 'Sunday', trait: 'Radiance', virtue: 'Joy' },
    1: { day: 'Monday', trait: 'Adaptation', virtue: 'Resilience' },
    2: { day: 'Tuesday', trait: 'Courage', virtue: 'Action' },
    3: { day: 'Wednesday', trait: 'Intelligence', virtue: 'Communication' },
    4: { day: 'Thursday', trait: 'Expansion', virtue: 'Generosity' },
    5: { day: 'Friday', trait: 'Affection', virtue: 'Beauty' },
    6: { day: 'Saturday', trait: 'Structure', virtue: 'Discipline' }
};

// Seasons
const SEASONAL_VIRTUES = {
    Spring: { trait: 'Growth', virtue: 'Renewal' },
    Summer: { trait: 'Vitality', virtue: 'Passion' },
    Autumn: { trait: 'Transformation', virtue: 'Gratitude' },
    Winter: { trait: 'Stillness', virtue: 'Wisdom' }
};

// Zodiac Sign Triads (Physical / Spiritual / Psychological)
const SIGN_TRIADS = {
    Aries: {
        physical: { trait: 'Boldness', virtue: 'Initiative' },
        spiritual: { trait: 'Purification', virtue: 'Courage' },
        psychological: { trait: 'Self-definition', virtue: 'Authenticity' }
    },
    Taurus: {
        physical: { trait: 'Endurance', virtue: 'Stability' },
        spiritual: { trait: 'Earth-connection', virtue: 'Patience' },
        psychological: { trait: 'Sensory awareness', virtue: 'Contentment' }
    },
    Gemini: {
        physical: { trait: 'Agility', virtue: 'Adaptability' },
        spiritual: { trait: 'Curiosity', virtue: 'Openness' },
        psychological: { trait: 'Duality', virtue: 'Perspective' }
    },
    Cancer: {
        physical: { trait: 'Nurturing presence', virtue: 'Protection' },
        spiritual: { trait: 'Ancestral memory', virtue: 'Devotion' },
        psychological: { trait: 'Emotional insight', virtue: 'Empathy' }
    },
    Leo: {
        physical: { trait: 'Charisma', virtue: 'Confidence' },
        spiritual: { trait: 'Radiance', virtue: 'Leadership' },
        psychological: { trait: 'Identity formation', virtue: 'Self-respect' }
    },
    Virgo: {
        physical: { trait: 'Precision', virtue: 'Discipline' },
        spiritual: { trait: 'Cleansing', virtue: 'Service' },
        psychological: { trait: 'Analysis', virtue: 'Discernment' }
    },
    Libra: {
        physical: { trait: 'Poise', virtue: 'Harmony' },
        spiritual: { trait: 'Divine balance', virtue: 'Justice' },
        psychological: { trait: 'Relational intelligence', virtue: 'Peacekeeping' }
    },
    Scorpio: {
        physical: { trait: 'Intensity', virtue: 'Will' },
        spiritual: { trait: 'Transformation', virtue: 'Faith' },
        psychological: { trait: 'Depth', virtue: 'Insight' }
    },
    Sagittarius: {
        physical: { trait: 'Wanderlust', virtue: 'Exploration' },
        spiritual: { trait: 'Higher mind', virtue: 'Truth' },
        psychological: { trait: 'Optimism', virtue: 'Freedom' }
    },
    Capricorn: {
        physical: { trait: 'Endurance', virtue: 'Fortitude' },
        spiritual: { trait: 'Ascension', virtue: 'Mastery' },
        psychological: { trait: 'Structure', virtue: 'Responsibility' }
    },
    Aquarius: {
        physical: { trait: 'Originality', virtue: 'Innovation' },
        spiritual: { trait: 'Universal mind', virtue: 'Humanity' },
        psychological: { trait: 'Detachment', virtue: 'Clarity' }
    },
    Pisces: {
        physical: { trait: 'Fluidity', virtue: 'Adaptation' },
        spiritual: { trait: 'Mysticism', virtue: 'Compassion' },
        psychological: { trait: 'Dream-logic', virtue: 'Imagination' }
    }
};

// Archetype Interpretations
const ARCHETYPE_DATA = {
    'The Shock Trooper': {
        coreDirective: 'You\'re built to be first through the door. Your operating system runs on courage, speed, and the willingness to take hits. When everyone else is calculating risk, you\'re already in motion. Your job: break through stagnant systems and clear paths for those behind you.',
        shadowPattern: 'Defaulting to force when finesse would work better. Starting battles you don\'t finish. Mistaking intensity for effectiveness. Burning relationships as collateral damage.',
        upgradePath: 'Learn to channel your fire into sustainable momentum. Not every door needs to be kicked in—some just need the right key. Practice strategic patience without losing your edge.'
    },
    'The Builder': {
        coreDirective: 'You turn concepts into concrete reality. Your gift is understanding material laws—what actually works in the physical realm. You know that real wealth is built slowly, and lasting structures need deep foundations.',
        shadowPattern: 'Refusing to pivot when the ground shifts. Holding onto security at the cost of growth. Getting so focused on the work you forget why you started.',
        upgradePath: 'Build flexibility into your structures. The strongest foundations can handle earthquakes. Let your creations evolve without feeling like you\'re abandoning them.'
    },
    'The Signal Jammer': {
        coreDirective: 'You intercept, decode, and remix information streams. Your mind moves faster than most can track. You see possibilities in combinations others miss and can hold multiple contradictions without breaking.',
        shadowPattern: 'Spreading your signal too thin. Getting so caught in pattern-recognition you forget to commit. Using cleverness to avoid depth.',
        upgradePath: 'Choose a frequency and amplify it. Your breadth is a gift, but mastery requires sustained focus. Learn to go deep without feeling trapped.'
    },
    'The Memory Keeper': {
        coreDirective: 'You hold the emotional record of your lineage. Your sensitivity isn\'t weakness—it\'s a specialized instrument for reading what matters most. You create safety for others to be vulnerable.',
        shadowPattern: 'Getting lost in nostalgia instead of learning from the past. Protecting others at the cost of your own boundaries. Letting mood swings dictate your actions.',
        upgradePath: 'Honor your emotional intelligence without being ruled by it. The past informs you; it doesn\'t own you. Learn to hold space for others without absorbing their weight.'
    },
    'The Beacon': {
        coreDirective: 'You\'re meant to be seen. Your authenticity gives others permission to step into their light. Leadership isn\'t about ego for you—it\'s about magnetic presence that elevates the collective.',
        shadowPattern: 'Needing constant validation to feel real. Performing rather than being. Making everything about you when the moment requires stepping back.',
        upgradePath: 'Your light shines brightest when you forget to perform. Confidence without the need for applause is your final boss. Learn to celebrate others without dimming yourself.'
    },
    'The Systems Analyst': {
        coreDirective: 'You see the glitches in broken systems. Your precision and craft turn chaos into order. Where others see mess, you see patterns waiting for optimization.',
        shadowPattern: 'Perfectionism that prevents you from shipping. Critical eye that sees flaws but misses beauty. Getting stuck in analysis paralysis.',
        upgradePath: 'Done beats perfect. Your high standards are a gift, but they can\'t be a prison. Practice shipping messy v1.0 and iterating. Excellence is a practice, not a permanent state.'
    },
    'The Diplomat': {
        coreDirective: 'You navigate the space between opposing forces. Your gift is seeing all sides and finding the hidden third option. You create bridges where others see only borders.',
        shadowPattern: 'Shape-shifting to keep peace at the cost of your own truth. Getting stuck in endless deliberation. Avoiding necessary conflict in service of harmony.',
        upgradePath: 'Real balance includes your needs in the equation. Sometimes choosing a side IS the balanced move. Learn to make decisions without needing everyone\'s approval.'
    },
    'The Shadow Operative': {
        coreDirective: 'You work in depth, not breadth. Your power comes from going all the way into what others avoid—uncomfortable truths, taboo topics, the underworld of human experience. Transformation is your domain.',
        shadowPattern: 'Using intensity to control or manipulate. Creating drama to feel alive. Testing others\' loyalty until you prove they\'ll leave.',
        upgradePath: 'Your depth is magnetic, but it can\'t be weaponized. Learn to trust without testing. Your power grows when you stop proving it.'
    },
    'The Scout': {
        coreDirective: 'You\'re built for expansion. Your job is to explore new territory—physical, mental, philosophical—and report back. Your optimism and broad vision keep others from getting stuck in the weeds.',
        shadowPattern: 'Chasing the next thing before integrating the current thing. Using philosophy to bypass embodiment. Promising more than you can deliver.',
        upgradePath: 'Adventure includes depth, not just distance. The most interesting territory might be right where you are, explored fully. Learn to arrive without losing your sense of exploration.'
    },
    'The Architect': {
        coreDirective: 'You build legacy-level structures. Your gift is long-term vision paired with relentless execution. While others sprint, you\'re running a marathon with a blueprint.',
        shadowPattern: 'Sacrificing present joy for future security. Letting duty override desire. Becoming so focused on the summit you forget to enjoy the climb.',
        upgradePath: 'Success without fulfillment is just an impressive prison. Build space for play into your structures. Authority is earned through mastery AND humanity.'
    },
    'The Hacker': {
        coreDirective: 'You see through the code of consensus reality. Your rebellion isn\'t just emotional—it\'s philosophical. You challenge systems not to destroy but to evolve them beyond their current limits.',
        shadowPattern: 'Contrarian for its own sake. Detaching from emotion to feel safe. Belonging to no tribe because you\'re too busy critiquing all of them.',
        upgradePath: 'Your vision needs grounding in relationship. The future you see requires collaboration, not just broadcasting. Learn to be part of communities without feeling like you\'re selling out.'
    },
    'The Dream Diver': {
        coreDirective: 'You swim in the collective unconscious. Your empathy and imagination let you channel what wants to emerge. You dissolve boundaries to access universal truths.',
        shadowPattern: 'Escaping into fantasy when reality gets harsh. Absorbing everyone\'s emotional debris. Martyrdom disguised as compassion.',
        upgradePath: 'Boundaries don\'t block your magic—they focus it. Saying no to what\'s not yours to carry frees you to say yes to your actual gifts. Ground your vision in action.'
    }
};

// === EDITABLE TEXT: END ===

// ============================================
// STATE & GLOBAL VARIABLES
// ============================================

let currentProfile = null;
let horoscopeVariant = 0;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Determine zodiac sign from date
 */
function getZodiacSign(month, day) {
    const dateNum = month * 100 + day;

    for (const [key, data] of Object.entries(ZODIAC_DATA)) {
        const { start, end } = data.dates;
        const startNum = start.month * 100 + start.day;
        const endNum = end.month * 100 + end.day;

        if (startNum > endNum) {
            if (dateNum >= startNum || dateNum <= endNum) {
                return key;
            }
        } else {
            if (dateNum >= startNum && dateNum <= endNum) {
                return key;
            }
        }
    }

    return 'aries';
}

/**
 * Get current season based on month
 */
function getSeason(month) {
    if (month >= 3 && month <= 5) return 'Spring';
    if (month >= 6 && month <= 8) return 'Summer';
    if (month >= 9 && month <= 11) return 'Autumn';
    return 'Winter';
}

/**
 * Seeded random number generator
 */
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

/**
 * Get random item from array
 */
function getRandomFromArray(array, seed) {
    const index = Math.floor(seededRandom(seed) * array.length);
    return array[index];
}

/**
 * Format date for display
 */
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ============================================
// PROFILE GENERATION
// ============================================

/**
 * Build complete user profile
 */
function buildProfile(name, dob, time, place) {
    const date = new Date(dob);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const signKey = getZodiacSign(month, day);
    const signData = ZODIAC_DATA[signKey];
    const archetypeData = ARCHETYPE_DATA[signData.archetype];
    const triadData = SIGN_TRIADS[signData.name];
    
    // Get current temporal influences
    const now = new Date();
    const hour = now.getHours();
    const dayOfWeek = now.getDay();
    const currentMonth = now.getMonth() + 1;
    const season = getSeason(currentMonth);
    
    return {
        name: name || 'Wanderer',
        dob: date,
        time: time || null,
        place: place || null,
        sunSign: signData.name,
        sunSymbol: signData.symbol,
        element: signData.element,
        modality: signData.modality,
        archetype: signData.archetype,
        elementText: ELEMENT_TEXT[signData.element],
        modalityText: MODALITY_TEXT[signData.modality],
        coreDirective: archetypeData.coreDirective,
        shadowPattern: archetypeData.shadowPattern,
        upgradePath: archetypeData.upgradePath,
        // Triad data
        physicalTrait: triadData.physical.trait,
        physicalVirtue: triadData.physical.virtue,
        spiritualTrait: triadData.spiritual.trait,
        spiritualVirtue: triadData.spiritual.virtue,
        psychologicalTrait: triadData.psychological.trait,
        psychologicalVirtue: triadData.psychological.virtue,
        // Temporal influences
        hourTrait: HOURLY_VIRTUES[hour].trait,
        hourVirtue: HOURLY_VIRTUES[hour].virtue,
        dayTrait: DAILY_VIRTUES[dayOfWeek].trait,
        dayVirtue: DAILY_VIRTUES[dayOfWeek].virtue,
        dayName: DAILY_VIRTUES[dayOfWeek].day,
        seasonTrait: SEASONAL_VIRTUES[season].trait,
        seasonVirtue: SEASONAL_VIRTUES[season].virtue,
        seasonName: season
    };
}

// ============================================
// HOROSCOPE GENERATION
// ============================================

/**
 * Generate comprehensive horoscope reading
 */
function generateHoroscope(profile, variant = 0) {
    const today = new Date();
    const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const seed = dateSeed + variant;
    
    // Opening based on hour virtue
    const opening = `The hour of ${profile.hourTrait} calls forth the virtue of ${profile.hourVirtue}. `;
    
    // Day influence
    const dayInfluence = `This ${profile.dayName} carries the energy of ${profile.dayTrait}, guided by ${profile.dayVirtue}. `;
    
    // Season influence
    const seasonInfluence = `${profile.seasonName}'s essence of ${profile.seasonTrait} amplifies your path toward ${profile.seasonVirtue}. `;
    
    // Sign-specific wisdom
    const signWisdom = generateSignWisdom(profile, seed);
    
    // Archetype guidance
    const archetypeGuidance = `Your ${profile.archetype} nature resonates with ${profile.element} energy—${getElementAction(profile.element, seed)}`;
    
    // Call to action using triad virtues
    const action = `\n\nAzeban whispers: Channel your ${profile.physicalVirtue} through action, deepen your ${profile.spiritualVirtue} through reflection, and honor your ${profile.psychologicalVirtue} through awareness.`;
    
    return `${opening}${dayInfluence}${seasonInfluence}\n\n${signWisdom}\n\n${archetypeGuidance}${action}`;
}

/**
 * Generate sign-specific wisdom
 */
function generateSignWisdom(profile, seed) {
    const wisdomTemplates = {
        Fire: [
            'Your flames burn brightest when directed with purpose.',
            'The forge of action awaits your spark.',
            'Let your courage illuminate the path ahead.',
            'Your passion can transform resistance into momentum.'
        ],
        Earth: [
            'Ground yourself in what is real and tangible.',
            'Build today what will stand tomorrow.',
            'Your steadiness is the anchor others need.',
            'Trust the slow growth of deep roots.'
        ],
        Air: [
            'Your thoughts weave patterns that others cannot yet see.',
            'Communication bridges the worlds within and without.',
            'Let your ideas take flight on today\'s currents.',
            'The connections you make ripple further than you know.'
        ],
        Water: [
            'Dive deep into the emotional currents flowing today.',
            'Your intuition reads the tides before they turn.',
            'Flow around obstacles while maintaining your essence.',
            'The depths you navigate reveal hidden treasures.'
        ]
    };
    
    return getRandomFromArray(wisdomTemplates[profile.element], seed);
}

/**
 * Get element-specific action
 */
function getElementAction(element, seed) {
    const actions = {
        Fire: ['take bold action', 'initiate the change', 'lead with courage', 'spark transformation'],
        Earth: ['build something lasting', 'tend to what matters', 'create stability', 'manifest the vision'],
        Air: ['share your insights', 'connect the dots', 'communicate truth', 'bridge understanding'],
        Water: ['honor your feelings', 'trust your intuition', 'nurture connection', 'flow with change']
    };
    
    return getRandomFromArray(actions[element], seed) + '.';
}

// ============================================
// CHART GENERATION (SVG)
// ============================================

/**
 * Generate zodiac wheel chart
 */
function generateChart(profile) {
    const svg = document.getElementById('inspire-horoscope-chart');
    svg.innerHTML = '';
    
    const signs = Object.values(ZODIAC_DATA);
    const centerX = 200;
    const centerY = 200;
    const radius = 160;
    
    // Background circle
    const bgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bgCircle.setAttribute('cx', centerX);
    bgCircle.setAttribute('cy', centerY);
    bgCircle.setAttribute('r', radius);
    bgCircle.setAttribute('fill', 'rgba(60, 40, 25, 0.8)');
    bgCircle.setAttribute('stroke', '#d4af37');
    bgCircle.setAttribute('stroke-width', '3');
    svg.appendChild(bgCircle);
    
    // Draw zodiac segments
    signs.forEach((sign, index) => {
        const startAngle = (index * 30 - 90) * (Math.PI / 180);
        const endAngle = ((index + 1) * 30 - 90) * (Math.PI / 180);
        
        const x1 = centerX + radius * Math.cos(startAngle);
        const y1 = centerY + radius * Math.sin(startAngle);
        
        // Segment line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', centerX);
        line.setAttribute('y1', centerY);
        line.setAttribute('x2', x1);
        line.setAttribute('y2', y1);
        line.setAttribute('stroke', '#8b6f47');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
        
        // Highlight current sun sign
        if (sign.name === profile.sunSign) {
            const midAngle = ((index + 0.5) * 30 - 90) * (Math.PI / 180);
            const arcRadius = radius * 0.7;
            
            const arcX1 = centerX + arcRadius * Math.cos(startAngle);
            const arcY1 = centerY + arcRadius * Math.sin(startAngle);
            const arcX2 = centerX + arcRadius * Math.cos(endAngle);
            const arcY2 = centerY + arcRadius * Math.sin(endAngle);
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const d = `M ${centerX} ${centerY} L ${arcX1} ${arcY1} A ${arcRadius} ${arcRadius} 0 0 1 ${arcX2} ${arcY2} Z`;
            path.setAttribute('d', d);
            path.setAttribute('fill', 'rgba(212, 175, 55, 0.4)');
            path.setAttribute('stroke', '#d4af37');
            path.setAttribute('stroke-width', '2');
            svg.appendChild(path);
        }
        
        // Sign symbol
        const symbolAngle = ((index + 0.5) * 30 - 90) * (Math.PI / 180);
        const symbolRadius = radius * 0.75;
        const symbolX = centerX + symbolRadius * Math.cos(symbolAngle);
        const symbolY = centerY + symbolRadius * Math.sin(symbolAngle);
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', symbolX);
        text.setAttribute('y', symbolY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('font-size', '24');
        text.setAttribute('fill', sign.name === profile.sunSign ? '#d4af37' : '#cd7f32');
        text.setAttribute('font-weight', sign.name === profile.sunSign ? 'bold' : 'normal');
        text.textContent = sign.symbol;
        svg.appendChild(text);
    });
    
    // Center circle
    const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    centerCircle.setAttribute('cx', centerX);
    centerCircle.setAttribute('cy', centerY);
    centerCircle.setAttribute('r', '45');
    centerCircle.setAttribute('fill', 'rgba(205, 127, 50, 0.6)');
    centerCircle.setAttribute('stroke', '#d4af37');
    centerCircle.setAttribute('stroke-width', '3');
    svg.appendChild(centerCircle);
    
    // Center sun symbol
    const centerText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    centerText.setAttribute('x', centerX);
    centerText.setAttribute('y', centerY);
    centerText.setAttribute('text-anchor', 'middle');
    centerText.setAttribute('dominant-baseline', 'middle');
    centerText.setAttribute('font-size', '36');
    centerText.setAttribute('fill', '#f4e4c1');
    centerText.textContent = '☉';
    svg.appendChild(centerText);
}

// ============================================
// DOM MANIPULATION
// ============================================

/**
 * Display profile results
 */
function displayProfile(profile) {
    // Azeban's greeting
    const greetings = [
        `Greetings, ${profile.name}. The stars have spoken, and I, Azeban, shall interpret their wisdom.`,
        `Welcome, ${profile.name}. Your cosmic blueprint reveals itself through the ancient patterns.`,
        `Ah, ${profile.name}. The celestial wheel turns, and your path becomes clear.`,
        `${profile.name}, seeker of truth. Let us explore what the cosmos has written for you.`
    ];
    document.getElementById('inspire-horoscope-azeban-greeting').textContent = 
        getRandomFromArray(greetings, Date.now());
    
    // Identity Panel
    document.getElementById('inspire-horoscope-sun-sign').innerHTML = 
        `${profile.sunSymbol} ${profile.sunSign}`;
    
    document.getElementById('inspire-horoscope-element').textContent = 
        profile.element;
    
    document.getElementById('inspire-horoscope-modality').textContent = 
        profile.modality;
    
    document.getElementById('inspire-horoscope-element-text').textContent = 
        profile.elementText;
    
    document.getElementById('inspire-horoscope-modality-text').textContent = 
        profile.modalityText;
    
    // Triad Panel
    document.getElementById('inspire-horoscope-physical-trait').textContent = 
        profile.physicalTrait;
    document.getElementById('inspire-horoscope-physical-virtue').textContent = 
        profile.physicalVirtue;
    
    document.getElementById('inspire-horoscope-spiritual-trait').textContent = 
        profile.spiritualTrait;
    document.getElementById('inspire-horoscope-spiritual-virtue').textContent = 
        profile.spiritualVirtue;
    
    document.getElementById('inspire-horoscope-psychological-trait').textContent = 
        profile.psychologicalTrait;
    document.getElementById('inspire-horoscope-psychological-virtue').textContent = 
        profile.psychologicalVirtue;
    
    // Archetype Panel
    document.getElementById('inspire-horoscope-archetype-name').textContent = 
        profile.archetype;
    
    document.getElementById('inspire-horoscope-core-directive').textContent = 
        profile.coreDirective;
    
    document.getElementById('inspire-horoscope-shadow-pattern').textContent = 
        profile.shadowPattern;
    
    document.getElementById('inspire-horoscope-upgrade-path').textContent = 
        profile.upgradePath;
    
    // Oracle Reading Panel
    const today = new Date();
    document.getElementById('inspire-horoscope-date').textContent = 
        formatDate(today);
    
    // Temporal influences
    document.getElementById('inspire-horoscope-hour-info').textContent = 
        `${profile.hourTrait} / ${profile.hourVirtue}`;
    
    document.getElementById('inspire-horoscope-day-info').textContent = 
        `${profile.dayTrait} / ${profile.dayVirtue}`;
    
    document.getElementById('inspire-horoscope-season-info').textContent = 
        `${profile.seasonTrait} / ${profile.seasonVirtue}`;
    
    const horoscope = generateHoroscope(profile, horoscopeVariant);
    document.getElementById('inspire-horoscope-reading').textContent = horoscope;
    
    // Generate Chart
    generateChart(profile);
    
    // Show results, hide form
    document.getElementById('inspire-horoscope-form-container').style.display = 'none';
    document.getElementById('inspire-horoscope-results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('inspire-horoscope-results').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// ============================================
// EVENT HANDLERS
// ============================================

/**
 * Handle form submission
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('inspire-horoscope-name').value.trim();
    const dob = document.getElementById('inspire-horoscope-dob').value;
    const time = document.getElementById('inspire-horoscope-time').value;
    const place = document.getElementById('inspire-horoscope-place').value.trim();
    
    if (!dob) {
        alert('Please enter your date of birth to receive your cosmic blueprint.');
        return;
    }
    
    currentProfile = buildProfile(name, dob, time, place);
    horoscopeVariant = 0;
    
    displayProfile(currentProfile);
}

/**
 * Handle change info button
 */
function handleChangeInfo() {
    document.getElementById('inspire-horoscope-results').style.display = 'none';
    document.getElementById('inspire-horoscope-form-container').style.display = 'block';
    
    document.getElementById('inspire-horoscope-form-container').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

/**
 * Handle regenerate horoscope
 */
function handleRegenerate() {
    if (!currentProfile) return;
    
    horoscopeVariant++;
    
    // Update temporal influences (in case time has changed)
    const now = new Date();
    const hour = now.getHours();
    const dayOfWeek = now.getDay();
    const month = now.getMonth() + 1;
    const season = getSeason(month);
    
    currentProfile.hourTrait = HOURLY_VIRTUES[hour].trait;
    currentProfile.hourVirtue = HOURLY_VIRTUES[hour].virtue;
    currentProfile.dayTrait = DAILY_VIRTUES[dayOfWeek].trait;
    currentProfile.dayVirtue = DAILY_VIRTUES[dayOfWeek].virtue;
    currentProfile.dayName = DAILY_VIRTUES[dayOfWeek].day;
    currentProfile.seasonTrait = SEASONAL_VIRTUES[season].trait;
    currentProfile.seasonVirtue = SEASONAL_VIRTUES[season].virtue;
    currentProfile.seasonName = season;
    
    // Update temporal display
    document.getElementById('inspire-horoscope-hour-info').textContent = 
        `${currentProfile.hourTrait} / ${currentProfile.hourVirtue}`;
    
    document.getElementById('inspire-horoscope-day-info').textContent = 
        `${currentProfile.dayTrait} / ${currentProfile.dayVirtue}`;
    
    document.getElementById('inspire-horoscope-season-info').textContent = 
        `${currentProfile.seasonTrait} / ${currentProfile.seasonVirtue}`;
    
    const horoscope = generateHoroscope(currentProfile, horoscopeVariant);
    document.getElementById('inspire-horoscope-reading').textContent = horoscope;
    
    // Fade animation
    const readingEl = document.getElementById('inspire-horoscope-reading');
    readingEl.style.opacity = '0.4';
    setTimeout(() => {
        readingEl.style.opacity = '1';
    }, 150);
}

// ============================================
// BACKGROUND MUSIC
// ============================================

/**
 * Initialize and play background music with fade-in effect
 */
function initBackgroundMusic() {
    const audio = document.getElementById('inspire-horoscope-bg-music');
    
    if (!audio) return;
    
    // Set initial volume to 0 for fade-in
    audio.volume = 0;
    
    // Attempt to play the audio
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Autoplay started successfully - fade in the audio
            fadeInAudio(audio, 0.3, 3000); // Fade to volume 0.3 over 3 seconds
        }).catch(error => {
            // Autoplay was prevented - this is normal on many browsers
            // The audio will play on first user interaction
            console.log('🎵 Background music ready - will play on user interaction');
            
            // Add a one-time click listener to start music on first interaction
            const startMusicOnInteraction = () => {
                audio.play().then(() => {
                    fadeInAudio(audio, 0.3, 3000);
                }).catch(err => {
                    console.log('Audio playback failed:', err);
                });
                // Remove listeners after first interaction
                document.removeEventListener('click', startMusicOnInteraction);
                document.removeEventListener('touchstart', startMusicOnInteraction);
            };
            
            document.addEventListener('click', startMusicOnInteraction, { once: true });
            document.addEventListener('touchstart', startMusicOnInteraction, { once: true });
        });
    }
}

/**
 * Fade in audio volume gradually
 * @param {HTMLAudioElement} audio - The audio element
 * @param {number} targetVolume - Target volume (0.0 to 1.0)
 * @param {number} duration - Duration of fade in milliseconds
 */
function fadeInAudio(audio, targetVolume, duration) {
    const steps = 50; // Number of volume increments
    const stepDuration = duration / steps;
    const volumeIncrement = targetVolume / steps;
    let currentStep = 0;
    
    const fadeInterval = setInterval(() => {
        currentStep++;
        audio.volume = Math.min(volumeIncrement * currentStep, targetVolume);
        
        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            console.log('🎵 Background music faded in successfully');
        }
    }, stepDuration);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inspire-horoscope-form');
    form.addEventListener('submit', handleFormSubmit);
    
    const changeInfoBtn = document.getElementById('inspire-horoscope-change-info');
    changeInfoBtn.addEventListener('click', handleChangeInfo);
    
    const regenerateBtn = document.getElementById('inspire-horoscope-regenerate');
    regenerateBtn.addEventListener('click', handleRegenerate);
    
    // Initialize background music with fade-in
    initBackgroundMusic();
    
    console.log('🌙 INSPIRE COSMIC BLUEPRINT initialized - Azeban awaits your journey');
});
