
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import WikiContent from '@/components/WikiContent';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = isSignUp 
        ? await signUp(email, password)
        : await signIn(email, password);

      if (error) {
        toast({
          title: "Fout",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: isSignUp ? "Account aangemaakt" : "Ingelogd",
          description: isSignUp 
            ? "Je account is succesvol aangemaakt!"
            : "Je bent succesvol ingelogd!",
        });
        navigate('/');
      }
    } catch (error) {
      toast({
        title: "Fout",
        description: "Er is iets misgegaan. Probeer het opnieuw.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <WikiContent>
      <div className="max-w-md mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {isSignUp ? 'Account Aanmaken' : 'Inloggen'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="je@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Wachtwoord
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Bezig...' : (isSignUp ? 'Account Aanmaken' : 'Inloggen')}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                {isSignUp 
                  ? 'Heb je al een account? Inloggen'
                  : 'Nog geen account? Account aanmaken'
                }
              </button>
            </div>

            {isSignUp && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
                <strong>Let op:</strong> Nieuwe accounts hebben standaard 'user' rechten. 
                Neem contact op met een admin voor upgrade naar admin rechten.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </WikiContent>
  );
};

export default Login;
