import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ProgressSteps } from '@/components/ui/progress-steps';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  ArrowLeft, 
  ArrowRight, 
  Palette, 
  Users, 
  Gift,
  Sparkles,
  Heart,
  Cake,
  PartyPopper,
  Trophy,
  GraduationCap,
  Star,
  Mail,
  Calendar,
  Image,
  Flower,
  Baby
} from 'lucide-react';

const Create = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    recipientName: '',
    occasion: '',
    title: '',
    message: '',
    backgroundColor: '#FF5722',
    teamName: ''
  });
  const [showFinalCard, setShowFinalCard] = useState(false);

  const steps = ['Basics', 'Design', 'Preview'];

  const occasions = [
    { value: 'birthday', label: 'Birthday', icon: Cake, description: 'Celebrate another year of awesome!', gradient: 'from-pink-500 to-rose-500' },
    { value: 'farewell', label: 'Farewell', icon: Heart, description: 'Send them off with love and memories', gradient: 'from-purple-500 to-indigo-500' },
    { value: 'thank-you', label: 'Thank You', icon: Sparkles, description: 'Show your appreciation', gradient: 'from-blue-500 to-cyan-500' },
    { value: 'congratulations', label: 'Congratulations', icon: Trophy, description: 'Celebrate their achievement', gradient: 'from-yellow-500 to-orange-500' },
    { value: 'graduation', label: 'Graduation', icon: GraduationCap, description: 'Honor their academic success', gradient: 'from-green-500 to-emerald-500' },
    { value: 'party', label: 'Party', icon: PartyPopper, description: 'Let\'s celebrate together!', gradient: 'from-red-500 to-pink-500' },
    { value: 'baby-shower', label: 'Baby Shower', icon: Baby, description: 'Welcome the little one', gradient: 'from-teal-500 to-cyan-500' },
    { value: 'anniversary', label: 'Anniversary', icon: Flower, description: 'Celebrating milestones together', gradient: 'from-violet-500 to-purple-500' },
  ];

  const backgroundColors = [
    { color: '#FF5722', name: 'Warm Orange', gradient: 'from-orange-400 to-red-500' },
    { color: '#E91E63', name: 'Vibrant Pink', gradient: 'from-pink-400 to-rose-500' },
    { color: '#9C27B0', name: 'Royal Purple', gradient: 'from-purple-400 to-indigo-500' },
    { color: '#673AB7', name: 'Deep Purple', gradient: 'from-indigo-400 to-purple-500' },
    { color: '#3F51B5', name: 'Ocean Blue', gradient: 'from-blue-400 to-indigo-500' },
    { color: '#2196F3', name: 'Sky Blue', gradient: 'from-cyan-400 to-blue-500' },
    { color: '#00BCD4', name: 'Teal', gradient: 'from-teal-400 to-cyan-500' },
    { color: '#009688', name: 'Forest Green', gradient: 'from-emerald-400 to-teal-500' },
    { color: '#4CAF50', name: 'Fresh Green', gradient: 'from-green-400 to-emerald-500' },
    { color: '#8BC34A', name: 'Lime Green', gradient: 'from-lime-400 to-green-500' },
    { color: '#CDDC39', name: 'Sunny Yellow', gradient: 'from-yellow-400 to-lime-500' },
    { color: '#FFC107', name: 'Golden Yellow', gradient: 'from-amber-400 to-yellow-500' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const selectedOccasion = occasions.find(o => o.value === formData.occasion);
  const selectedColor = backgroundColors.find(c => c.color === formData.backgroundColor);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background relative overflow-hidden">
      {/* Final Stunning Card Overlay */}
      <AnimatePresence>
        {showFinalCard && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Confetti animation */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle cx="60" cy="60" r="6" fill="#FFB300" />
                  <circle cx="340" cy="80" r="5" fill="#E91E63" />
                  <circle cx="200" cy="30" r="4" fill="#4CAF50" />
                  <circle cx="100" cy="350" r="7" fill="#2196F3" />
                  <circle cx="370" cy="300" r="6" fill="#FF5722" />
                  <circle cx="320" cy="200" r="4" fill="#FFC107" />
                  <circle cx="50" cy="250" r="5" fill="#00BCD4" />
                </svg>
              </motion.div>
              <motion.div
                className="rounded-3xl shadow-2xl border-4 border-white/40 overflow-hidden bg-white/80 backdrop-blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${formData.backgroundColor}cc, #fff8)`,
                  boxShadow: `0 8px 40px 0 ${formData.backgroundColor}55`
                }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120, damping: 18 }}
              >
                <div className="p-10 text-center relative">
                  {selectedOccasion && (
                    <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-5 py-2 mb-6 shadow">
                      <selectedOccasion.icon className="w-7 h-7 text-white drop-shadow" />
                      <span className="font-bold text-lg text-white drop-shadow">{selectedOccasion.label}</span>
                    </div>
                  )}
                  <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg animate-pulse">
                    {formData.title || `Happy ${selectedOccasion?.label || 'Celebration'}, ${formData.recipientName || 'Friend'}!`}
                  </h2>
                  {formData.message && (
                    <p className="text-xl mb-6 text-white/90 animate-fade-in">
                      {formData.message}
                    </p>
                  )}
                  <p className="text-lg font-medium text-white/80 mb-2 animate-fade-in">
                    From {formData.teamName || 'Your Team'}
                  </p>
                  <Button
                    size="lg"
                    className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 text-lg font-bold shadow-lg hover:scale-105 transition-transform"
                    onClick={() => setShowFinalCard(false)}
                  >
                    Close
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl"
        animate={{ 
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
              Create Your Card
            </motion.h1>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        {/* Progress Steps */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ProgressSteps steps={steps} currentStep={currentStep} />
        </motion.div>

        {/* Step Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    {currentStep === 0 && (
                      <motion.div 
                        className="space-y-8"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.1 }}
                      >
                        <motion.div 
                          className="text-center mb-8"
                          variants={cardVariants}
                        >
                          <h2 className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-2">
                            Let's Get Started
                          </h2>
                          <p className="text-muted-foreground text-lg">Tell us about the special person and occasion</p>
                        </motion.div>

                        <motion.div 
                          className="grid md:grid-cols-2 gap-6"
                          variants={cardVariants}
                        >
                          <div className="space-y-3">
                            <Label htmlFor="recipientName" className="text-base font-medium flex items-center gap-2">
                              <Users className="w-4 h-4 text-primary" />
                              Recipient Name *
                            </Label>
                            <Input
                              id="recipientName"
                              value={formData.recipientName}
                              onChange={(e) => handleInputChange('recipientName', e.target.value)}
                              placeholder="Who is this card for?"
                              className="text-lg transition-all duration-300 focus:scale-[1.01] focus:shadow-lg border-border/50 focus:border-primary"
                            />
                          </div>

                          <div className="space-y-3">
                            <Label htmlFor="teamName" className="text-base font-medium flex items-center gap-2">
                              <Mail className="w-4 h-4 text-primary" />
                              From (Team/Group Name)
                            </Label>
                            <Input
                              id="teamName"
                              value={formData.teamName}
                              onChange={(e) => handleInputChange('teamName', e.target.value)}
                              placeholder="Your team or group name"
                              className="text-lg transition-all duration-300 focus:scale-[1.01] focus:shadow-lg border-border/50 focus:border-primary"
                            />
                          </div>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                          <Label className="text-base font-medium mb-4 block flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            Choose an Occasion *
                          </Label>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {occasions.map((occasion, index) => {
                              const IconComponent = occasion.icon;
                              return (
                                <motion.button
                                  key={occasion.value}
                                  onClick={() => handleInputChange('occasion', occasion.value)}
                                  className={`group p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden ${
                                    formData.occasion === occasion.value
                                      ? 'border-primary bg-primary/5 shadow-lg'
                                      : 'border-border hover:border-primary/50 bg-card'
                                  }`}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  whileHover={{ y: -2 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-br ${occasion.gradient} rounded-lg flex items-center justify-center mb-3 relative z-10`}>
                                    <IconComponent className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="relative z-10">
                                    <div className="font-semibold text-foreground mb-1">{occasion.label}</div>
                                    <div className="text-xs text-muted-foreground line-clamp-2">{occasion.description}</div>
                                  </div>
                                  {formData.occasion === occasion.value && (
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.3 }}
                                    />
                                  )}
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.div>

                        <motion.div 
                          className="space-y-3"
                          variants={cardVariants}
                        >
                          <Label htmlFor="title" className="text-base font-medium flex items-center gap-2">
                            <Star className="w-4 h-4 text-primary" />
                            Card Title
                          </Label>
                          <Input
                            id="title"
                            value={formData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            placeholder="Give your card a meaningful title"
                            className="text-lg transition-all duration-300 focus:scale-[1.01] focus:shadow-lg border-border/50 focus:border-primary"
                          />
                        </motion.div>
                      </motion.div>
                    )}

                    {currentStep === 1 && (
                      <motion.div 
                        className="space-y-8"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.1 }}
                      >
                        <motion.div 
                          className="text-center mb-8"
                          variants={cardVariants}
                        >
                          <h2 className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-2">
                            Design Your Card
                          </h2>
                          <p className="text-muted-foreground text-lg">Choose colors and style that match the occasion</p>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                          <Label className="text-base font-medium mb-4 block flex items-center gap-2">
                            <Palette className="w-4 h-4 text-primary" />
                            Background Color
                          </Label>
                          <div className="grid grid-cols-4 lg:grid-cols-6 gap-3">
                            {backgroundColors.map((color, index) => (
                              <motion.button
                                key={color.color}
                                onClick={() => handleInputChange('backgroundColor', color.color)}
                                className={`group relative h-16 rounded-xl transition-all duration-300 hover:scale-110 ${
                                  formData.backgroundColor === color.color
                                    ? 'ring-4 ring-primary ring-offset-2 ring-offset-background'
                                    : 'hover:ring-2 hover:ring-primary/50 hover:ring-offset-2 hover:ring-offset-background'
                                }`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.03 }}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <div className={`w-full h-full bg-gradient-to-br ${color.gradient} rounded-xl`} />
                                {formData.backgroundColor === color.color && (
                                  <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <div className="w-4 h-4 bg-white rounded-full shadow-lg" />
                                  </motion.div>
                                )}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div 
                          className="space-y-3"
                          variants={cardVariants}
                        >
                          <Label htmlFor="message" className="text-base font-medium flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Personal Message
                          </Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Add a personal message to start the card..."
                            className="min-h-[120px] transition-all duration-300 focus:scale-[1.01] focus:shadow-lg border-border/50 focus:border-primary resize-none"
                            rows={5}
                          />
                        </motion.div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div 
                        className="space-y-8"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.1 }}
                      >
                        <motion.div 
                          className="text-center mb-8"
                          variants={cardVariants}
                        >
                          <h2 className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-2">
                            Preview Your Card
                          </h2>
                          <p className="text-muted-foreground text-lg">Here's how your card will look</p>
                        </motion.div>

                        <motion.div
                          className="p-8 rounded-2xl shadow-2xl"
                          style={{ 
                            background: `linear-gradient(135deg, ${formData.backgroundColor}dd, ${formData.backgroundColor}aa)` 
                          }}
                          variants={cardVariants}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-center text-white">
                            <motion.div
                              className="mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              {selectedOccasion && (
                                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                                  <selectedOccasion.icon className="w-5 h-5" />
                                  <span className="font-medium">{selectedOccasion.label}</span>
                                </div>
                              )}
                            </motion.div>
                            
                            <motion.h3 
                              className="text-3xl font-bold mb-4"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              {formData.title || `Happy ${selectedOccasion?.label || 'Celebration'}, ${formData.recipientName || 'Friend'}!`}
                            </motion.h3>
                            
                            {formData.message && (
                              <motion.p 
                                className="text-lg mb-6 opacity-90"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                              >
                                {formData.message}
                              </motion.p>
                            )}
                            
                            <motion.p 
                              className="text-sm opacity-75"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              From {formData.teamName || 'Your Team'}
                            </motion.p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <motion.div 
                      className="flex justify-between mt-8 pt-6 border-t border-border/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                        className="px-6 transition-all duration-300 hover:scale-105"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      
                      {currentStep < steps.length - 1 ? (
                        <Button
                          onClick={handleNext}
                          disabled={
                            (currentStep === 0 && (!formData.recipientName || !formData.occasion)) ||
                            (currentStep === 1 && !formData.backgroundColor)
                          }
                          className="px-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105"
                        >
                          Next
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button
                          className="px-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105"
                          onClick={() => setShowFinalCard(true)}
                        >
                          Create Card
                          <Sparkles className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Live Preview Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-lg bg-card/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Image className="w-5 h-5 text-primary" />
                    Live Preview
                  </h3>
                  <div 
                    className="aspect-video rounded-lg p-4 flex items-center justify-center text-white text-center transition-all duration-500"
                    style={{ 
                      background: formData.backgroundColor 
                        ? `linear-gradient(135deg, ${formData.backgroundColor}dd, ${formData.backgroundColor}aa)`
                        : 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                    }}
                  >
                    <div>
                      <div className="text-sm font-medium opacity-90 mb-1">
                        {formData.recipientName || 'Recipient Name'}
                      </div>
                      <div className="text-xs opacity-75">
                        {selectedOccasion?.label || 'Occasion'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="shadow-lg bg-card/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">💡 Tips</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>• Choose meaningful colors that match the occasion</p>
                    <p>• Add a personal message to make it special</p>
                    <p>• You can invite others to contribute after creating</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;