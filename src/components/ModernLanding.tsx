import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WishCard } from './WishCard';
import { 
  Heart, 
  Users, 
  Gift, 
  Sparkles,
  ArrowRight,
  MessageCircle,
  Camera,
  Zap,
  Star
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
    occasion: 'Birthday',
    description: 'Colorful and festive'
  },
  { 
    id: 2, 
    name: 'Thank You', 
    color: '#4CAF50',
    occasion: 'Appreciation',
    description: 'Warm and grateful'
  },
  { 
    id: 3, 
    name: 'Wedding Joy', 
    color: '#E91E63',
    occasion: 'Wedding',
    description: 'Elegant and romantic'
  },
  { 
    id: 4, 
    name: 'Get Well Soon', 
    color: '#2196F3',
    occasion: 'Get Well',
    description: 'Caring and supportive'
  }
];

const features = [
  {
    icon: Users,
    title: "Collaborate Together",
    description: "Invite friends, family, and colleagues to contribute messages, photos, and videos",
    highlight: "Real-time collaboration"
  },
  {
    icon: Camera,
    title: "Rich Media Support",
    description: "Add photos, videos, GIFs, and voice messages to make cards truly special",
    highlight: "Multiple media types"
  },
  {
    icon: Sparkles,
    title: "Beautiful Templates",
    description: "Choose from professionally designed templates for every occasion",
    highlight: "Professional designs"
  },
  {
    icon: Zap,
    title: "Instant Sharing",
    description: "Share your card instantly via link, email, or social media",
    highlight: "Share anywhere"
  }
];

export function ModernLanding() {
  const navigate = useNavigate();
  const [selectedDesign, setSelectedDesign] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const currentCard = cardDesigns[selectedDesign];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200">
              ✨ Trusted by 100k+ users worldwide
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Create Cards That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Everyone
              </span>{' '}
              <br />Remembers Forever
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              The easiest way to collect heartfelt messages, photos, and videos from everyone who matters. 
              Perfect for birthdays, farewells, celebrations, and life's special moments.
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={() => navigate('/create')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Creating - It's Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/sample')}
                className="px-10 py-4 text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                See a Sample Card
              </Button>
            </div>
          </div>

          {/* Interactive Card Preview Section */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Design Selector */}
            <div className="lg:col-span-3 space-y-4">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Choose Your Style</h3>
                <p className="text-sm text-gray-600">Click any design to preview</p>
              </div>
              
              <div className="space-y-3">
                {cardDesigns.map((design, index) => (
                  <button
                    key={design.id}
                    onClick={() => setSelectedDesign(index)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-lg ${
                      selectedDesign === index 
                        ? 'border-orange-500 bg-orange-50 shadow-md' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ backgroundColor: design.color }}
                      />
                      <div>
                        <div className="font-medium text-gray-800">{design.name}</div>
                        <div className="text-sm text-gray-500">{design.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Preview */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="mb-4 text-center">
                  <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border">
                    Live Preview - {currentCard.name}
                  </span>
                </div>
                
                <WishCard
                  title="Hope your birthday is as awesome as you are, Tim!"
                  recipient="Tim"
                  sender="Your Friends"
                  messages={sampleMessages}
                  backgroundColor={currentCard.color}
                  className="transform transition-all duration-700 hover:scale-[1.02] shadow-2xl"
                />
              </div>
            </div>

            {/* Interactive Features */}
            <div className="lg:col-span-3 space-y-4">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">What Makes It Special</h3>
                <p className="text-sm text-gray-600">Hover to learn more</p>
              </div>
              
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      hoveredFeature === index
                        ? 'border-orange-300 bg-orange-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-orange-100 to-red-100 flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 mb-1">{feature.title}</div>
                        <div className="text-sm text-gray-600 mb-2">{feature.description}</div>
                        {hoveredFeature === index && (
                          <Badge className="text-xs bg-orange-100 text-orange-700 border-orange-200">
                            {feature.highlight}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by teams, families, and friends everywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From corporate farewell cards to birthday surprises, WishWeaver brings people together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to create something amazing?</h3>
              <p className="text-lg mb-6 opacity-90">Join thousands of people creating unforgettable moments</p>
              <Button 
                size="lg"
                onClick={() => navigate('/create')}
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Start Your First Card
                <Star className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}