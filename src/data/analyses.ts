export interface LiteraryCharacter {
  name: string;
  role: string;
}

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
  imageOrientation?: "horizontal" | "vertical";
  pixelBg: string;
  excerpt: string;
  keyThemes: string[];
  characters: LiteraryCharacter[];
  fullAnalysis: {
    introduction: string;
    lensApplication: string;
    textualEvidence: string;
    conclusion: string;
  };
}

const loremConclusion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const analyses: LiteraryAnalysis[] = [
  {
    id: "1",
    number: 1,
    title: "Voice out of the Whirlwind",
    author: "Ancient Hebrew Wisdom Tradition (Book of Job)",
    period: "Ancient Near East (c. 6th to 4th Century BCE)",
    lens: "Ecocritical Lens",
    lensDefinition: "Examining how untamed nature, including wild storms, stars, mountain creatures, and roaring oceans, shows that the universe has immense value and mystery far beyond human comfort or control.",
    visualDescription: "Job kneeling in the dust with skin sores, looking up in awe as a radiant divine light and whirlwind sweep across the field.",
    imagePlaceholder: "/images/literary-pics/voice_whirlwind.jpg",
    imageOrientation: "horizontal",
    pixelBg: "/images/pixel-bg/pixel-whirlwind.svg",
    excerpt: "When Job loses his family, health, and livelihood, his friends claim he must have secretly sinned. Instead of simple answers, a voice speaks directly out of a fierce storm, revealing the vast mystery of the universe.",
    keyThemes: ["Innocence and Suffering", "Humility before Creation", "Limits of Human Understanding"],
    characters: [
      {
        name: "Job",
        role: "A righteous, upright man whose sudden and severe losses lead him to courageously question cosmic justice and human pain."
      },
      {
        name: "The Voice out of the Whirlwind",
        role: "The transcendent divine presence answering not with abstract theology, but with a magnificent survey of wild nature and the cosmos."
      },
      {
        name: "Job's Three Companions (Eliphaz, Bildad, Zophar)",
        role: "Well-meaning friends who rigidly insist that suffering must always be punishment for wrongdoing, offering hollow arguments."
      },
      {
        name: "Elihu",
        role: "The younger observer who silences the older friends and prepares Job's heart to listen to the majesty of the tempest."
      }
    ],
    fullAnalysis: {
      introduction: "In this unforgettable section of the Book of Job, a good and honest man named Job loses everything he cares about for reasons he cannot comprehend. His well-meaning friends insist that the world always rewards good and punishes evil, telling Job he must be hiding some terrible sin. Job refuses to agree to cheap answers because he knows he was faithful. When God finally responds directly out of a roaring whirlwind, the story shifts away from human debates and opens up a breathtaking view of creation.",
      lensApplication: "Through an ecocritical lens, the story turns the usual human-centered worldview completely upside down. Humans often think the earth was built only to serve our convenience. But the Voice asks Job about places where no human ever walks, such as the rain falling in deserted wilderness, the wild mountain goats giving birth in secret crags, and the untamable Leviathan playing in the deep sea. Nature has its own sacred worth and beauty, and realizing this frees humans from the arrogant belief that everything in the cosmos revolves around us.",
      textualEvidence: "Chapters 38 through 41 are filled with vivid nature poetry. The Voice asks Job where he was when the foundations of the earth were laid, who tells the violent ocean waves where to halt, and who provides food for the ravens and wild mountain goats. These questions are not meant to crush Job, but to release him from his anxiety by reminding him that the same caring power that sustains the stars and wild beasts is also present through his darkest days.",
      conclusion: loremConclusion
    }
  },
  {
    id: "2",
    number: 2,
    title: "The Panchatantra",
    author: "Attributed to Pandit Vishnu Sharma",
    period: "Classical India (c. 300 BCE to 300 CE)",
    lens: "Structuralist Lens",
    lensDefinition: "Looking at how the nested 'frame-story' structure (stories woven inside other stories) and universal animal archetypes teach practical everyday wisdom and social survival.",
    visualDescription: "An illustrated book cover showing the clever rabbit standing on a stone well to outsmart the fierce lion, surrounded by forest animals and a crocodile.",
    imagePlaceholder: "/images/literary-pics/panchantantra.jpg",
    imageOrientation: "vertical",
    pixelBg: "/images/pixel-bg/pixel-panchatantra.svg",
    excerpt: "Composed to educate three unruly young princes, these interwoven animal fables teach 'Niti', focusing on how to choose loyal friends, avoid deception, and navigate real-world challenges.",
    keyThemes: ["True and False Friends", "Brains over Pure Brawn", "Street Smarts and Leadership"],
    characters: [
      {
        name: "Pingalaka (The Lion King)",
        role: "The mighty monarch of the jungle who forms an unlikely, noble friendship with a gentle bull."
      },
      {
        name: "Sanjivaka (The Bull)",
        role: "An honest, vegetarian bull whose virtue, hard work, and calm demeanor win the lion's deep trust."
      },
      {
        name: "Damanaka (The Ambitious Jackal)",
        role: "A cunning and manipulative courtier who uses gossip, rumors, and psychological tricks to destroy the king's friendship."
      },
      {
        name: "Karataka (The Cautious Jackal)",
        role: "Damanaka's cautious companion who understands moral principles but lacks the backbone to stop his partner's schemes."
      }
    ],
    fullAnalysis: {
      introduction: "The Panchatantra is one of the most widely traveled story collections in human history. According to tradition, an elderly scholar named Vishnu Sharma was asked to teach three young, rebellious princes who refused to read dry academic textbooks. Rather than lecturing them with rules, he told them gripping, funny stories about forest animals facing real conflicts. The princes learned faster through storytelling than they ever did through memorization.",
      lensApplication: "Using a structuralist lens, we see how the architecture of the book is carefully designed. Stories are nested inside each other like Russian matryoshka dolls, where a character in one tale begins telling another story to prove a point. This interconnected pattern mirrors how human relationships work: every situation has a back-story, and one choice triggers a chain reaction across the entire community. The universal animal archetypes (the proud lion, the wily jackal, the patient turtle) allow readers of any culture to easily recognize human personality types.",
      textualEvidence: "In the famous opening book, 'The Loss of Friends,' a deep bond develops between a noble lion named Pingalaka and an honest grass-eating bull named Sanjivaka. Their partnership brings peace to the entire forest. However, two hungry jackals named Karataka and Damanaka become jealous of their bond and start whispering deceitful rumors into both ears until the friends tragically fight. It serves as a timeless reminder of how toxic gossip can destroy genuine trust.",
      conclusion: loremConclusion
    }
  },
  {
    id: "3",
    number: 3,
    title: "The Ramayana",
    author: "Attributed to Sage Valmiki",
    period: "Ancient Indian Epic (c. 5th to 4th Century BCE)",
    lens: "Archetypal / Mythological Lens",
    lensDefinition: "Analyzing universal mythic patterns, such as the exiled prince, the faithful companion, the hero's quest, and the eternal triumph of cosmic order (Dharma) over destructive chaos.",
    visualDescription: "Prince Rama and Sita arriving in an ornate golden chariot drawn by white horses, welcomed by royal figures and ranks of soldiers.",
    imagePlaceholder: "/images/literary-pics/ramayana.jpg",
    imageOrientation: "horizontal",
    pixelBg: "/images/pixel-bg/pixel-ramayana.svg",
    excerpt: "Prince Rama willingly sacrifices his royal throne to honor his father's promise, heading into fourteen years of forest exile alongside Sita and Lakshmana before battling the demon king Ravana.",
    keyThemes: ["Duty (Dharma) above Comfort", "Devotion and Loyalty", "Triumph of Goodness over Greed"],
    characters: [
      {
        name: "Rama",
        role: "Prince of Ayodhya and the embodiment of righteous conduct (Dharma), who accepts exile without bitterness to honor truth."
      },
      {
        name: "Sita",
        role: "Rama's beloved wife, born of the earth, whose unshakeable dignity, love, and moral strength anchor the entire epic."
      },
      {
        name: "Lakshmana",
        role: "Rama's devoted brother who willingly abandons royal palace life to protect his brother and sister-in-law in the forest."
      },
      {
        name: "Hanuman",
        role: "The devoted vanara warrior whose humility, selfless service, and incredible strength symbolize the power of pure devotion."
      },
      {
        name: "Ravana",
        role: "The brilliant yet ego-blinded ten-headed king of Lanka whose lust and arrogance cause him to kidnap Sita and destroy his own kingdom."
      }
    ],
    fullAnalysis: {
      introduction: "The Ramayana is a cherished epic that has shaped ethical ideals and family values across Asia for millennia. It follows Prince Rama of Ayodhya, a kind and respected leader who is on the verge of being crowned king. Just before his coronation, his father is forced by an old promise to send Rama into fourteen years of harsh forest exile. Accompanied by his loyal wife Sita and younger brother Lakshmana, their peaceful exile turns into a heroic struggle when the ten-headed demon king Ravana abducts Sita to his island fortress of Lanka.",
      lensApplication: "Through an archetypal lens, the Ramayana is a foundational story of the Hero's Journey. Rama represents the archetype of the Ideal Human, not because he has magic powers, but because he masters his emotions and puts duty above selfish desires. Sita represents the archetype of unbreakable inner purity and resilience. Ravana represents the archetype of destructive ego and inflated intellect without moral anchor. The conflict between them is the universal human struggle between moral balance (Dharma) and selfish chaos (Adharma).",
      textualEvidence: "When Lakshmana furiously suggests overthrowing their father to claim the throne, Rama gently calms him down, explaining that anger cannot build a peaceful life. Later in the story, the selflessness of characters like Hanuman, who crosses the vast ocean to find Sita without asking for any reward, proves that pure loyalty and quiet courage can accomplish things that armies cannot.",
      conclusion: loremConclusion
    }
  },
  {
    id: "4",
    number: 4,
    title: "The Mahabharata",
    author: "Attributed to Sage Vyasa",
    period: "Ancient Indian Epic (c. 4th Century BCE to 4th Century CE)",
    lens: "Marxist / Socioeconomic Lens",
    lensDefinition: "Examining how dynastic wealth, land ownership, royal privilege, and class systems drive a devastating war where ordinary people pay the price for elite greed.",
    visualDescription: "The Kurukshetra battlefield showing Lord Krishna guiding the chariot beside prince Arjuna drawing his bow, facing opposing armies and war elephants.",
    imagePlaceholder: "/images/literary-pics/mahabharata.jpg",
    imageOrientation: "horizontal",
    pixelBg: "/images/pixel-bg/pixel-mahabharata.svg",
    excerpt: "A grand family feud between the noble Pandavas and ambitious Kauravas over an empire explodes into an eighteen-day war, forcing every warrior to confront impossible moral choices.",
    keyThemes: ["Difficult Moral Choices", "The Destructive Price of War", "Destiny, Ego, and Duty"],
    characters: [
      {
        name: "Arjuna",
        role: "The greatest Pandava archer whose sudden moral crisis on the battlefield reveals the heartbreaking reality of civil conflict."
      },
      {
        name: "Krishna",
        role: "The divine counselor and charioteer who delivers the Bhagavad Gita, teaching selfless duty beyond ego."
      },
      {
        name: "Yudhishthira",
        role: "The eldest Pandava brother, dedicated to righteousness, whose tragic gambling weakness costs his family their kingdom."
      },
      {
        name: "Duryodhana",
        role: "The ambitious Kaurava crown prince whose stubborn refusal to share even a needlepoint of land triggers the war."
      },
      {
        name: "Karna",
        role: "A warrior of unmatched generosity who faces social prejudice due to his humble upbringing, remaining tragically loyal to Duryodhana."
      }
    ],
    fullAnalysis: {
      introduction: "The Mahabharata is one of the longest and most psychologically realistic epics ever composed. It does not present heroes as flawless gods or villains as cartoonish monsters; instead, it portrays human beings caught in complicated rivalries. Two sets of cousins, the Pandavas and Kauravas, grow up together with growing tension. After years of jealousy, cheating at dice, and humiliation, the struggle explodes into an all-consuming war on the plains of Kurukshetra.",
      lensApplication: "Through a socioeconomic lens, the war of Kurukshetra is fundamentally a clash over empire, tribute, and concentrated wealth. The royal Kauravas refuse to grant the Pandavas even five small villages, preferring total war over sharing imperial land. Behind the speeches of chivalry and heroic bloodlines, the epic honestly reveals the horrific human cost: millions of foot soldiers, horsemen, and commoners are slaughtered in eighteen days simply to decide which group of royal cousins sits on the golden throne.",
      textualEvidence: "The tragic character of Karna provides sharp socioeconomic insight. Although gifted with legendary archery skills, he is constantly insulted and denied equal respect by royal princes because he was raised by a chariot driver. His story highlights how rigid class hierarchies can poison a society and push talented people into bitter rivalries. Furthermore, the sorrowful aftermath of the war, where women weep over empty fields and a ruined kingdom, demonstrates that imperial conquest leaves everyone impoverished.",
      conclusion: loremConclusion
    }
  },
  {
    id: "5",
    number: 5,
    title: "The Odyssey",
    author: "Homer",
    period: "Ancient Greece (c. 8th Century BCE)",
    lens: "Psychoanalytic Lens",
    lensDefinition: "Exploring Odysseus's inner psychological journey, focusing on unconscious desires, overcoming paralyzing temptations, confronting trauma, and reclaiming his mature identity as a leader and father.",
    visualDescription: "A Greek warrior wearing a crested helmet and dark cloak, looking out over coastal campfires and ships toward a cliffside citadel at twilight.",
    imagePlaceholder: "/images/literary-pics/odyssey.jpg",
    imageOrientation: "horizontal",
    pixelBg: "/images/pixel-bg/pixel-odyssey.svg",
    excerpt: "After ten years fighting in the Trojan War, the clever Odysseus spends another decade braving sea monsters, enchantresses, and divine wrath to return home to his wife and son.",
    keyThemes: ["Homecoming and Family Loyalty", "Quick Wit over Pure Muscle", "Temptation and Perseverance"],
    characters: [
      {
        name: "Odysseus",
        role: "King of Ithaca, renowned for his versatile mind (metis), enduring patience, and determination to reunite with his family."
      },
      {
        name: "Penelope",
        role: "Odysseus's wise and constant wife, who cleverly outwits over a hundred aggressive suitors through her weaving trick."
      },
      {
        name: "Telemachus",
        role: "Odysseus's son, who embarks on his own coming-of-age journey to find news of his father and defend his household."
      },
      {
        name: "Athena",
        role: "The goddess of wisdom and strategic thought who serves as Odysseus's mentor and guardian."
      },
      {
        name: "Circe & Calypso",
        role: "Powerful mythical women representing the psychological lures of hedonism, forgetfulness, and false immortality."
      },
      {
        name: "Polyphemus (The Cyclops)",
        role: "The lawless, one-eyed giant whose blinding triggers the long vengeance of Poseidon."
      }
    ],
    fullAnalysis: {
      introduction: "Homer's Odyssey is the quintessential adventure story of world literature. While Homer's earlier work, the Iliad, was focused on war and glory on the battlefield, the Odyssey focuses on the long, grueling effort to survive and rebuild a life after the war is over. King Odysseus is known not for brute physical force, but for his quick mind, adaptable nature, and deep desire to return home to his island of Ithaca.",
      lensApplication: "Using a psychoanalytic lens, Odysseus's ten-year wandering is not just a geographic detour; it is an internal voyage through the human psyche. The monsters he encounters represent deep psychological traps: the Lotus-Eaters represent the urge to numb reality and escape responsibility; the Sirens represent deadly intellectual ego; and Calypso represents the desire to stay trapped in comfortable, child-like dependency without aging. To become whole again, Odysseus must confront his own pride and overcome these unconscious desires.",
      textualEvidence: "Odysseus's intelligence shines in the cave of the Cyclops when he tells the monster that his name is 'Nobody.' When Odysseus blinds the giant to escape, the Cyclops yells to his friends that 'Nobody is hurting me,' preventing anyone from coming to his aid. Yet Odysseus also has to learn patience: when he finally reaches Ithaca, he disguises himself as an old beggar and takes insults in his own home to carefully assess who is still loyal before reclaiming his rightful place.",
      conclusion: loremConclusion
    }
  },
  {
    id: "6",
    number: 6,
    title: "The Song of Roland",
    author: "Anonymous (French Chanson de Geste)",
    period: "Medieval Europe (c. 11th Century CE)",
    lens: "Historical / Contextual Lens",
    lensDefinition: "Analyzing the work within its 11th-century medieval feudal environment, including the Crusades, sworn feudal vassalage, and the chivalric warrior code that valued honor over self-preservation.",
    visualDescription: "Knight Roland in chainmail armor blowing the ivory olifant horn with all his strength in a mountain pass while soldiers battle behind him.",
    imagePlaceholder: "/images/literary-pics/song_of_roland.jpg",
    imageOrientation: "horizontal",
    pixelBg: "/images/pixel-bg/pixel-roland.svg",
    excerpt: "The heroic last stand of Roland, the greatest knight of Emperor Charlemagne, who commands the rearguard in the Pyrenees mountains and faces betrayal by his stepfather Ganelon.",
    keyThemes: ["Knightly Honor and Brotherhood", "The Danger of Stubborn Pride", "Loyalty versus Treachery"],
    characters: [
      {
        name: "Roland",
        role: "The fearless nephew of Charlemagne and commander of the rearguard, whose chivalric bravery is fatally entangled with stubborn pride."
      },
      {
        name: "Oliver",
        role: "Roland's wise and level-headed companion-in-arms, who embodies sensible judgment and warns Roland to call for help."
      },
      {
        name: "Emperor Charlemagne",
        role: "The aged Christian monarch of the Franks who leads his empire with deep sorrow, justice, and devotion."
      },
      {
        name: "Ganelon",
        role: "Roland's resentful stepfather whose bruised pride drives him to commit high treason and betray the rearguard."
      },
      {
        name: "Archbishop Turpin",
        role: "The warrior-priest who fights alongside the knights, blessing their souls on the mountain pass of Roncevaux."
      }
    ],
    fullAnalysis: {
      introduction: "The Song of Roland is the most celebrated heroic poem from medieval France. It dramatizes an actual historical ambush that happened centuries earlier when Emperor Charlemagne's army was returning to France through the mountain pass of Roncevaux in the Pyrenees. Filled with poetic drama, flashing steel, and deep emotional bonds between brothers-in-arms, the poem captures the knightly ideals of loyalty, faith, and fearless courage.",
      lensApplication: "Through a historical and contextual lens, the poem mirrors the mindset of 11th-century medieval Europe during the launch of the First Crusade. The strict feudal code demanded absolute fidelity between lord and vassal. In this world, a warrior’s reputation ('lineage and renown') was literally more valuable than biological survival. By examining this context, we understand why Roland refuses to blow his horn: to a medieval knight, calling for help was seen as an unforgivable stain upon his family line.",
      textualEvidence: "The tense debate between Roland and his closest friend Oliver is the emotional core of the poem. Oliver sensibly urges Roland to blow his ivory horn Olifant while Charlemagne's main army is still close enough to turn around and rescue them. Roland stubbornly rejects the advice, boasting that he will never bring disgrace upon his family line. Only when almost every knight lies fallen does Roland finally blow the horn with all his strength, bursting his temples in a tragic final act of sacrifice.",
      conclusion: loremConclusion
    }
  },
  {
    id: "7",
    number: 7,
    title: "The Tale of Genji",
    author: "Murasaki Shikibu (Noblewoman of the Imperial Court)",
    period: "Classical Japan Heian Period (Early 11th Century CE)",
    lens: "Feminist Lens",
    lensDefinition: "Examining Heian court society through Murasaki Shikibu’s female eyes, revealing the emotional isolation, lack of marital freedom, and private resilience of women living behind silk screens.",
    visualDescription: "A classical Japanese painting of a Heian noblewoman with long black hair in layered silk robes, titled 'The Tale of Genji: A Japanese Classic Illuminated'.",
    imagePlaceholder: "/images/literary-pics/tale_of_genji.jpg",
    imageOrientation: "horizontal",
    pixelBg: "/images/pixel-bg/pixel-genji.svg",
    excerpt: "Celebrated as the world's first psychological novel, this masterwork follows the romances, political life, and emotional growth of the 'Shining Prince' Genji in the imperial court of Heian Japan.",
    keyThemes: ["The Bittersweet Passing of Time", "Emotional Depth and Relationships", "Art, Poetry, and Inner Life"],
    characters: [
      {
        name: "Hikaru Genji (The Shining Prince)",
        role: "The handsome, artistic son of the Emperor whose charm, romantic pursuits, and political maneuvers drive the narrative."
      },
      {
        name: "Lady Murasaki",
        role: "Genji's true love and ideal companion, whose intelligence, quiet grace, and emotional vulnerability make her the heart of the novel."
      },
      {
        name: "Fujitsubo",
        role: "The Imperial consort who resembles Genji's late mother, inspiring a secret, forbidden longing that haunts Genji throughout his youth."
      },
      {
        name: "Lady Aoi",
        role: "Genji's proud and reserved first wife, whose distant marriage with Genji ends tragically following the birth of their son."
      },
      {
        name: "The Lady of Rokujo",
        role: "A sophisticated aristocratic woman whose intense, repressed jealousy manifests as a vengeful spirit, revealing the psychic toll of courtly neglect."
      }
    ],
    fullAnalysis: {
      introduction: "Written over a thousand years ago by a talented lady-in-waiting named Murasaki Shikibu, The Tale of Genji is widely recognized as the world's very first novel. Instead of focusing on bloody battles or superhero feats, it explores the private thoughts, romantic dreams, and subtle social tensions of the ancient Japanese imperial court in Kyoto. Its central figure, Prince Genji, is artistic, charming, and sensitive, but constantly searching for lasting happiness in a world where everything changes.",
      lensApplication: "Through a feminist lens, the novel offers an extraordinary, rare look inside the secluded lives of aristocratic women in 11th-century Japan. Women in the Heian court were kept physically hidden behind silk curtains and wooden lattices, and their social standing depended almost entirely on male patrons. Murasaki Shikibu uses her writing to show that these women were not passive ornaments: they were sharp, deeply educated poets, painters, and observers who felt the pain of polygamous court life and used literature and art to assert their own emotional dignity.",
      textualEvidence: "Across the novel's chapters, court life is guided by artistic sensitivity. Characters communicate their most honest feelings by writing short, delicate poems on custom-colored papers chosen to match the season, often attaching them to a fragrant plum blossom or autumn leaf. When Genji experiences loss, including the heartbreaking passing of his beloved Murasaki, his grief turns into quiet contemplation, leading him to seek spiritual peace and detachment.",
      conclusion: loremConclusion
    }
  }
];
