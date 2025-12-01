import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [steamId, setSteamId] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const quickAmounts = [10, 25, 50, 100, 200];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!steamId || !amount) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Order received! Redirecting to payment...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b2838] to-[#2a475e]">
      <nav className="border-b border-[#66c0f4]/20 bg-[#1b2838]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wallet" size={28} className="text-[#66c0f4]" />
            <span className="text-xl font-bold text-white">SteamTopUp</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-gray-300 hover:text-[#66c0f4] transition-colors">Home</a>
            <a href="#topup" className="text-gray-300 hover:text-[#66c0f4] transition-colors">Top Up</a>
            <a href="#faq" className="text-gray-300 hover:text-[#66c0f4] transition-colors">FAQ</a>
            <a href="#contacts" className="text-gray-300 hover:text-[#66c0f4] transition-colors">Contacts</a>
          </div>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in">
            Top Up Steam in Minutes
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in">
            Fast, secure, no fees. Over 10 payment methods available
          </p>
          <Button 
            size="lg" 
            className="bg-[#66c0f4] hover:bg-[#5ab0e0] text-white font-semibold px-8 py-6 text-lg animate-scale-in"
            onClick={() => document.getElementById('topup')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Top Up Now
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
            <CardHeader>
              <Icon name="Zap" size={40} className="text-[#66c0f4] mb-2" />
              <CardTitle className="text-white">Instant</CardTitle>
              <CardDescription className="text-gray-300">Delivery in 1-2 minutes</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
            <CardHeader>
              <Icon name="Shield" size={40} className="text-[#66c0f4] mb-2" />
              <CardTitle className="text-white">Secure</CardTitle>
              <CardDescription className="text-gray-300">Protected payments</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
            <CardHeader>
              <Icon name="Percent" size={40} className="text-[#66c0f4] mb-2" />
              <CardTitle className="text-white">No Fees</CardTitle>
              <CardDescription className="text-gray-300">Pay exactly what you top up</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="topup" className="container mx-auto px-4 py-20">
        <Card className="max-w-2xl mx-auto bg-[#2a475e]/70 border-[#66c0f4]/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl text-white">Top Up Steam Balance</CardTitle>
            <CardDescription className="text-gray-300">Choose amount and payment method</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="steamId" className="text-white">Steam ID or Profile Link</Label>
                <Input
                  id="steamId"
                  placeholder="Enter your Steam ID"
                  value={steamId}
                  onChange={(e) => setSteamId(e.target.value)}
                  className="bg-[#1b2838]/50 border-[#66c0f4]/30 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount" className="text-white">Top Up Amount ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-[#1b2838]/50 border-[#66c0f4]/30 text-white placeholder:text-gray-400"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {quickAmounts.map((amt) => (
                    <Button
                      key={amt}
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setAmount(amt.toString())}
                      className="bg-[#1b2838]/50 border-[#66c0f4]/30 text-gray-300 hover:bg-[#66c0f4]/20 hover:text-white"
                    >
                      ${amt}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Payment Method</Label>
                <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
                  <TabsList className="grid grid-cols-3 bg-[#1b2838]/50">
                    <TabsTrigger value="card" className="data-[state=active]:bg-[#66c0f4] data-[state=active]:text-white">
                      <Icon name="CreditCard" size={18} className="mr-2" />
                      Card
                    </TabsTrigger>
                    <TabsTrigger value="wallet" className="data-[state=active]:bg-[#66c0f4] data-[state=active]:text-white">
                      <Icon name="Wallet" size={18} className="mr-2" />
                      Wallet
                    </TabsTrigger>
                    <TabsTrigger value="transfer" className="data-[state=active]:bg-[#66c0f4] data-[state=active]:text-white">
                      <Icon name="ArrowRightLeft" size={18} className="mr-2" />
                      Transfer
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="card" className="mt-4">
                    <div className="text-gray-300 space-y-2 bg-[#1b2838]/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>Visa, MasterCard, American Express</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>0% commission</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="wallet" className="mt-4">
                    <div className="text-gray-300 space-y-2 bg-[#1b2838]/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>PayPal, Skrill, Neteller</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>Instant delivery</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="transfer" className="mt-4">
                    <div className="text-gray-300 space-y-2 bg-[#1b2838]/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>Bank transfer, Wire transfer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>Cryptocurrency accepted</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <Button type="submit" className="w-full bg-[#66c0f4] hover:bg-[#5ab0e0] text-white font-semibold py-6 text-lg">
                Proceed to Payment
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section id="faq" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                How fast are funds credited?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                On average, funds are credited within 1-2 minutes after payment confirmation. In rare cases, it may take up to 15 minutes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                Are there any fees?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We don't charge any commission! You pay exactly the amount you want to receive on your Steam account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                Is it safe to top up my balance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Yes, absolutely safe. We use official Steam top-up methods and secure payment gateways. Your data is reliably protected.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                What payment methods are available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Credit cards (Visa, MasterCard, Amex), e-wallets (PayPal, Skrill, Neteller), bank transfers, and cryptocurrency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                What if funds don't arrive?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Contact our support team via the contact form or email. We'll promptly resolve any issue.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-gray-300 mb-8">Have questions? We're always here to help</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
              <CardHeader>
                <Icon name="Mail" size={32} className="text-[#66c0f4] mb-2 mx-auto" />
                <CardTitle className="text-white">Email</CardTitle>
                <CardDescription className="text-gray-300">support@steamtopup.com</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
              <CardHeader>
                <Icon name="MessageCircle" size={32} className="text-[#66c0f4] mb-2 mx-auto" />
                <CardTitle className="text-white">Live Chat</CardTitle>
                <CardDescription className="text-gray-300">Available 24/7</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#66c0f4]/20 bg-[#1b2838]/95 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2024 SteamTopUp. All rights reserved.</p>
          <p className="text-sm mt-2">We are not an official partner of Valve or Steam</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
