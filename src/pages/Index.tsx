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

  const quickAmounts = [100, 500, 1000, 2000, 5000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!steamId || !amount) {
      toast.error('Заполните все поля');
      return;
    }
    toast.success('Заявка принята! Ожидайте перенаправления на оплату...');
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
            <a href="#home" className="text-gray-300 hover:text-[#66c0f4] transition-colors">Главная</a>
            <a href="#topup" className="text-gray-300 hover:text-[#66c0f4] transition-colors">Пополнение</a>
            <a href="#faq" className="text-gray-300 hover:text-[#66c0f4] transition-colors">FAQ</a>
            <a href="#contacts" className="text-gray-300 hover:text-[#66c0f4] transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in">
            Пополнение Steam за минуту
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in">
            Быстро, безопасно, без комиссий. Более 10 способов оплаты
          </p>
          <Button 
            size="lg" 
            className="bg-[#66c0f4] hover:bg-[#5ab0e0] text-white font-semibold px-8 py-6 text-lg animate-scale-in"
            onClick={() => document.getElementById('topup')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Пополнить сейчас
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
            <CardHeader>
              <Icon name="Zap" size={40} className="text-[#66c0f4] mb-2" />
              <CardTitle className="text-white">Мгновенно</CardTitle>
              <CardDescription className="text-gray-300">Зачисление за 1-2 минуты</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
            <CardHeader>
              <Icon name="Shield" size={40} className="text-[#66c0f4] mb-2" />
              <CardTitle className="text-white">Безопасно</CardTitle>
              <CardDescription className="text-gray-300">Защищенные платежи</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
            <CardHeader>
              <Icon name="Percent" size={40} className="text-[#66c0f4] mb-2" />
              <CardTitle className="text-white">Без комиссий</CardTitle>
              <CardDescription className="text-gray-300">Оплачиваете ровно столько, сколько пополняете</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="topup" className="container mx-auto px-4 py-20">
        <Card className="max-w-2xl mx-auto bg-[#2a475e]/70 border-[#66c0f4]/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl text-white">Пополнить баланс Steam</CardTitle>
            <CardDescription className="text-gray-300">Выберите сумму и способ оплаты</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="steamId" className="text-white">Steam ID или ссылка на профиль</Label>
                <Input
                  id="steamId"
                  placeholder="Введите ваш Steam ID"
                  value={steamId}
                  onChange={(e) => setSteamId(e.target.value)}
                  className="bg-[#1b2838]/50 border-[#66c0f4]/30 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount" className="text-white">Сумма пополнения (₽)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Введите сумму"
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
                      {amt} ₽
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Способ оплаты</Label>
                <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
                  <TabsList className="grid grid-cols-3 bg-[#1b2838]/50">
                    <TabsTrigger value="card" className="data-[state=active]:bg-[#66c0f4] data-[state=active]:text-white">
                      <Icon name="CreditCard" size={18} className="mr-2" />
                      Карта
                    </TabsTrigger>
                    <TabsTrigger value="wallet" className="data-[state=active]:bg-[#66c0f4] data-[state=active]:text-white">
                      <Icon name="Wallet" size={18} className="mr-2" />
                      Кошелек
                    </TabsTrigger>
                    <TabsTrigger value="transfer" className="data-[state=active]:bg-[#66c0f4] data-[state=active]:text-white">
                      <Icon name="ArrowRightLeft" size={18} className="mr-2" />
                      Перевод
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="card" className="mt-4">
                    <div className="text-gray-300 space-y-2 bg-[#1b2838]/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>Visa, MasterCard, МИР</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>Комиссия 0%</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="wallet" className="mt-4">
                    <div className="text-gray-300 space-y-2 bg-[#1b2838]/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>QIWI, ЮMoney, WebMoney</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>Мгновенное зачисление</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="transfer" className="mt-4">
                    <div className="text-gray-300 space-y-2 bg-[#1b2838]/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>СБП (Система быстрых платежей)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#66c0f4]" />
                        <span>Банковский перевод</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <Button type="submit" className="w-full bg-[#66c0f4] hover:bg-[#5ab0e0] text-white font-semibold py-6 text-lg">
                Перейти к оплате
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section id="faq" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                Как быстро зачисляются средства?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                В среднем зачисление происходит в течение 1-2 минут после подтверждения платежа. В редких случаях может занять до 15 минут.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                Какие есть комиссии?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Мы не берем комиссию за пополнение! Вы платите ровно ту сумму, которую хотите получить на свой Steam аккаунт.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                Безопасно ли пополнять баланс?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Да, абсолютно безопасно. Мы используем официальные методы пополнения Steam и защищенные платежные шлюзы. Ваши данные надежно защищены.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                Какие способы оплаты доступны?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Банковские карты (Visa, MasterCard, МИР), электронные кошельки (QIWI, ЮMoney, WebMoney), СБП и банковские переводы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#2a475e]/50 border-[#66c0f4]/20 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#66c0f4]">
                Что делать, если средства не пришли?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Свяжитесь с нашей службой поддержки через форму обратной связи или Telegram. Мы оперативно решим любую проблему.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Контакты</h2>
          <p className="text-gray-300 mb-8">Остались вопросы? Мы всегда на связи</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
              <CardHeader>
                <Icon name="Mail" size={32} className="text-[#66c0f4] mb-2 mx-auto" />
                <CardTitle className="text-white">Email</CardTitle>
                <CardDescription className="text-gray-300">support@steamtopup.ru</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#2a475e]/50 border-[#66c0f4]/20 backdrop-blur-sm hover:border-[#66c0f4]/50 transition-all">
              <CardHeader>
                <Icon name="MessageCircle" size={32} className="text-[#66c0f4] mb-2 mx-auto" />
                <CardTitle className="text-white">Telegram</CardTitle>
                <CardDescription className="text-gray-300">@steamtopup_support</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#66c0f4]/20 bg-[#1b2838]/95 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2024 SteamTopUp. Все права защищены.</p>
          <p className="text-sm mt-2">Мы не являемся официальным партнером Valve или Steam</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
