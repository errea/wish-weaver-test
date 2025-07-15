import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { WishCard } from './WishCard';
import { 
  Heart, 
  Users, 
  Gift, 
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight 
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

  // Auto-rotate cards every 4 seconds
  useState(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentDesign((prev) => (prev + 1) % cardDesigns.length);
    }, 4000);
    
    return () => clearInterval(interval);
  });

  const nextDesign = () => {
    setCurrentDesign((prev) => (prev + 1) % cardDesigns.length);
  };

  const prevDesign = () => {
    setCurrentDesign((prev) => (prev - 1 + cardDesigns.length) % cardDesigns.length);
  };

  const currentCard = cardDesigns[currentDesign];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Make Every{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Occasion
                  </span>{' '}
                  Special
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create beautiful group cards with messages, photos, and videos from 
                  multiple contributors. Perfect for birthdays, farewells, celebrations, and more.
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-orange-100">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Multiple Contributors</h3>
                    <p className="text-sm text-gray-600">Collect messages from everyone</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-blue-100">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Rich Media</h3>
                    <p className="text-sm text-gray-600">Photos, videos, GIFs & more</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-green-100">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Beautiful Designs</h3>
                    <p className="text-sm text-gray-600">Culturally inspired templates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-purple-100">
                    <Gift className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Cash Gifts</h3>
                    <p className="text-sm text-gray-600">Pool contributions together</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg"
                >
                  Create Your Card
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-3 text-lg border-gray-300 hover:bg-gray-50"
                >
                  View Sample
                </Button>
              </div>
            </div>

            {/* Right Content - Interactive Card Preview */}
            <div className="relative">
              {/* Card Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    {isAutoPlay ? 
                      <Pause className="w-4 h-4 text-gray-600" /> : 
                      <Play className="w-4 h-4 text-gray-600" />
                    }
                  </button>
                  <span className="text-sm text-gray-500">
                    {currentCard.name}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
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

      {/* Interactive Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose WishWeaver?
            </h2>
            <p className="text-xl text-gray-600">
              More than just a card - it's an experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborative</h3>
                <p className="text-gray-600">
                  Multiple people can contribute messages, photos, and videos in real-time
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-teal-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Memorable</h3>
                <p className="text-gray-600">
                  Beautiful designs and rich media make every card special and unforgettable
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
                <p className="text-gray-600">
                  Simple interface that works perfectly on both mobile and desktop
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}