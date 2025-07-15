import { WishCard } from '@/components/WishCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const sampleMessages = [
  {
    id: '1',
    author: 'Sarah Connor',
    content: 'Hey Tim! Hope your birthday is as legendary as you are! Can\'t wait to celebrate together 🎉 Have the most amazing day!',
    media: {
      type: 'gif' as const,
      url: 'https://media.tenor.com/390ocld2f3QAAAAC/christina-aguilera-youre-the-best.gif'
    }
  },
  {
    id: '2',
    author: 'Mike Johnson',
    content: 'Another year older, another year wiser! Have an amazing day filled with joy, laughter, and all your favorite things. You deserve it all! 🎂',
  },
  {
    id: '3',
    author: 'Emily Chen',
    content: 'Wishing you all the happiness in the world on your special day! May this new year of life bring you endless adventures and beautiful memories ✨',
    media: {
      type: 'image' as const,
      url: 'https://images.unsplash.com/photo-1549032305-e816fabf0dd2?w=400&q=80'
    }
  },
  {
    id: '4',
    author: 'Alex Rivera',
    content: 'Happy Birthday to one of the coolest people I know! Hope your day is filled with surprises, cake, and all your favorite people 🎈',
  },
  {
    id: '5',
    author: 'Jordan Smith',
    content: 'Sending you the biggest birthday hugs and warmest wishes! You bring so much joy to everyone around you. Have a fantastic celebration! 🥳',
    media: {
      type: 'gif' as const,
      url: 'https://media.tenor.com/4DxEPS12jSQAAAAC/coffee-art.gif'
    }
  }
];

const Sample = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Sample Card</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sample Wish Card
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              This is exactly what your recipients will see when they open your WishWeaver card
            </p>
            
            {/* Sample Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Sample Experience
            </div>
          </div>

          {/* Card Display */}
          <div className="flex justify-center mb-12">
            <WishCard
              title="Hope your birthday is as awesome as you are, Tim."
              recipient="Tim"
              sender="Your 072 Friends"
              messages={sampleMessages}
              backgroundColor="#FF5722"
              className="max-w-md"
            />
          </div>

          {/* Features Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💌</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rich Messages</h3>
              <p className="text-gray-600 text-sm">
                Contributors can add heartfelt messages with photos, GIFs, and videos
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Beautiful Design</h3>
              <p className="text-gray-600 text-sm">
                Professionally designed templates for every occasion and culture
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600 text-sm">
                Perfect viewing experience on phones, tablets, and computers
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <h2 className="text-2xl font-bold mb-4">Ready to Create Your Own?</h2>
              <p className="text-gray-600 mb-6">
                Start building a memorable experience for someone special
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8"
                >
                  Create Your Card
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/')}
                  className="px-8"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sample;