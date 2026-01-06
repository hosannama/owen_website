import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, ArrowRightIcon } from 'lucide-react';
import { useInView } from './useInView';
type Category = 'All' | 'Maritime Strategy' | 'Geopolitics and Security' | 'Hong Kong';
interface Publication {
  title: string;
  author: string;
  publisher: string;
  date: string;
  category: Category;
  image: string;
  excerpt?: string;
  link: string;
}
const publications: Publication[] = [{
  title: "What China’s Latest Military Drill Against Taiwan Tells About Its War Planning",
  author: 'Owen Au',
  publisher: 'China Maritime Watch',
  date: '05 January 2026',
  category: 'Geopolitics and Security',
  image: 'https://substackcdn.com/image/fetch/$s_!fElZ!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb31f2e64-4f74-43c9-89a3-c44581b670e7_593x456.png',
  excerpt: "Beyond full-scale invasion scenarios, the exercise reveals Beijing's growing emphasis on a prolonged, multi-domain blockade in its Taiwan contingency planning.",
  link: 'https://chinamaritimewatch.substack.com/p/005-what-chinas-latest-military-drill'
}, {

  title: "What Shanghai's Push for 5G at Sea Really Means for China",
  author: 'Owen Au',
  publisher: 'China Maritime Watch',
  date: '22 December 2025',
  category: 'Maritime Strategy',
  image: 'https://substackcdn.com/image/fetch/$s_!fF83!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0566bb32-d986-4ddd-90e8-b6b989b5ecd6_4096x3072.jpeg',
  excerpt: "Not merely a network connectivity upgrade, it is a testing ground for the country's smart ocean agenda, with economic governance and security implications.",
  link: 'https://chinamaritimewatch.substack.com/p/004-what-shanghais-push-for-5g-at'
}, {
  title: "No, Hong Kong's Governance Is Not Becoming Like China's. It's Actually Worse.",
  author: 'Owen Au',
  publisher: 'The Diplomat',
  date: '11 December 2025',
  category: 'Hong Kong',
  image: 'https://thediplomat.com/wp-content/uploads/2025/12/sizes/medium_large/thediplomat_2025-12-02-002218.jpg',
  excerpt: 'Hong Kong is stuck in a governance vacuum, where neither democratic nor authoritarian accountability functions effectively.',
  link: 'https://thediplomat.com/2025/12/no-hong-kongs-governance-is-not-becoming-like-chinas-its-actually-worse/'
}];
const PublicationCard = ({
  publication,
  featured = false
}: {
  publication: Publication;
  featured?: boolean;
}) => {
  const {
    ref,
    inView
  } = useInView();
  if (featured) {
    return <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}>
        <article className="w-full bg-white rounded-[15px] shadow-[2px_2px_2px_0px_rgba(0,89,173,0.50)] overflow-hidden hover:shadow-[6px_6px_15px_0px_rgba(0,89,173,0.60)] transition-shadow">
          <img className="w-full h-80 object-cover rounded-[15px] shadow-[0px_2px_2px_0px_rgba(0,89,173,1.00)]" src={publication.image} alt={publication.title} />
          <div className="p-6 space-y-3">
            <span className="inline-block px-4 py-1 text-xs font-bold text-white bg-sky-950/80 rounded-[15px]">
              {publication.category}
            </span>
            <h3 className="text-2xl font-bold text-black font-['Inter']">
              {publication.title}
            </h3>
            <p className="text-sm font-bold text-sky-700 font-['Inter']">
              {publication.author} • {publication.date}
            </p>
            {publication.excerpt && <p className="text-sm text-blue-900 font-['Inter']">
                {publication.excerpt}
              </p>}
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 text-[#012d52] text-sm font-semibold hover:gap-3 hover:underline transition-all">
              Read More
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </article>
      </div>;
  }
  return <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}>
      <a href={publication.link} target="_blank" rel="noopener noreferrer" className="block">
        <article className="w-full bg-white rounded-2xl shadow-[2px_2px_2px_0px_rgba(0,89,173,0.50)] overflow-hidden hover:shadow-[2px_2px_2px_0px_rgba(0,89,173,0.60)] transition-shadow">
          <img className="w-full h-48 object-cover rounded-t-2xl shadow-[0px_2px_2px_0px_rgba(0,89,173,1.00)]" src={publication.image} alt={publication.title} />
          <div className="p-4 space-y-2">
            <span className="inline-block px-4 py-1 text-xs font-bold text-white bg-sky-950/80 rounded-md">
              {publication.category}
            </span>
            <h3 className="text-base font-bold text-black font-['Inter'] line-clamp-2">
              {publication.title}
            </h3>
            <p className="text-xs font-bold text-sky-700 font-['Inter']">
              {publication.author}
            </p>
            <p className="text-xs text-gray-600 font-['Inter']">
              {publication.date}
            </p>
          </div>
        </article>
      </a>
    </div>;
};
export const HomePage = () => {
  const heroRef = useInView();
  const latestPublications = publications.slice(0, 3);
  return <>
      {/* Hero Section */}
      <section id="home" className="max-w-5xl mx-auto px-6 py-16">
        <div ref={heroRef.ref} className={`transition-all duration-700 ease-out ${heroRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {/* Top Row: Text + Image */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-20 pb-10">
            {/* LEFT: Text + Contact */}
            <div className="flex flex-col gap-6 lg:pl-16 font-['Inter']">
              <div>
                <h1 className="text-6xl font-bold text-sky-950 leading-tight">
                  OWEN AU
                </h1>
                <h2 className="text-3xl font-semibold text-sky-950">
                  Independent China Analyst
                </h2>
              </div>

              <div className="space-y-2 flex flex-col mt-4 gap-2 text-sm text-sky-950">
                <span>Email: chowen.au@gmail.com</span>
                <span>
                  <a href="https://linkedin.com/in/owen-au-01oa" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn: linkedin.com/in/owen-au-01oa
                  </a>
                </span>
                <span>
                  <a href="https://substack.com/@owenau01" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Substack: substack.com/@owenau01
                  </a>
                </span>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="flex-1 flex justify-center">
              <img src="https://drive.google.com/thumbnail?id=1AfpiyD63ECrl3GfG0T4Bfa9DWSuQTI9a&sz=w2000" alt="Owen Au" className="w-80 h-auto object-cover rounded-[15px] shadow-[2px_2px_2px_0px_rgba(0,89,173,0.50)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-b from-gray-900 to-blue-900 rounded-[15px] p-12 relative overflow-hidden shadow-[2px_2px_4px_0px_rgba(0,89,173,0.50)]">
          <div className="max-w-3xl mx-auto text-white space-y-6">
            <p className="text-sm font-semibold font-['Inter'] leading-6">
              Owen Au is an independent analyst with international experience in
              policy research and engagement.
            </p>
            <p className="text-sm font-normal font-['Inter'] leading-6">
            Interested in the implications of the rise of China for Europe and the international order, he focuses on analysing China’s maritime strategy and foreign relations, as well as political transformation and securitisation in Hong Kong.
            </p>
            <p className="text-sm font-normal font-['Inter'] leading-6">
              He currently manages the{' '}
              <span className="italic font-medium">China Maritime Watch</span>, a Substack newsletter that monitors China’s comprehensive sea power agenda through primary-source analysis and is updated biweekly.
            </p>
            <p className="text-sm font-normal font-['Inter'] leading-6">
              Please feel free reach out for project-based collaboration or to enquire about his work.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Publications Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-sky-950 font-['Inter']">
            Latest Publications
          </h2>
          <Link to="/publications" className="inline-flex items-center gap-2 text-[#012d52] font-semibold hover:gap-3 transition-all font-['Inter']">
            View All
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Publication */}
          <div className="lg:col-span-2">
            <PublicationCard publication={latestPublications[0]} featured={true} />
          </div>

          {/* Secondary Publications */}
          <div className="space-y-8">
            {latestPublications.slice(1, 3).map((publication, index) => <PublicationCard key={index} publication={publication} />)}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-b from-gray-900 to-blue-900 rounded-[15px] p-12 text-center relative overflow-hidden shadow-[2px_2px_4px_0px_rgba(0,89,173,0.50)]">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#ff6719]"></div>
          <h3 className="text-3xl font-bold text-white mb-4 font-['Inter']">
            China Maritime Watch
          </h3>
          <p className="text-white/90 mb-6 max-w-5xl mx-auto text-sm font-['Inter']">
            Get biweekly insights on China's evolving maritime strategy through
            evidence-based analysis.
          </p>
          <button onClick={() => window.open('https://chinamaritimewatch.substack.com/', '_blank', 'noopener,noreferrer')} className="bg-[#ff6719] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e55a15] transition-colors font-['Inter']">Subscribe
        </button>
        </div>
      </section>
    </>;
};