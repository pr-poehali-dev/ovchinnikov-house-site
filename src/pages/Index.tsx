import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const historyEvents = [
    {
      year: "1850",
      title: "Строительство особняка",
      description: "Дом построен для семьи купца Овчинникова, одного из влиятельных жителей Воткинска"
    },
    {
      year: "1890",
      title: "Расцвет усадьбы",
      description: "Период активной культурной жизни особняка, проведение приёмов и балов"
    },
    {
      year: "1920",
      title: "Национализация",
      description: "После революции здание передано в государственную собственность"
    },
    {
      year: "2000",
      title: "Статус памятника",
      description: "Присвоение статуса объекта культурного наследия регионального значения"
    },
    {
      year: "2015",
      title: "Реставрация",
      description: "Начало работ по восстановлению исторического облика здания"
    }
  ];

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/projects/0c1d0846-790c-45f8-b5f0-74aa60bd4d87/files/5f80c09f-9943-49e8-867d-869a52f7a2d9.jpg",
      title: "Главный фасад",
      period: "Исторический вид"
    },
    {
      url: "https://cdn.poehali.dev/projects/0c1d0846-790c-45f8-b5f0-74aa60bd4d87/files/7bfbe1d3-ead7-4381-b440-7d796d86faf5.jpg",
      title: "Интерьеры",
      period: "XIX век"
    },
    {
      url: "https://cdn.poehali.dev/projects/0c1d0846-790c-45f8-b5f0-74aa60bd4d87/files/cbc9560d-c2a3-4b58-a89f-7f6ea24303de.jpg",
      title: "Внутренний двор",
      period: "Современный вид"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Дом Овчинникова</h1>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('history')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              История
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Галерея
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-foreground">
            Дом Овчинникова
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Памятник архитектуры регионального значения в городе Воткинск
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('history')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Узнать историю
            </Button>
            <Button 
              onClick={() => scrollToSection('gallery')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Смотреть галерею
            </Button>
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="Building" className="text-primary" size={32} />
            <h2 className="text-4xl font-light text-foreground">История дома</h2>
          </div>
          
          <div className="space-y-8">
            {historyEvents.map((event, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-l-0 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <div className="mb-2">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="Camera" className="text-primary" size={32} />
            <h2 className="text-4xl font-light text-foreground">Фотогалерея</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="text-lg font-semibold mb-1 text-card-foreground">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.period}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="MapPin" className="text-muted-foreground" size={24} />
            <Icon name="Phone" className="text-muted-foreground" size={24} />
            <Icon name="Mail" className="text-muted-foreground" size={24} />
          </div>
          <p className="text-sm text-muted-foreground">
            Дом Овчинникова · Памятник архитектуры · Воткинск
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2025 Объект культурного наследия регионального значения
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
