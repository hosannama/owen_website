import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useInView } from './useInView';
type Category = 'All' | 'Maritime Strategy' | 'Geopolitics and Security' | 'Hong Kong';
interface Publication {
  title: string;
  author: string;
  publisher: string;
  date: string;
  category: Category;
  image: string;
  excerpt: string;
  link: string;
}
const publications: Publication[] = [{
  title: "What China Is Bidding for in the New Maritime Governance Body",
  author: 'Owen Au',
  publisher: 'China Maritime Watch',
  date: '02 February 2026',
  category: 'Maritime Strategy',
  image: 'https://substackcdn.com/image/fetch/$s_!UUp-!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff28e0e96-fd92-4b07-ad31-089deadfff96_800x574.jpeg',
  excerpt: "Beyond environmental goals, the new international organisation is an institutional arena where China seeks to advance its global maritime leadership and strategic leverage across multiple fronts.",
  link: 'https://chinamaritimewatch.substack.com/p/007-what-china-is-bidding-for-in'
},
{
  title: "Why China Is Accelerating Its Push into the Deep Sea",
  author: 'Owen Au',
  publisher: 'China Maritime Watch',
  date: '19 January 2026',
  category: 'Maritime Strategy',
  image: 'https://substackcdn.com/image/fetch/$s_!MvNh!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4cc935d1-05c9-401f-807f-45609a02c903_958x571.png',
  excerpt: "The deep sea is emerging as a strategic new frontier where technological capability, supply chain security, and rule-making power intersect – with China determined to take the lead.",
  link: 'https://chinamaritimewatch.substack.com/p/006-why-china-is-accelerating-its'
},
  {
  title: "What China’s Latest Military Drill Against Taiwan Tells About Its War Planning",
  author: 'Owen Au',
  publisher: 'China Maritime Watch',
  date: '05 January 2026',
  category: 'Geopolitics and Security',
  image: 'https://substackcdn.com/image/fetch/$s_!fElZ!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb31f2e64-4f74-43c9-89a3-c44581b670e7_593x456.png',
  excerpt: "Beyond full-scale invasion scenarios, the exercise reveals Beijing's growing emphasis on a prolonged, multi-domain blockade in its Taiwan contingency planning.",
  link: 'https://chinamaritimewatch.substack.com/p/005-what-chinas-latest-military-drill'
},
 { title: "What Shanghai's Push for 5G at Sea Really Means for China",
  author: 'Owen Au',
  publisher: 'China Maritime Watch',
  date: '22 December 2025',
  category: 'Maritime Strategy',
  image: 'https://substackcdn.com/image/fetch/$s_!fF83!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0566bb32-d986-4ddd-90e8-b6b989b5ecd6_4096x3072.jpeg',
  excerpt: "Not merely a network connectivity upgrade, it is a testing ground for the country’s “smart ocean” agenda, with economic, governance, and security implications.",
  link: 'https://chinamaritimewatch.substack.com/p/004-what-shanghais-push-for-5g-at'
}, {
  title: "No, Hong Kong's Governance Is Not Becoming Like China's. It's Actually Worse.",
  author: 'Owen Au',
  publisher: 'The Diplomat',
  date: '11 December 2025',
  category: 'Hong Kong',
  image: 'https://thediplomat.com/wp-content/uploads/2025/12/sizes/medium_large/thediplomat_2025-12-02-002218.jpg',
  excerpt: "Hong Kong is stuck in a governance vacuum, where neither democratic nor authoritarian accountability functions effectively.",
  link: 'https://thediplomat.com/2025/12/no-hong-kongs-governance-is-not-becoming-like-chinas-its-actually-worse/'
}, {
  title: "China's Growing Interest in the Middle Corridor Presents a Dilemma for Europe",
  author: 'Owen Au and Tin-Ching Leung',
  publisher: 'CHOICE',
  date: '10 December 2025',
  category: 'Geopolitics and Security',
  image: 'https://chinaobservers.eu/wp-content/uploads/2025/12/Rail_yard_Baku_P1090213-scaled-1-2048x1536.jpg',
  excerpt: "As the war in Ukraine continues, both Europe and China face growing incentives to diversify their trans-Eurasian connectivity. The Middle Corridor has therefore emerged as an increasingly attractive alternative to traditional routes.",
  link: 'https://chinaobservers.eu/chinas-growing-interest-in-the-middle-corridor-presents-a-dilemma-for-europe/'
}, {
  title: 'How China Is Catching Up to Pursue a World-Leading Marine Satellite System',
  author: 'Owen Au',
  publisher: 'China Maritime Watch',
  date: '8 December 2025',
  category: 'Maritime Strategy',
  image: 'https://substackcdn.com/image/fetch/$s_!N3wV!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6ccf487c-6243-4b0e-8940-d0233e5bf2b2_1080x608.png',
  excerpt: "By 30 November, the Chinese ice-breaking research vessels Xue Long (雪龙) and Xue Long 2 (雪龙2) had successively reached China’s Antarctic research station with support from domestically developed marine satellites.",
  link: 'https://chinamaritimewatch.substack.com/p/003-how-china-is-catching-up-to-pursue'
}, {
  title: 'Response on "What should Europe\'s future defence posture in the Indo-Pacific look like?"',
  author: 'Owen Au',
  publisher: 'Council on Geostrategy',
  date: '4 December 2025',
  category: 'Geopolitics and Security',
  image: 'https://substackcdn.com/image/fetch/$s_!JGfn!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9b7be47d-3958-4e57-ab9d-b21006f1d3cd_1450x1000.png',
  excerpt: 'Europe’s future defence posture in the Indo-Pacific should be concise, yet impactful, sustainable and maritime-focused.',
  link: 'https://www.britainsworld.org.uk/p/the-big-ask-48-2025'
}, {
  title: 'How the China Coast Guard Is Increasingly Seen as the "Second Navy"',
  author: 'Owen Au',
  publisher: 'China Maritime Watch',
  date: '24 November 2025',
  category: 'Maritime Strategy',
  image: 'https://substackcdn.com/image/fetch/$s_!FX8Q!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe7062977-240f-4628-ab89-0ba3f38a5f0b_3000x2000.webp',
  excerpt: "On 16 November, the China Coast Guard (中国海警; CCG) announced that it would conduct “maritime rights-protection patrols” (维权巡航) in the territorial waters surrounding the Senkaku Islands, a territory claimed by both China and Japan but currently administered by Japan.",
  link: 'https://chinamaritimewatch.substack.com/p/002-how-the-china-coast-guard-is'
}, {
  title: "The PRC's Drive for Judicial Power at Sea",
  author: 'Owen Au',
  publisher: 'The Jamestown Foundation',
  date: '21 November 2025',
  category: 'Maritime Strategy',
  image: 'https://jamestown.org/wp-content/uploads/20250608b2332c2e164848088ecc1dbd8303a1d4_10333510d34e4eff8578227dca619473.jpeg.webp',
  excerpt: "Enhancing “maritime judiciary” is now a priority for building a “strong sea power,” according to the recommendations for the 15th Five-Year Plan.",
  link: 'https://jamestown.org/the-prcs-drive-for-judicial-power-at-sea/'
}, {
  title: "What China's Latest Aircraft Carrier Signals About Its Future at Sea",
  author: 'Owen Au',
  publisher: 'China Maritime Watch',
  date: '10 November 2025',
  category: 'Maritime Strategy',
  image: 'https://substackcdn.com/image/fetch/$s_!DotR!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fea01dc96-b5a4-4595-97bb-b4896a065c66_1474x841.png',
  excerpt: "As the People’s Liberation Army Navy (PLAN)’s third aircraft carrier, Fujian marks what Chinese commentators are calling the “Age of Three Carriers” (三航母时代).",
  link: 'https://chinamaritimewatch.substack.com/p/001-what-chinas-latest-aircraft-carrier'
}, {
  title: "PLA Insights from Ukraine's Asymmetric USV Operations",
  author: 'Sunny Cheung and Owen Au',
  publisher: 'The Jamestown Foundation',
  date: '31 October 2025',
  category: 'Maritime Strategy',
  image: 'https://jamestown.org/wp-content/uploads/22Blue-White22-USV-launched-in-Zhuhai.png.webp',
  excerpt: "The People’s Republic of China (PRC) closely studies the Russia–Ukraine conflict, viewing Ukraine’s innovative use of unmanned surface vehicles (USVs) as a transformative model for future naval warfare and asymmetric operations.",
  link: 'https://jamestown.org/pla-insights-from-ukraines-asymmetric-usv-operations/'
}, {
  title: "Nationalism at Sea: Rethinking China's Naval Expansion Since the 1980s",
  author: 'Owen Au',
  publisher: "St. Antony's International Review, University of Oxford",
  date: '30 September 2025',
  category: 'Maritime Strategy',
  image: 'https://stair.shox.bodleian.ox.ac.uk/public/journals/5/cover_issue_39_en_US.jpg',
  excerpt: "China’s dramatic naval expansion and increasing assertiveness in maritime affairs over recent decades mark a significant departure from its historically continental strategic orientation.",
  link: 'https://stair.shox.bodleian.ox.ac.uk/STAIR/issue/view/39'
}, {
  title: "Yarlung Tsangpo Hydropower Fuels PRC's Energy-Computing Strategy",
  author: 'Owen Au and Ryan Wu',
  publisher: 'The Jamestown Foundation',
  date: '25 September 2025',
  category: 'Geopolitics and Security',
  image: 'https://jamestown.org/wp-content/uploads/Yarlung-Tsangpo-Img-Resize-1536x1047.jpg-2-1024x698.webp',
  excerpt: "Tibet’s Yarlung Tsangpo hydropower project, which broke ground in July, is set to become the world’s largest hydrpower installation.",
  link: 'https://jamestown.org/yarlung-tsangpo-hydropower-fuels-prcs-energy-computing-strategy/'
}, {
  title: "Hong Kong's Pivot to the Global South",
  author: 'Owen Au and Ryan Wu',
  publisher: 'The Diplomat',
  date: '6 August 2025',
  category: 'Hong Kong',
  image: 'https://thediplomat.com/wp-content/uploads/2023/11/sizes/medium_large/thediplomat_2023-11-01-174209.jpg',
  excerpt: "The city is being repositioned to serve China’s Global South agenda, gradually moving away from its conventional role connecting China and the West.",
  link: 'https://thediplomat.com/2025/08/hong-kongs-pivot-to-the-global-south/'
}, {
  title: 'Evolving Blue Economy Propels PRC Maritime Ambitions',
  author: 'Owen Au',
  publisher: 'The Jamestown Foundation',
  date: '30 July 2025',
  category: 'Maritime Strategy',
  image: 'https://jamestown.org/wp-content/uploads/2025/07/Walking-to-the-Sea-img.jpg.webp',
  excerpt: "Beijing’s maritime strategy hinges on expanding what it calls the “blue economy,” which is increasingly integrated with broader strategic ambitions under the rubric of becoming a “strong sea power.",
  link: 'https://jamestown.org/evolving-blue-economy-propels-prc-maritime-ambitions/'
}, {
  title: 'Response on "How able is Britain to address the \'sophisticated and persistent\' China challenge as outlined in the Strategic Defence Review?"',
  author: 'Owen Au',
  publisher: 'Council on Geostrategy',
  date: '6 June 2025',
  category: 'Geopolitics and Security',
  image: 'https://substackcdn.com/image/fetch/$s_!9QA1!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F05c37bcc-ac1a-4ce1-88db-5942b114e4e0_1456x1048.jpeg',
  excerpt: "The SDR identifies the PRC as a ‘sophisticated and persistent challenge.’ While it appears to be more measured than terminologies such as ‘threat’ or ‘adversary’ – both of which are applied elsewhere in the document.",
  link: 'https://www.observingchina.org.uk/p/the-tangram-06-2025'
}, {
  title: 'Panama Port Deal Puts Hong Kong Businesses at a Crossroads',
  author: 'Brian Kot and Owen Au',
  publisher: 'The Diplomat',
  date: '28 March 2025',
  category: 'Hong Kong',
  image: 'https://thediplomat.com/wp-content/uploads/2025/03/sizes/medium_large/thediplomat_2025-03-27-172723.jpg',
  excerpt: "Beijing’s public pressure campaign against CK Hutchison portends a growing effort by the CCP to control Hong Kong’s independent business interests.",
  link: 'https://thediplomat.com/2025/03/panama-port-deal-puts-hong-kong-businesses-at-a-crossroads/'
}, {
  title: "Starmer's Re-Engagement with China Risks Diplomatic Isolation of Britain",
  author: 'Owen Au',
  publisher: "St. Antony's International Review, University of Oxford",
  date: '23 February 2025',
  category: 'Geopolitics and Security',
  image: 'https://drive.google.com/thumbnail?id=10o-C4RbdP3DaRfbRNPXczBe5l3lLCsUA&sz=w2000',
  excerpt: 'For decades, the UK has struggled to define its global role. The Labour government blames its Conservative predecessors for clinging to nostalgia and failing to recognise Britain’s diminished place in today’s world.',
  link: 'https://www.stairjournal.com/oped/2025/2/23/starmers-re-engagement-with-china-risks-diplomatic-isolation-of-britain'
}, {
  title: 'Roiling in the Deep: PRC Pushes New Deep Sea Order',
  author: 'Sunny Cheung and Owen Au',
  publisher: 'The Jamestown Foundation',
  date: '1 February 2025',
  category: 'Maritime Strategy',
  image: 'https://jamestown.org/wp-content/uploads/2025/01/The-PRCs-Jiaolong-deep-sea-station.jpg.webp',
  excerpt: "New deep-sea technologies, growing influence in the International Seabed Authority, and domestic legislation are part of the People’s Republic of China’s (PRC) ambitions to become a strong maritime power.",
  link: 'https://jamestown.org/roiling-in-the-deep-prc-pushes-new-deep-sea-order/'
}];
const ITEMS_PER_PAGE = 6;
const PublicationCard = ({
  publication,
  index
}: {
  publication: Publication;
  index: number;
}) => {
  const {
    ref,
    inView
  } = useInView();
  return <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`} style={{
    transitionDelay: `${index * 100}ms`
  }}>
      <article className="w-max-7x1 bg-white rounded-2xl shadow-[2px_2px_2px_0px_rgba(0,89,173,0.50)] overflow-hidden">
        <img className="w-full h-52 object-cover rounded-t-2xl shadow-[0px_2px_2px_2px_rgba(0,89,173,1.00)]" src={publication.image} alt={publication.title} />
        <div className="p-4 space-y-2">
          <span className="inline-block px-4 py-1 text-xs font-bold text-white bg-sky-950/80 rounded-md">
            {publication.category}
          </span>
          <h3 className="text-base font-bold text-black font-['Inter'] line-clamp-2">
            {publication.title}
          </h3>
           <p className="text-xs font-bold text-gray-500 text-opacity-70 font-['Inter']">
            {publication.publisher}
          </p>
          <p className="text-xs font-bold text-sky-700 font-['Inter']">
            {publication.author} • {publication.date}
          </p>
          {publication.excerpt && <p className="text-xs text-blue-900 font-['Inter'] line-clamp-2">
              {publication.excerpt}
            </p>}
          <a href={publication.link} // external URL
        target="_blank" // open in new tab
        rel="noopener noreferrer" // security best practice
        className="mt-2 inline-flex items-center gap-2 text-[#012d52] text-sm font-semibold hover:gap-3 hover:underline transition-all">
  Read More
  <ArrowRightIcon className="w-4 h-4" />
  </a>
        </div>
      </article>
    </div>;
};
export const PublicationsPage = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const filteredPublications = activeFilter === 'All' ? publications : publications.filter(pub => pub.category === activeFilter);
  const totalPages = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPublications = filteredPublications.slice(startIndex, endIndex);
  const handleFilterChange = (filter: Category) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  return <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-sky-950 mb-12 font-['Inter']">
        Publications
      </h1>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-12">
        <button onClick={() => handleFilterChange('All')} className={`px-6 py-2 rounded-full font-medium text-base transition-colors ${activeFilter === 'All' ? 'bg-sky-950 text-white' : 'bg-white text-sky-950 border border-sky-950/20 hover:border-sky-950/40'}`}>
          All
        </button>
        <button onClick={() => handleFilterChange('Maritime Strategy')} className={`px-6 py-2 rounded-full font-medium text-base transition-colors ${activeFilter === 'Maritime Strategy' ? 'bg-[#012d52] text-white' : 'bg-white text-sky-950 border border-sky-950/20 hover:border-sky-950/40'}`}>
          Maritime Strategy
        </button>
        <button onClick={() => handleFilterChange('Geopolitics and Security')} className={`px-6 py-2 rounded-full font-medium text-base transition-colors ${activeFilter === 'Geopolitics and Security' ? 'bg-[#012d52] text-white' : 'bg-white text-sky-950 border border-sky-950/20 hover:border-sky-950/40'}`}>
          Geopolitics and Security
        </button>
        <button onClick={() => handleFilterChange('Hong Kong')} className={`px-6 py-2 rounded-full font-medium text-base transition-colors ${activeFilter === 'Hong Kong' ? 'bg-[#012d52] text-white' : 'bg-white text-sky-950 border border-sky-950/20 hover:border-sky-950/40'}`}>
          Hong Kong
        </button>
      </div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {currentPublications.map((publication, index) => <PublicationCard key={index} publication={publication} index={index} />)}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="inline-flex items-center gap-2 px-4 py-2 rounded-[15px] border border-sky-950/20 text-sky-950 font-medium hover:bg-sky-950/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent">
          <ChevronLeftIcon className="w-4 h-4" />
          Previous
        </button>
        <span className="text-sky-950 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="inline-flex items-center gap-2 px-4 py-2 rounded-[15px] border border-sky-950/20 text-sky-950 font-medium hover:bg-sky-950/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent">
          Next
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-b from-gray-900 to-blue-900 rounded-[15px] p-12 text-center relative overflow-hidden shadow-[2px_2px_4px_0px_rgba(0,89,173,0.50)]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#ff6719]"></div>
        <h3 className="text-3xl font-bold text-white mb-4 font-['Inter']">
          China Maritime Watch
        </h3>
        <p className="text-white/90 text-mb-6 max-w-2xl mx-auto font-['Inter']">
          Get biweekly insights into the development of China’s comprehensive sea power agenda, covering naval modernisation, maritime governance, blue economy, offshore energy, and maritime technologies.
        </p>
        <button onClick={() => window.open('https://chinamaritimewatch.substack.com/', '_blank', 'noopener,noreferrer')} className="bg-[#ff6719] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e55a15] transition-colors font-['Inter']">Subscribe
      </button>
      </div>
    </section>;
};