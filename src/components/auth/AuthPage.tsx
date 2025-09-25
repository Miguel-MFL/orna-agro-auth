import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { Wheat, Tractor } from 'lucide-react';
import agroBackground from '@/assets/agro-background.jpg';

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 gradient-earth">
        <div className="w-full max-w-md">
          {isLogin ? (
            <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>

      {/* Right side - Branding and Background */}
      <div 
        className="hidden lg:flex lg:flex-1 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${agroBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-12">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <Wheat className="h-12 w-12 text-accent" />
                <div className="text-6xl font-heading font-bold tracking-wider">
                  ORNA
                </div>
                <Tractor className="h-12 w-12 text-accent" />
              </div>
            </div>
            <div className="h-1 w-32 gradient-accent rounded-full mx-auto mb-6" />
          </div>

          {/* Tagline */}
          <div className="space-y-4 max-w-md">
            <h2 className="text-3xl font-heading font-semibold">
              Sua parceira no campo
            </h2>
            <p className="text-xl text-white/90">
              Conectando produtores rurais com tecnologia e inovação para uma agricultura mais eficiente e sustentável.
            </p>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 gap-6 max-w-sm">
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Gestão de propriedades rurais</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Controle de estoque e produção</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Monitoramento climático</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Análise de dados e relatórios</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}