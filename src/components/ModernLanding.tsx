import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { WishCard } from './WishCard';
import { ThemeToggle } from './ThemeToggle';
import { 
  Heart, 
  Users, 
  Gift, 
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Upload,
  Palette,
  DollarSign,
  Share2,
  Clock,
  CheckCircle,
  Star,
  Quote,
  HelpCircle,
  Calendar,
  PartyPopper,
  Cake,
  GraduationCap,
  Baby,
  FlowerIcon
} from 'lucide-react';

const sampleMessages = [
  {
    id: '1',
    author: 'Sarah',
    content: 'Hope your birthday is as awesome as you are! Can\'t wait to celebrate together 🎉',
    media: {
      type: 'gif' as const,
      url: 'https://media.tenor.com/390ocld2f3QAAAAC/christina-aguilera-youre-the-best.gif'
    }
  },
  {
    id: '2',
    author: 'Mike',
    content: 'Another year older, another year wiser! Have an amazing day filled with joy and laughter.',

  },
  {
    id: '3',
    author: 'Emily',
    content: 'Wishing you all the happiness in the world on your special day! 🎂✨',
    media: {
      type: 'image' as const,
      url: 'https://images.unsplash.com/photo-1549032305-e816fabf0dd2?w=400&q=80'
    }
  }
];

const cardDesigns = [
  { 
    id: 1, 
    name: 'Birthday Celebration', 
    color: '#FF5722',
    occasion: 'Birthday'
  },
  { 
    id: 2, 
    name: 'Thank You', 
    color: '#4CAF50',
    occasion: 'Appreciation'
  },
  { 
    id: 3, 
    name: 'Wedding Joy', 
    color: '#E91E63',
    occasion: 'Wedding'
  },
  { 
    id: 4, 
    name: 'Get Well Soon', 
    color: '#2196F3',
    occasion: 'Get Well'
  }
];

export function ModernLanding() {
  const [currentDesign, setCurrentDesign] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const imageMessages = sampleMessages.filter(m => m.media && (m.media.type === 'image' || m.media.type === 'gif'));

  // Card design auto-rotation
  useState(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentDesign((prev) => (prev + 1) % cardDesigns.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  // Slideshow auto-advance
  useEffect(() => {
    if (!showSlideshow) return;
    const interval = setInterval(() => {
      setSlideshowIndex((prev) => (prev + 1) % imageMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showSlideshow, imageMessages.length]);

  const nextDesign = () => {
    setCurrentDesign((prev) => (prev + 1) % cardDesigns.length);
  };

  const prevDesign = () => {
    setCurrentDesign((prev) => (prev - 1 + cardDesigns.length) % cardDesigns.length);
  };

  const currentCard = cardDesigns[currentDesign];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative">
      {/* Dark mode toggle button */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 px-2 sm:py-16 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                  Make Every{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Occasion
                  </span>{' '}
                  Special
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Create beautiful group cards with messages, photos, and videos from 
                  multiple contributors. Perfect for birthdays, farewells, celebrations, and more.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/40">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Multiple Contributors</h3>
                    <p className="text-sm text-gray-600">Collect messages from everyone</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/40">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Rich Media</h3>
                    <p className="text-sm text-gray-600">Photos, videos, GIFs & more</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/40">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Beautiful Designs</h3>
                    <p className="text-sm text-gray-600">Culturally inspired templates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/40">
                    <Gift className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Cash Gifts</h3>
                    <p className="text-sm text-gray-600">Pool contributions together</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/create">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 text-base sm:text-lg w-full dark:from-orange-600 dark:to-red-700"
                  >
                    Create Your Card
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/sample">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-6 py-3 text-base sm:text-lg border-gray-300 hover:bg-white hover:text-orange-500 w-full dark:border-gray-700 dark:hover:bg-gray-800 dark:text-white"
                  >
                    View Sample
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Interactive Card Preview */}
            <div className="relative mt-10 lg:mt-0">
              {/* Card Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 sm:gap-0">
                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={() => {
                      if (showSlideshow) {
                        setShowSlideshow(false);
                      } else if (imageMessages.length > 0) {
                        setSlideshowIndex(0);
                        setShowSlideshow(true);
                      }
                    }}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    {showSlideshow ? 
                      <Pause className="w-4 h-4 text-gray-600" /> : 
                      <Play className="w-4 h-4 text-gray-600" />
                    }
                  </button>
      {/* Slideshow Modal */}
      {showSlideshow && imageMessages.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 max-w-md w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setShowSlideshow(false)}
              title="Close slideshow"
            >
              <Pause className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-full h-64 flex items-center justify-center mb-4">
              {imageMessages[slideshowIndex].media?.type === 'image' ? (
                <img
                  src={imageMessages[slideshowIndex].media?.url}
                  alt="Slideshow"
                  className="max-h-60 rounded-lg object-contain shadow-lg"
                />
              ) : (
                <img
                  src={imageMessages[slideshowIndex].media?.url}
                  alt="Slideshow GIF"
                  className="max-h-60 rounded-lg object-contain shadow-lg"
                />
              )}
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-800 dark:text-white mb-1">
                {imageMessages[slideshowIndex].author}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {imageMessages[slideshowIndex].content}
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setSlideshowIndex((slideshowIndex - 1 + imageMessages.length) % imageMessages.length)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setSlideshowIndex((slideshowIndex + 1) % imageMessages.length)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Next"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="mt-4 flex gap-1 justify-center">
              {imageMessages.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 rounded-full ${idx === slideshowIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
                  <span className="text-sm text-gray-500">
                    {currentCard.name}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={prevDesign}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={nextDesign}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Card Preview */}
              <div className="relative">
                <WishCard
                  title="Hope your birthday is as awesome as you are, Tim."
                  recipient="Tim"
                  sender="Your 072 Friends"
                  messages={sampleMessages}
                  backgroundColor={currentCard.color}
                  className="transform transition-all duration-500 hover:scale-105"
                />
                
                {/* Floating indicators */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {cardDesigns.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDesign(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentDesign ? 'bg-orange-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make Every Occasion Extraordinary */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Make Every Occasion Extraordinary
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Whether it's a birthday, wedding, graduation, or just saying thank you, 
            WishWeaver helps you create unforgettable moments that bring people together.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Upload, title: "Upload Rich Media", desc: "Photos, videos, voice notes & GIFs" },
              { icon: Palette, title: "Beautiful Designs", desc: "Culturally inspired templates" },
              { icon: Users, title: "Multiple Contributors", desc: "Collect messages from everyone" },
              { icon: Gift, title: "Cash Gifts", desc: "Pool contributions together" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How WishWeaver Works */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              How WishWeaver Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Creating memorable group cards has never been easier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                icon: Calendar,
                title: "Choose Your Occasion",
                description: "Select from birthday, wedding, thank you, get well soon, and many more occasions with beautiful themed designs."
              },
              {
                step: "2",
                icon: Share2,
                title: "Invite Contributors",
                description: "Share a simple link with friends, family, or colleagues. They can add messages, photos, videos, and voice notes."
              },
              {
                step: "3",
                icon: Gift,
                title: "Present & Celebrate",
                description: "Reveal your beautiful group card at the perfect moment. Download, share, or present it live for maximum impact."
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </Badge>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Occasion Are You Celebrating */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              What Occasion Are You Celebrating?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover the perfect card design for every special moment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: Cake, name: "Birthday", color: "from-pink-500 to-rose-500" },
              { icon: Heart, name: "Wedding", color: "from-red-500 to-pink-500" },
              { icon: GraduationCap, name: "Graduation", color: "from-blue-500 to-cyan-500" },
              { icon: Baby, name: "Baby Shower", color: "from-yellow-500 to-orange-500" },
              { icon: FlowerIcon, name: "Thank You", color: "from-green-500 to-emerald-500" },
              { icon: Heart, name: "Get Well Soon", color: "from-purple-500 to-violet-500" },
              { icon: PartyPopper, name: "Anniversary", color: "from-indigo-500 to-purple-500" },
              { icon: Sparkles, name: "Appreciation", color: "from-teal-500 to-green-500" }
            ].map((occasion, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${occasion.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <occasion.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{occasion.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/create">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3">
                Explore All Occasions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real stories from people who've created unforgettable moments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Event Coordinator",
                avatar: "SJ",
                rating: 5,
                testimonial: "WishWeaver made organizing our team's farewell card so easy! Everyone could contribute from anywhere, and the final result was absolutely beautiful. Our colleague was moved to tears!"
              },
              {
                name: "Michael Chen",
                role: "Father of the Bride",
                avatar: "MC",
                rating: 5,
                testimonial: "For my daughter's wedding, we wanted something special from all the family members who couldn't attend. WishWeaver helped us create a touching surprise that she'll treasure forever."
              },
              {
                name: "Emma Davis",
                role: "HR Manager",
                avatar: "ED",
                rating: 5,
                testimonial: "We use WishWeaver for all our workplace celebrations now. It's so much more personal than a regular card, and the process is seamless. Highly recommend for any team!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gray-300 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about WishWeaver
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How do I create a group card?",
                answer: "Simply click 'Create Your Card', choose your occasion and design, then share the contribution link with friends and family. They can add messages, photos, and videos easily."
              },
              {
                question: "Can I customize the card design?",
                answer: "Yes! We offer beautiful, culturally-inspired templates for every occasion. You can choose colors, fonts, and layouts that match your celebration perfectly."
              },
              {
                question: "How many people can contribute to one card?",
                answer: "There's no limit! Whether it's 5 close friends or 50 colleagues, everyone can contribute messages, photos, videos, and voice notes to make your card special."
              },
              {
                question: "Can I add a cash gift to the card?",
                answer: "Absolutely! Our cash gift feature (coming soon) will allow contributors to pool money together, making it easy to give a meaningful group gift alongside heartfelt messages."
              },
              {
                question: "How do I share the finished card?",
                answer: "Once complete, you can download your card as a high-quality PDF, share it digitally via email or social media, or present it live during your celebration."
              },
              {
                question: "Is WishWeaver free to use?",
                answer: "We offer both free and premium options. Basic cards are free, while premium features include advanced designs, unlimited contributors, and cash gift options."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-950">
                <AccordionTrigger className="text-left font-semibold hover:no-underline text-gray-900 dark:text-white">
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-700 dark:to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Something Special?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of people who've made their celebrations unforgettable with WishWeaver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create">
              <Button 
                size="lg" 
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg font-semibold w-full dark:bg-gray-900 dark:text-orange-400 dark:hover:bg-gray-800"
              >
                Start Your Card Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/sample">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-dark hover:bg-white hover:text-orange-500 px-8 py-3 text-lg w-full dark:border-orange-400 dark:hover:bg-gray-900 dark:hover:text-orange-400"
              >
                View Sample Card
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}