import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Gift, Share2, Play } from 'lucide-react';

interface Message {
  id: string;
  author: string;
  content: string;
  avatar?: string;
  media?: {
    type: 'image' | 'gif' | 'video';
    url: string;
  };
}

interface WishCardProps {
  title: string;
  recipient: string;
  sender: string;
  messages: Message[];
  backgroundColor?: string;
  cardImage?: string;
  className?: string;
}

export function WishCard({ 
  title, 
  recipient, 
  sender, 
  messages, 
  backgroundColor = '#FF5722',
  cardImage,
  className 
}: WishCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentView, setCurrentView] = useState<'card' | 'messages'>('card');

  const handleViewMessages = () => {
    setCurrentView('messages');
  };

  const handleBackToCard = () => {
    setCurrentView('card');
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      {currentView === 'card' ? (
        <Card 
          className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-0"
          style={{ boxShadow: 'var(--card-shadow)' }}
        >
          {/* Card Header/Image */}
          <div 
            className="h-48 relative flex items-center justify-center text-white font-bold text-xl"
            style={{ 
              background: cardImage ? `url(${cardImage}) center/cover` : backgroundColor,
            }}
          >
            {!cardImage && (
              <div className="flex items-center gap-2">
                <Gift className="w-8 h-8" />
                <span>Happy Birthday</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <CardContent className="p-6 space-y-4">
            {/* Message Content */}
            <div className="text-center space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {title}
              </h2>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">to:</span> {recipient}</p>
                <p><span className="font-medium">from:</span> {sender}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-center">
              <Button 
                onClick={handleViewMessages}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                View Messages ({messages.length})
              </Button>
            </div>

            {/* Interaction Icons */}
            <div className="flex justify-center gap-4 pt-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Share2 className="w-5 h-5 text-gray-500 hover:text-blue-500" />
              </button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Shared Messages</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleBackToCard}
                className="text-gray-600"
              >
                Back to Card
              </Button>
            </div>

            {/* Messages List */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {messages.map((message) => (
                <div key={message.id} className="border-l-4 border-orange-500 pl-4 py-2">
                  {/* Message Media */}
                  {message.media && (
                    <div className="mb-3 rounded-lg overflow-hidden">
                      {message.media.type === 'image' && (
                        <img 
                          src={message.media.url} 
                          alt="Message attachment"
                          className="w-full h-32 object-cover"
                        />
                      )}
                      {message.media.type === 'gif' && (
                        <img 
                          src={message.media.url} 
                          alt="GIF attachment"
                          className="w-full h-32 object-cover"
                        />
                      )}
                      {message.media.type === 'video' && (
                        <div className="relative">
                          <video 
                            src={message.media.url}
                            className="w-full h-32 object-cover"
                            controls={false}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Message Content */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    {message.content}
                  </p>
                  
                  {/* Author */}
                  <p className="text-xs font-medium text-gray-500">
                    — {message.author}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}