import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WishCard } from '@/components/WishCard';
import { 
  ArrowLeft, 
  ArrowRight, 
  Heart, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Download,
  Share2,
  Users,
  Calendar,
  Gift
} from 'lucide-react';

const sampleMessages = [
  {
    id: '1',
    author: 'Sarah Johnson',
    content: 'Happy Birthday Tim! 🎉 Hope your special day is filled with love, laughter, and all your favorite things. You deserve the absolute best!',
    media: {
      type: 'image' as const,
      url: 'https://images.unsplash.com/photo-1549972904349-6e44c42644a7?w=400&q=80'
    },
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    author: 'Mike Chen',
    content: 'Another year of awesome! 🎂 Thanks for being such an amazing friend and colleague. Looking forward to celebrating with you!',
    timestamp: '4 hours ago'
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    content: 'Wishing you the happiest birthday ever! 🎈✨ May this new year bring you endless joy and beautiful memories.',
    media: {
      type: 'gif' as const,
      url: 'https://media.tenor.com/390ocld2f3QAAAAC/christina-aguilera-youre-the-best.gif'
    },
    timestamp: '6 hours ago'
  },
  {
    id: '4',
    author: 'David Wilson',
    content: 'Hope your birthday is as wonderful as you are! 🎊 Enjoy every moment of your special day.',
    timestamp: '8 hours ago'
  },
  {
    id: '5',
    author: 'Lisa Thompson',
    content: 'Happy Birthday! 🥳 Here\'s to another year of great adventures and amazing achievements. You\'re incredible!',
    media: {
      type: 'image' as const,
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80'
    },
    timestamp: '10 hours ago'
  }
];

const Sample = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Sample Birthday Card</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card Preview */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Tim's Birthday Card</h2>
                  <p className="text-gray-600">From Your 072 Friends</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setVolume(!volume)}
                  >
                    {volume ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              
              <WishCard
                title="Hope your birthday is as awesome as you are, Tim!"
                recipient="Tim"
                sender="Your 072 Friends"
                messages={sampleMessages}
                backgroundColor="#FF5722"
                className="w-full max-w-none"
              />
            </div>

            {/* Card Stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-700">5</p>
                  <p className="text-sm text-blue-600">Contributors</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0">
                <CardContent className="p-4 text-center">
                  <Heart className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-700">8</p>
                  <p className="text-sm text-green-600">Messages</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-0">
                <CardContent className="p-4 text-center">
                  <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-700">12h</p>
                  <p className="text-sm text-purple-600">Time Active</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About This Card */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">About This Card</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Occasion</span>
                    <Badge className="bg-pink-100 text-pink-800">Birthday</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Created</span>
                    <span className="text-sm">12 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Last updated</span>
                    <span className="text-sm">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Status</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {sampleMessages.slice(0, 3).map((message, index) => (
                    <div key={message.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {message.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{message.author}</p>
                        <p className="text-xs text-gray-500 truncate">
                          {message.content.length > 50 ? message.content.substring(0, 50) + '...' : message.content}
                        </p>
                        <p className="text-xs text-gray-400">{message.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="shadow-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Love What You See?</h3>
                <p className="text-orange-100 mb-4">
                  Create your own beautiful group card in just a few minutes!
                </p>
                <Link to="/create">
                  <Button className="bg-white text-orange-500 hover:bg-gray-100 w-full">
                    Create Your Card
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;