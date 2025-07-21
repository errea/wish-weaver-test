import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WishCard } from '@/components/WishCard';
import { ThemeToggle } from '@/components/ThemeToggle';
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
  Gift,
  Star,
  MessageCircle
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
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const imageMessages = sampleMessages.filter(m => m.media && (m.media.type === 'image' || m.media.type === 'gif'));

  useEffect(() => {
    if (!showSlideshow) return;
    const interval = setInterval(() => {
      setSlideshowIndex((prev) => (prev + 1) % imageMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showSlideshow, imageMessages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <motion.div 
        className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: '0s' }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Header */}
      <header className="relative bg-card/80 backdrop-blur-sm shadow-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.h1 
              className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Sample Birthday Card
            </motion.h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card Preview */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent">Tim's Birthday Card</h2>
                  <p className="text-muted-foreground flex items-center gap-2 mt-1">
                    <Users className="w-4 h-4" />
                    From Your 072 Friends
                  </p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setVolume(!volume)}
                    className="transition-all duration-300 hover:scale-105"
                  >
                    {volume ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (showSlideshow) {
                        setShowSlideshow(false);
                        setIsPlaying(false);
                      } else if (imageMessages.length > 0) {
                        setSlideshowIndex(0);
                        setShowSlideshow(true);
                        setIsPlaying(true);
                      }
                    }}
                    className="transition-all duration-300 hover:scale-105"
                  >
                    {showSlideshow && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </motion.div>
      {/* Slideshow Modal */}
      {showSlideshow && imageMessages.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 max-w-md w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => { setShowSlideshow(false); setIsPlaying(false); }}
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
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setSlideshowIndex((slideshowIndex + 1) % imageMessages.length)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Next"
              >
                <ArrowRight className="w-5 h-5 text-gray-600" />
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
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="transition-transform duration-300 hover:scale-[1.01]"
              >
                <WishCard
                  title="Hope your birthday is as awesome as you are, Tim!"
                  recipient="Tim"
                  sender="Your 072 Friends"
                  messages={sampleMessages}
                  backgroundColor="#FF5722"
                  className="w-full max-w-none shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Card Stats */}
            <motion.div 
              className="grid sm:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, staggerChildren: 0.1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="transition-all duration-300"
              >
                <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-0 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Users className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-blue-600 mb-1">5</p>
                    <p className="text-sm text-blue-600/80">Contributors</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="transition-all duration-300"
              >
                <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-0 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-green-600 mb-1">{sampleMessages.length}</p>
                    <p className="text-sm text-green-600/80">Messages</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="transition-all duration-300"
              >
                <Card className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-0 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-purple-600 mb-1">12h</p>
                    <p className="text-sm text-purple-600/80">Time Active</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About This Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="shadow-xl bg-card/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    About This Card
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Occasion</span>
                      <Badge className="bg-pink-500/10 text-pink-600 border-pink-500/20">Birthday</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Created</span>
                      <span className="text-sm font-medium">12 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Last updated</span>
                      <span className="text-sm font-medium">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

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