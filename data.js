// ============================================
// MINISTRY IMPACT PROJECTS DATA
// ============================================
const impactProjects = [
    {
        title: "School Renovation in Ghana",
        location: "Akyease/Dida, Ghana",
        description: "We transformed Akyease/Dida Methodist Basic School, bringing hope and opportunity to hundreds of children. Our team renovated classrooms, provided educational supplies, desks, and created a safe learning environment where young minds can flourish.",
        stats: [
            { number: "500+", label: "Students Impacted" },
            { number: "12", label: "Classrooms Renovated" },
            { number: "200+", label: "Desks Provided" }
        ],
        tag: "Education",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800"
    },
    {
        title: "Relief Barrels to Jamaica",
        location: "Jamaica",
        description: "Sent multiple barrels filled with essential supplies, clothing, food, and educational materials to families in need across Jamaica. Each barrel represents love, hope, and tangible support for our brothers and sisters in Christ.",
        stats: [
            { number: "25+", label: "Barrels Sent" },
            { number: "100+", label: "Families Helped" },
            { number: "1000+", label: "Items Donated" }
        ],
        tag: "Relief",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800"
    },
    {
        title: "Supporting the Chrysalis Center",
        location: "Hartford, Connecticut",
        description: "Partnered with the Chrysalis Center to support women in recovery and their children. Our donation helps provide residential treatment, recovery programs, childcare services, and essential resources for women overcoming substance abuse and rebuilding their lives with dignity and hope.",
        stats: [
            { number: "50+", label: "Women & Children" },
            { number: "18", label: "Month Program" },
            { number: "100%", label: "Community Impact" }
        ],
        tag: "Recovery",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800"
    },
    {
        title: "Youth Ministry",
        location: "Connecticut & Worldwide",
        description: "Empowering the next generation to lead with purpose and faith. Our youth ministry provides mentorship, leadership training, and a supportive community where young people can grow in their spiritual journey and develop their unique God-given talents.",
        stats: [
            { number: "200+", label: "Youth Mentored" },
            { number: "15", label: "Annual Events" },
            { number: "50+", label: "Youth Leaders" }
        ],
        tag: "Youth",
        image: "https://images.unsplash.com/photo-1523248189027-c70d00a1127a?w=800"
    }
];

// ============================================
// TESTIMONIALS DATA
// ============================================
const testimonials = [
    {
        text: "Dimension Abundant Life Ministries renovated our school and gave our children hope. The students now have proper desks, books, and a beautiful learning environment. God bless you all!",
        author: "School Administrator",
        location: "Akyease/Dida, Ghana",
        initial: "S"
    },
    {
        text: "The barrel we received was a blessing beyond measure. It arrived exactly when we needed it most. Thank you for remembering us and for your faithful support!",
        author: "Community Member",
        location: "Jamaica",
        initial: "M"
    },
    {
        text: "Your generous donation to the Chrysalis Center helps us provide hope and healing to women and their children. Thank you for believing in second chances and supporting our recovery community!",
        author: "Chrysalis Center Staff",
        location: "Hartford, CT",
        initial: "C"
    },
    {
        text: "This ministry has been a lifeline for our family. The monthly food distribution helped us through difficult times, and the love shown by the volunteers reminds us that we're not alone.",
        author: "Local Family",
        location: "Connecticut",
        initial: "J"
    },
    {
        text: "Seeing the smiles on children's faces when they received school supplies was priceless. This ministry truly changes lives and spreads God's love worldwide.",
        author: "Volunteer",
        location: "Dimension Team",
        initial: "A"
    }
];

// ============================================
// UPCOMING EVENTS DATA
// ============================================
const upcomingEvents = [
    {
        date: "TBD",
        time: "To Be Determined",
        title: "Family Bingo Night",
        description: "Join us for an exciting evening of bingo, prizes, laughter, and fellowship! Bring the whole family for a night of fun, games, and community. Light refreshments will be served. All ages welcome!",
        tag: "Family Event",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        date: "TBD",
        time: "To Be Determined",
        title: "Outdoor Worship Concert",
        description: "Experience worship under the open sky! Join us for an afternoon of powerful music, testimonies, and celebration. Featuring local worship bands and special guest performers. Bring your lawn chairs and blankets!",
        tag: "Worship",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        date: "TBD",
        time: "To Be Determined",
        title: "Community Health Fair",
        description: "Free health screenings, wellness information, and resources for the whole community. Medical professionals will provide blood pressure checks, health education, and connect families with local health services.",
        tag: "Outreach",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        date: "TBD",
        time: "To Be Determined",
        title: "Youth Leadership Summit",
        description: "Empowering the next generation! A dynamic evening designed for teens and young adults featuring inspiring speakers, leadership workshops, and mentorship opportunities. Pizza and refreshments included!",
        tag: "Youth",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        date: "TBD",
        time: "To Be Determined",
        title: "Mission Trip Preparation Day",
        description: "Preparing for our next international mission! Join us for training, team building, and logistics planning. Open to all interested in joining future mission trips to Ghana, Jamaica, and beyond.",
        tag: "Missions",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        date: "TBD",
        time: "To Be Determined",
        title: "Summer BBQ & Baptism Service",
        description: "Celebrate faith and community at our annual summer BBQ! Enjoy great food, games, and witness baptisms at a local park. This is a wonderful opportunity to invite friends and neighbors to experience our church family.",
        tag: "Celebration",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
];

// ============================================
// GALLERY IMAGES DATA
// ============================================
const galleryImages = [
    // School Renovation in Ghana
    { url: "images/IMG-20240520-WA0001.jpg", caption: "Ghana School Renovation", category: "School Renovation in Ghana" },
    { url: "images/IMG-20240520-WA0002.jpg", caption: "Transformation in Progress", category: "School Renovation in Ghana" },
    { url: "images/IMG-20251113-WA0000.jpg", caption: "Impactful Work", category: "School Renovation in Ghana" },
    { url: "images/IMG-20251113-WA0001.jpg", caption: "Classroom Revitalization", category: "School Renovation in Ghana" },
    { url: "images/IMG-20251113-WA0002.jpg", caption: "A Brighter Future", category: "School Renovation in Ghana" },
    { url: "images/school1.jpg", caption: "Community Support", category: "School Renovation in Ghana" },
    { url: "images/school2.jpg", caption: "Completed Section", category: "School Renovation in Ghana" },

    // Relief Barrels to Jamaica
    { url: "images/20251122_105733.jpg", caption: "Supplies for Jamaica", category: "Relief Barrels to Jamaica" },
    { url: "images/20251122_105736.jpg", caption: "Packing Relief Barrels", category: "Relief Barrels to Jamaica" },
    { url: "images/20251122_105740.jpg", caption: "Community Donations", category: "Relief Barrels to Jamaica" },
    { url: "images/20251122_105747.jpg", caption: "Loading Essential Goods", category: "Relief Barrels to Jamaica" },
    { url: "images/20251122_105819.jpg", caption: "Mission of Love", category: "Relief Barrels to Jamaica" },

    // Supporting the Chrysalis Center
    { url: "images/525719304_1150879230407603_4997323419368997525_n.jpg", caption: "Partnership for Recovery", category: "Supporting the Chrysalis Center" },
    { url: "images/526322233_1150879200407606_9136147409454373293_n.jpg", caption: "Empowering Women", category: "Supporting the Chrysalis Center" },
    { url: "images/526367260_1150879460407580_181267661225240658_n.jpg", caption: "Hope and Healing", category: "Supporting the Chrysalis Center" },
    { url: "images/526383774_1150877350407791_355269736133204588_n.jpg", caption: "Community Strength", category: "Supporting the Chrysalis Center" }
];

// ============================================
// GIVING STATISTICS DATA
// ============================================
const givingStats = [
    { number: "4", label: "Impact Areas" },
    { number: "1000+", label: "Lives Touched" },
    { number: "$50K+", label: "Given in Aid" }
];
