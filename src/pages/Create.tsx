import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ArrowRight, 
  Cake, 
  Heart, 
  GraduationCap, 
  Baby, 
  Flower, 
  PartyPopper,
  Sparkles,
  Users,
  Gift
} from 'lucide-react';

const occasions = [
  { id: 'birthday', name: 'Birthday', icon: Cake, color: 'from-pink-500 to-rose-500' },
  { id: 'wedding', name: 'Wedding', icon: Heart, color: 'from-red-500 to-pink-500' },
  { id: 'graduation', name: 'Graduation', icon: GraduationCap, color: 'from-blue-500 to-cyan-500' },
  { id: 'baby-shower', name: 'Baby Shower', icon: Baby, color: 'from-yellow-500 to-orange-500' },
  { id: 'thank-you', name: 'Thank You', icon: Flower, color: 'from-green-500 to-emerald-500' },
  { id: 'anniversary', name: 'Anniversary', icon: PartyPopper, color: 'from-indigo-500 to-purple-500' },
  { id: 'appreciation', name: 'Appreciation', icon: Sparkles, color: 'from-teal-500 to-green-500' },
  { id: 'get-well', name: 'Get Well Soon', icon: Heart, color: 'from-purple-500 to-violet-500' }
];

const Create = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    recipientName: '',
    occasion: '',
    senderName: '',
    message: '',
    email: ''
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Creating card with data:', formData);
    // Here you would typically make an API call to create the card
    alert('Card created successfully! (This is a demo)');
  };

  const selectedOccasion = occasions.find(o => o.id === formData.occasion);

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
            <h1 className="text-2xl font-bold text-gray-900">Create Your Card</h1>
            <div className="w-24" /> {/* Spacer for center alignment */}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNum 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`h-1 w-24 mx-4 ${
                    step > stepNum ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Card Details</span>
            <span>Choose Occasion</span>
            <span>Personalize</span>
          </div>
        </div>

        {/* Step Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">
              {step === 1 && "Let's start with the basics"}
              {step === 2 && "What's the occasion?"}
              {step === 3 && "Add your personal touch"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Basic Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Users className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Tell us who this card is for and we'll help you create something special
                  </p>
                </div>
                
                <div className="max-w-md mx-auto space-y-4">
                  <div>
                    <Label htmlFor="recipientName">Who is this card for?</Label>
                    <Input
                      id="recipientName"
                      placeholder="e.g., Sarah, Mom, The Team"
                      value={formData.recipientName}
                      onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Your email (to manage the card)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Choose Occasion */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Gift className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Choose the perfect design for your celebration
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {occasions.map((occasion) => (
                    <div
                      key={occasion.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                        formData.occasion === occasion.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setFormData({...formData, occasion: occasion.id})}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${occasion.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <occasion.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-center font-medium">{occasion.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Personalize */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Sparkles className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Add your personal message and signature to get started
                  </p>
                </div>

                {selectedOccasion && (
                  <div className="text-center mb-6">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2">
                      <selectedOccasion.icon className="w-4 h-4 mr-2" />
                      {selectedOccasion.name} for {formData.recipientName}
                    </Badge>
                  </div>
                )}

                <div className="max-w-md mx-auto space-y-4">
                  <div>
                    <Label htmlFor="senderName">Your name</Label>
                    <Input
                      id="senderName"
                      placeholder="How should we credit you?"
                      value={formData.senderName}
                      onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Your message (optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Add a personal message to get the card started..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={step === 1}
                className="px-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              {step < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && (!formData.recipientName || !formData.email)) ||
                    (step === 2 && !formData.occasion)
                  }
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.senderName}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6"
                >
                  Create Card
                  <Sparkles className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Create;