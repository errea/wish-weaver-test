import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowRight, Gift, Heart, Users, Sparkles } from 'lucide-react';

const occasions = [
  { value: 'birthday', label: 'Birthday', icon: '🎂', color: '#FF5722' },
  { value: 'appreciation', label: 'Appreciation', icon: '💖', color: '#E91E63' },
  { value: 'wedding', label: 'Wedding', icon: '💒', color: '#9C27B0' },
  { value: 'anniversary', label: 'Anniversary', icon: '💕', color: '#673AB7' },
  { value: 'get-well', label: 'Get Well Soon', icon: '🌈', color: '#2196F3' },
  { value: 'thank-you', label: 'Thank You', icon: '🙏', color: '#4CAF50' },
  { value: 'baby-shower', label: 'Baby Shower', icon: '👶', color: '#FF9800' },
  { value: 'farewell', label: 'Farewell', icon: '👋', color: '#795548' },
];

const Create = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    recipientName: '',
    occasion: '',
    message: '',
    senderName: '',
    email: ''
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Creating card with data:', formData);
    // For now, navigate to a success page or card preview
    navigate('/card-created');
  };

  const selectedOccasion = occasions.find(occ => occ.value === formData.occasion);

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
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Step {step} of 3
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`w-3 h-3 rounded-full ${
                      stepNum <= step ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Create Your Card
            </h1>
            <p className="text-xl text-gray-600">
              Let's build something special together
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {step === 1 && "Who is this card for?"}
                {step === 2 && "Choose your occasion"}
                {step === 3 && "Add your details"}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
              {/* Step 1: Recipient Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient's Name</Label>
                    <Input
                      id="recipient"
                      placeholder="e.g., Sarah, Mom, The Team..."
                      value={formData.recipientName}
                      onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                      className="text-lg py-3"
                    />
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-blue-900">Pro Tip</h3>
                        <p className="text-sm text-blue-700">
                          This name will appear on the card and in sharing links. Choose something the recipient will recognize!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Occasion Selection */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {occasions.map((occasion) => (
                      <button
                        key={occasion.value}
                        onClick={() => setFormData({...formData, occasion: occasion.value})}
                        className={`p-4 rounded-xl border-2 transition-all text-center hover:scale-105 ${
                          formData.occasion === occasion.value
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="text-3xl mb-2">{occasion.icon}</div>
                        <div className="font-medium text-sm">{occasion.label}</div>
                      </button>
                    ))}
                  </div>

                  {selectedOccasion && (
                    <div className="mt-6 p-4 rounded-lg border-2 border-orange-200 bg-orange-50">
                      <div className="text-center">
                        <div className="text-3xl mb-2">{selectedOccasion.icon}</div>
                        <h3 className="font-semibold text-orange-900">
                          {selectedOccasion.label} Card Selected
                        </h3>
                        <p className="text-sm text-orange-700 mt-1">
                          Perfect choice! We'll use beautiful designs suited for this occasion.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Sender Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="sender">Your Name</Label>
                    <Input
                      id="sender"
                      placeholder="How should we identify you as the organizer?"
                      value={formData.senderName}
                      onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                      className="text-lg py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="We'll send you the card management link"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="text-lg py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Opening Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Add a personal message that will appear on the card..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-green-900">What's Next?</h3>
                        <p className="text-sm text-green-700">
                          After creating your card, you'll get a sharing link to invite others to contribute messages, photos, and videos!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={step === 1}
                  className="px-6"
                >
                  Previous
                </Button>

                {step < 3 ? (
                  <Button
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !formData.recipientName) ||
                      (step === 2 && !formData.occasion)
                    }
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.senderName || !formData.email}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6"
                  >
                    Create Card
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Create;