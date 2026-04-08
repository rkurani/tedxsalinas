export interface Speaker {
  id: string;
  name: string;
  talkTitle: string;
  title: string;
  bio: string;
  youtubeUrl: string;
  videoId: string;
  views?: string;
}

export const speakers: Speaker[] = [
  {
    id: "ravi-kurani",
    name: "Ravi Kurani",
    talkTitle: "How this ex-pool boy is changing water",
    title: "CEO of Sutro",
    bio: "Ravi founded Sutro, a startup building a platform around water monitoring and evaluation. His work sits at the intersection of hardware, software, and environmental sustainability, making water quality data accessible and actionable.",
    youtubeUrl: "https://www.youtube.com/watch?v=CwuJnr-iWcY",
    videoId: "CwuJnr-iWcY",
    views: "13K",
  },
  {
    id: "larry-rosen",
    name: "Larry C. Rosen",
    talkTitle: "The Secret to Understanding Humans",
    title: "Author & Speaker",
    bio: "Larry C. Rosen explores the fundamental drivers of human behavior, arguing that while our actions are complex, our motivations are simple and universally shared.",
    youtubeUrl: "https://www.youtube.com/watch?v=RSlc9IxdBw8",
    videoId: "RSlc9IxdBw8",
    views: "1.7M",
  },
  {
    id: "marla-mervis-hartmann",
    name: "Marla Mervis-Hartmann",
    talkTitle: "The Secret Ingredient to Feeling Good in your Body",
    title: "Body Image Coach & Speaker",
    bio: "Marla Mervis-Hartmann helps women with body image issues and works as a professional coach and speaker, guiding people toward a healthier relationship with their bodies.",
    youtubeUrl: "https://www.youtube.com/watch?v=nEVjlT9B6dU",
    videoId: "nEVjlT9B6dU",
    views: "277K",
  },
  {
    id: "neil-brown",
    name: "Neil D Brown",
    talkTitle: "Turning Parent-Teen Stress Into Parent-Teen Success",
    title: "Family Therapist & Author",
    bio: "Neil D. Brown, LCSW, is a family therapist, author, and podcast host. His work focuses on understanding family dynamics and helping individuals navigate complex relationships with compassion and clarity.",
    youtubeUrl: "https://www.youtube.com/watch?v=VzflpW91yMg",
    videoId: "VzflpW91yMg",
    views: "79K",
  },
  {
    id: "kathy-gruver",
    name: "Kathy Gruver",
    talkTitle: "Trapeze, Travel and Pink Slips: Little Lessons for a Bigger Life",
    title: "Motivational Health Speaker",
    bio: "Dr. Kathy Gruver has earned her PhD in Natural Health and has authored five books. She is a renowned motivational speaker on the intersection of health, mindfulness, and personal empowerment.",
    youtubeUrl: "https://www.youtube.com/watch?v=abMj0hCGEic",
    videoId: "abMj0hCGEic",
    views: "77K",
  },
  {
    id: "robbie-tripp",
    name: "Robbie Tripp",
    talkTitle: "Why Millennial Narcissists Are Changing The World",
    title: "Author & Cultural Commentator",
    bio: "Robbie Tripp challenges the narrative around millennials, making the case that the generation's so-called narcissism is actually driving meaningful change in the world.",
    youtubeUrl: "https://www.youtube.com/watch?v=RXs_X3RAxPc",
    videoId: "RXs_X3RAxPc",
    views: "36K",
  },
  {
    id: "julie-gordon-white",
    name: "Julie Gordon-White",
    talkTitle: "Why Women Entrepreneurs Need to Raise Girl Entrepreneurs",
    title: "Entrepreneur & Author",
    bio: "Julie Gordon-White is an award-winning entrepreneur and bestselling author who advocates for empowering the next generation of women leaders through entrepreneurship.",
    youtubeUrl: "https://www.youtube.com/watch?v=XXN7kKjOEOA",
    videoId: "XXN7kKjOEOA",
    views: "6K",
  },
  {
    id: "ahad-anwar",
    name: "Ahad Anwar",
    talkTitle: "Life On The Other Side of Fear",
    title: "Exchange Student & Cultural Ambassador",
    bio: "Ahad Anwar is a US Department of State sponsored high school foreign exchange student from Lahore, Pakistan. His journey bridges cultures and challenges stereotypes.",
    youtubeUrl: "https://www.youtube.com/watch?v=SpT0sMzi1vk",
    videoId: "SpT0sMzi1vk",
    views: "1.5K",
  },
  {
    id: "candra-canning",
    name: "Candra Canning",
    talkTitle: "Discover Backyard AWE!",
    title: "President & Founder, Live Bright Now",
    bio: "Candra Canning is a culture coach for Fortune 500 companies as President and Founder of Live Bright Now. She helps organizations build thriving workplace cultures.",
    youtubeUrl: "https://www.youtube.com/watch?v=Jk0z0KJhxPE",
    videoId: "Jk0z0KJhxPE",
    views: "739",
  },
  {
    id: "david-westrick",
    name: "David Westrick",
    talkTitle: "Serving and Loving Mankind — A Police Chief's Perspective",
    title: "Police Chief",
    bio: "David Westrick shares his perspective on community policing and the importance of serving and loving the communities that law enforcement officers are sworn to protect.",
    youtubeUrl: "https://www.youtube.com/watch?v=9h7Xh3FyODE",
    videoId: "9h7Xh3FyODE",
    views: "2.7K",
  },
  {
    id: "malcolm-burt",
    name: "Malcolm Burt",
    talkTitle: "What's wrong with reality?",
    title: "Speaker & Thinker",
    bio: "Malcolm Burt challenges our assumptions about reality and invites the audience to question the frameworks through which we interpret the world around us.",
    youtubeUrl: "https://www.youtube.com/watch?v=HToeyaKnQ4g",
    videoId: "HToeyaKnQ4g",
    views: "3K",
  },
  {
    id: "shrina-kurani",
    name: "Shrina Kurani",
    talkTitle: "How your dinner could save the world",
    title: "Engineer & Sustainability Advocate",
    bio: "Shrina Kurani explores the intersection of food systems and sustainability, making the case that what we choose to eat has the power to drive meaningful environmental change.",
    youtubeUrl: "https://www.youtube.com/watch?v=8AChwiToPgg",
    videoId: "8AChwiToPgg",
    views: "2.7K",
  },
];

export const eventInfo = {
  name: "TEDx Salinas",
  tagline: "Ideas Worth Spreading",
  date: "February 25, 2017",
  venue: "Santa Lucia Ballroom",
  address: "940 North Main Street, Salinas, CA 93906",
  description:
    "Salinas is a place full of rich history, agriculture, literature, and incredible community members. What the rest of the world sees though, is its struggles with poverty, homelessness, and gang violence. TED and TEDx are known for their ability to bring together communities of incredible game changers and global thinkers, and this is something that Salinas truly needs to show the world that it is so much more than its negative stereotype.",
};
