export interface LiteraryAnalysis {
  id: string;
  number: number;
  title: string;
  author: string;
  period: string;
  lens: string;
  lensDefinition: string;
  visualDescription: string;
  imagePlaceholder: string;
  excerpt: string;
  keyThemes: string[];
  fullAnalysis: {
    introduction: string;
    lensApplication: string;
    textualEvidence: string;
    conclusion: string;
  };
}

const loremIntro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
const loremLens = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.";
const loremEvidence = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
const loremConclusion = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.";

export const analyses: LiteraryAnalysis[] = [
  {
    id: "1",
    number: 1,
    title: "Literary Masterpiece I (Sample Title)",
    author: "Author Placeholder I",
    period: "Historical Period I (e.g. Ancient Era)",
    lens: "Archetypal / Mythological Criticism",
    lensDefinition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    visualDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    imagePlaceholder: "/images/analyses/placeholder-1.svg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    keyThemes: ["Theme Alpha", "Theme Beta", "Theme Gamma"],
    fullAnalysis: {
      introduction: loremIntro,
      lensApplication: loremLens,
      textualEvidence: loremEvidence,
      conclusion: loremConclusion
    }
  },
  {
    id: "2",
    number: 2,
    title: "Literary Masterpiece II (Sample Title)",
    author: "Author Placeholder II",
    period: "Historical Period II (e.g. Classical Era)",
    lens: "Formalist / Structuralist Criticism",
    lensDefinition: "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
    visualDescription: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
    imagePlaceholder: "/images/analyses/placeholder-2.svg",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    keyThemes: ["Theme Delta", "Theme Epsilon", "Theme Zeta"],
    fullAnalysis: {
      introduction: loremIntro,
      lensApplication: loremLens,
      textualEvidence: loremEvidence,
      conclusion: loremConclusion
    }
  },
  {
    id: "3",
    number: 3,
    title: "Literary Masterpiece III (Sample Title)",
    author: "Author Placeholder III",
    period: "Historical Period III (e.g. Medieval Era)",
    lens: "Moral / Philosophical Criticism",
    lensDefinition: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.",
    visualDescription: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.",
    imagePlaceholder: "/images/analyses/placeholder-3.svg",
    excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    keyThemes: ["Theme Eta", "Theme Theta", "Theme Iota"],
    fullAnalysis: {
      introduction: loremIntro,
      lensApplication: loremLens,
      textualEvidence: loremEvidence,
      conclusion: loremConclusion
    }
  },
  {
    id: "4",
    number: 4,
    title: "Literary Masterpiece IV (Sample Title)",
    author: "Author Placeholder IV",
    period: "Historical Period IV (e.g. Renaissance)",
    lens: "Psychological / Psychoanalytic Criticism",
    lensDefinition: "In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam. Volutpat. Condimentum vitae, feugiat nec, diam.",
    visualDescription: "In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam. Volutpat.",
    imagePlaceholder: "/images/analyses/placeholder-4.svg",
    excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    keyThemes: ["Theme Kappa", "Theme Lambda", "Theme Mu"],
    fullAnalysis: {
      introduction: loremIntro,
      lensApplication: loremLens,
      textualEvidence: loremEvidence,
      conclusion: loremConclusion
    }
  },
  {
    id: "5",
    number: 5,
    title: "Literary Masterpiece V (Sample Title)",
    author: "Author Placeholder V",
    period: "Historical Period V (e.g. Early Modern)",
    lens: "Historical-Biographical Criticism",
    lensDefinition: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    visualDescription: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in.",
    imagePlaceholder: "/images/analyses/placeholder-5.svg",
    excerpt: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    keyThemes: ["Theme Nu", "Theme Xi", "Theme Omicron"],
    fullAnalysis: {
      introduction: loremIntro,
      lensApplication: loremLens,
      textualEvidence: loremEvidence,
      conclusion: loremConclusion
    }
  },
  {
    id: "6",
    number: 6,
    title: "Literary Masterpiece VI (Sample Title)",
    author: "Author Placeholder VI",
    period: "Historical Period VI (e.g. 19th Century)",
    lens: "Feminist / Gender Criticism",
    lensDefinition: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.",
    visualDescription: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    imagePlaceholder: "/images/analyses/placeholder-6.svg",
    excerpt: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.",
    keyThemes: ["Theme Pi", "Theme Rho", "Theme Sigma"],
    fullAnalysis: {
      introduction: loremIntro,
      lensApplication: loremLens,
      textualEvidence: loremEvidence,
      conclusion: loremConclusion
    }
  },
  {
    id: "7",
    number: 7,
    title: "Literary Masterpiece VII (Sample Title)",
    author: "Author Placeholder VII",
    period: "Historical Period VII (e.g. 20th Century)",
    lens: "Marxist / Socio-Economic Criticism",
    lensDefinition: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam.",
    visualDescription: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.",
    imagePlaceholder: "/images/analyses/placeholder-7.svg",
    excerpt: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.",
    keyThemes: ["Theme Tau", "Theme Upsilon", "Theme Phi"],
    fullAnalysis: {
      introduction: loremIntro,
      lensApplication: loremLens,
      textualEvidence: loremEvidence,
      conclusion: loremConclusion
    }
  }
];
